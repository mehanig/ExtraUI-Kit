import * as React from "react";

// TODO: import Radium from "radium"; doesn't work WAT??
// import Radium from "radium";
const Radium = require("radium");
import {StyleRoot} from "radium";
import {CSSProperties} from "../css_types";
import * as css from "./css_eb_radiobutton";

export type StringFunction = () => string;
export type StringToVoid = (f: string | number) => void;


export interface RadioButtonProps {
  name: string,
  children?: React.ReactChild,
  className?: string,
  values:  [string],
  disabled?: any,
  textValues?: [string | StringFunction],
  title?: string | StringFunction,
  selectedOption?: string,
  notifyOnChange?: StringToVoid
}

export interface RadioButtonState {
  name: string
  isDisabled?: boolean,
  values:  [string],
  textValues: [string | StringFunction],
  title?: string | StringFunction,
  selectedOption?: string,
};


class _EB_RadioButtonList extends React.Component<RadioButtonProps, RadioButtonState> {
  constructor(props: RadioButtonProps) {
    super();
    this.state = {
      values: props.values,
      isDisabled: props.disabled ? true : false,
      name: props.name,
      textValues: props.textValues ? props.textValues : props.values,
      title: props.title,
      selectedOption: props.selectedOption
    };
  }

  _updateStateAndNotify(selectedOption: string) {
    if (!this.state.isDisabled) {
      if (this.props.notifyOnChange) {
        this.setState({selectedOption}, () => {
          this.props.notifyOnChange(selectedOption);
        })
      } else {
        this.setState({selectedOption});
      }
    }
  }

  handleOptionChange(changeEvent: React.ChangeEvent<HTMLInputElement>): void {
    const safeSearchTypeValue: string = changeEvent.currentTarget.value;
    this._updateStateAndNotify(safeSearchTypeValue);
  }

  handleLiClick(clickEvent: React.MouseEvent<HTMLSpanElement>): void {
    const safeSearchTypeValue: string = clickEvent.currentTarget.getAttribute("value");
    this._updateStateAndNotify(safeSearchTypeValue);
  }

  render() {
    const stylesLiArr: [CSSProperties] = this.state.isDisabled ? [css.Li_base, css.Li_disabled] : [css.Li_base, css.Li_active];
    const css_input_arr: [CSSProperties] = this.state.isDisabled ? [css.Input, css.Input_disabled] : [css.Input, css.Input_active];
    const li_elements = this.state.values.map((item_value, index) => {
      return <li key={item_value + index} style={stylesLiArr}>
        <input checked={this.state.selectedOption === item_value}
               onChange={(e) => {this.handleOptionChange(e);}}
               style={css_input_arr}
               type="radio"
               name={this.props.name}
               value={item_value} />
        <span style={[css.Text]}
              value={item_value}
              onClick={(e) => { this.handleLiClick(e); }}>{this.state.textValues[index]}</span>
      </li>
    });
    return <div>
      <StyleRoot>
        <div style={[css.Ul_base]}>
          {this.state.title ? <div style={[css.Title]}>{this.state.title}: {this.state.selectedOption}</div> : null}
          {li_elements}
        </div>
      </StyleRoot>
    </div>
  }
}

export { _EB_RadioButtonList };
const EB_RadioButtonList = Radium(_EB_RadioButtonList);
export { EB_RadioButtonList };