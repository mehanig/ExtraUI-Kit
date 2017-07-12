import * as Radium from "radium";
import * as React from "react";
import {ICSSProperties} from "../css_types";
import * as css from "./css_eb_checkbox";
import Props = React.Props;

export type StringToVoid = (f: string | number | boolean) => void;

export interface ICheckboxProps {
  name: string,
  children?: React.ReactChild,
  className?: string,
  selected?: boolean,
  disabled?: boolean,
  notifyOnChange?: StringToVoid
}

export interface ICheckboxState {
  name: string
  isDisabled: boolean,
  isSelected: boolean,
}

class EBCheckbox extends React.Component<ICheckboxProps, ICheckboxState> {
  constructor(props: ICheckboxProps) {
    super();
    this.state = {
      name: props.name,
      isDisabled: props.disabled,
      isSelected: props.selected,
    };
    this.handleOptionChange =  this.handleOptionChange.bind(this);
    this.handleNameClick = this.handleNameClick.bind(this);
  }

  public componentWillReceiveProps(nextProps: ICheckboxProps) {
    if (this.props.selected !== nextProps.selected) {
      this.setState({isSelected: nextProps.selected});
    }
    if (this.props.disabled !== nextProps.disabled) {
      this.setState({isDisabled: nextProps.disabled});
    }
  }

  public render() {
    return (
      <div>
        <Radium.StyleRoot>
          <div style={[css.Base]}>
            <input type="checkbox" checked={this.state.isSelected} onChange={this.handleOptionChange}/>
            <div style={[css.Title]} onClick={this.handleNameClick}>{this.state.name}</div>
          </div>
        </Radium.StyleRoot>
      </div>
    );
  }

  private _updateStateAndNotify(isSelected: boolean) {
    if (!this.state.isDisabled) {
      if (this.props.notifyOnChange) {
        this.setState({isSelected}, () => {
          this.props.notifyOnChange(isSelected);
        });
      } else {
        this.setState({isSelected});
      }
    }
  }

  private handleOptionChange(): void {
    this._updateStateAndNotify(!this.state.isSelected);
  }

  private handleNameClick(): void {
    this._updateStateAndNotify(!this.state.isSelected);
  }
}

export { EBCheckbox };
const Checkbox = Radium(EBCheckbox);
export { Checkbox };
