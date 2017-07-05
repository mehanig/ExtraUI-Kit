import * as React from "react";

// TODO: import Radium from "radium"; doesn't work WAT??
// import Radium from "radium"
const Radium = require("radium");
import {StyleRoot} from "radium";
import {CSSProperties} from "../css_types";
import * as css from "./css_eb_checkbox";

export type StringFunction = () => string;
export type StringToVoid = (f: string | number | boolean) => void;

export interface CheckboxProps {
  name: string,
  children?: React.ReactChild,
  className?: string,
  selected?: boolean,
  disabled?: boolean,
  notifyOnChange?: StringToVoid
}

export interface CheckboxState {
  name: string
  isDisabled: boolean,
  isSelected: boolean,
}


class _EB_Checkbox extends React.Component<CheckboxProps, CheckboxState> {
  constructor(props: CheckboxProps) {
    super();
    this.state = {
      name: props.name,
      isDisabled: props.disabled,
      isSelected: props.selected,
    };
  }

  _updateStateAndNotify(isSelected: boolean) {
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

  handleOptionChange(): void {
    this._updateStateAndNotify(!this.state.isSelected);
  }

  handleNameClick(): void {
    this._updateStateAndNotify(!this.state.isSelected);
  }

  render() {
    const stylesLiArr: [CSSProperties] = this.state.isDisabled ? [css.Li_base, css.Li_disabled] : [css.Li_base, css.Li_active];
    const css_input_arr: [CSSProperties] = this.state.isDisabled ? [css.Input, css.Input_disabled] : [css.Input, css.Input_active];
    return <div>
      <StyleRoot>
        <div style={[css.Base]}>
          <input type="checkbox"
                 checked={this.state.isSelected}
                 onChange={() => { this.handleOptionChange(); }}/>
          <div style={[css.Title]} onClick={() => { this.handleNameClick(); }}>{this.state.name}</div>
        </div>
      </StyleRoot>
    </div>;
  }
}

export { _EB_Checkbox };
const EB_Checkbox = Radium(_EB_Checkbox);
export { EB_Checkbox };