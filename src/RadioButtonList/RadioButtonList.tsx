import * as Radium from "radium";
import * as React from "react";
import {ICSSProperties} from "../css_types";
import * as css from "./css_eb_radiobutton";

export type StringFunction = () => string;
export type StringToVoid = (f: string | number) => void;

export interface IRadioButtonProps {
  /** Name for Radiobutton Group */
  name: string,
  /** List of available values, if `textValues` list not specified, this array will be used both for displaying
   * text right of radiobox and for values
   */
  values: [string],
  /** Specify if should be disabled */
  disabled?: any,
  /** Optional list of values to present readable names for labels, should be same length as `values` array  */
  textValues?: [string | StringFunction],
  /** Title for radiogroup */
  title?: string | StringFunction,
  /** Default selected value, should be from values list */
  selectedOption?: string,
  /** Function to be called after every value change */
  notifyOnChange?: StringToVoid
}

export interface IRadioButtonState {
  name: string
  isDisabled?: boolean,
  values: [string],
  textValues: [string | StringFunction],
  title?: string | StringFunction,
  selectedOption?: string,
}

/**
 * Group of radiobuttons
 */
@Radium
export default class RadiobuttonList extends React.Component<IRadioButtonProps, IRadioButtonState> {
  constructor(props: IRadioButtonProps) {
    super();
    this.state = {
      values: props.values,
      isDisabled: !!props.disabled,
      name: props.name,
      textValues: props.textValues ? props.textValues : props.values,
      title: props.title,
      selectedOption: props.selectedOption,
    };
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleLiClick = this.handleLiClick.bind(this);
  }

  public render() {
    const stylesLiArr: [ICSSProperties] =
      this.state.isDisabled ? [css.LiBase, css.LiDisabled] : [css.LiBase];
    const cssInputArr: [ICSSProperties] =
      this.state.isDisabled ? [css.Input, css.InputDisabled] : [css.Input];
    const liElements = this.state.values.map((itemValue, index) => {
      return (
        <li key={itemValue + index} style={stylesLiArr}>
          <input
            checked={this.state.selectedOption === itemValue}
            onChange={this.handleOptionChange}
            style={cssInputArr}
            type="radio"
            name={this.props.name}
            value={itemValue}
          />
          <span
            style={[css.Text]}
            value={itemValue}
            onClick={this.handleLiClick}
          >
            {this.state.textValues[index]}
          </span>
        </li>
      );
    });
    return (
      <div>
        <Radium.StyleRoot>
          <div style={[css.UlBase]}>
            {this.state.title ? <div style={[css.Title]}>{this.state.title}</div> : null}
            {liElements}
          </div>
        </Radium.StyleRoot>
      </div>
    );
  }

  private _updateStateAndNotify(selectedOption: string) {
    if (!this.state.isDisabled) {
      if (this.props.notifyOnChange) {
        this.setState({selectedOption}, () => {
          this.props.notifyOnChange(selectedOption);
        });
      } else {
        this.setState({selectedOption});
      }
    }
  }

  private handleOptionChange(changeEvent: React.ChangeEvent<HTMLInputElement>): void {
    const safeSearchTypeValue: string = changeEvent.currentTarget.value;
    this._updateStateAndNotify(safeSearchTypeValue);
  }

  private handleLiClick(clickEvent: React.MouseEvent<HTMLSpanElement>): void {
    const safeSearchTypeValue: string = clickEvent.currentTarget.getAttribute("value");
    this._updateStateAndNotify(safeSearchTypeValue);
  }
}
