import * as React from "react";

// TODO: import Radium from "radium"; doesn't work WAT??
// import Radium from "radium";
let Radium = require('radium');
import {StyleRoot} from 'radium';
import {CSSProperties} from '../css_types';
import * as css from './css_eb_radiobutton'

export type StringFunction = () => string;


export interface RadioButtonProps {
  name: string,
  children?: React.ReactChild,
  className?: string,
  values:  [string],
  disabled?: any,
  textValues?: [string | StringFunction],
  title?: string | StringFunction,
  selectedOption?: string,
  notifyOnChange?: (string) => void
}

export interface RadioButtonState {
  name: string
  isDisabled?: boolean,
  values:  [string],
  textValues: [string | StringFunction],
  title?: string | StringFunction,
  selectedOption?: string,
}


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
        this.props.notifyOnChange(selectedOption);
      }
      this.setState({selectedOption});
    }
  }

  handleOptionChange(changeEvent: React.ChangeEvent<HTMLInputElement>) : void {
    const safeSearchTypeValue: string = changeEvent.currentTarget.value;
    this._updateStateAndNotify(safeSearchTypeValue);
  }

  handleLiClick(clickEvent: React.MouseEvent<HTMLSpanElement>) : void {
    const safeSearchTypeValue: string = clickEvent.currentTarget.getAttribute('value');
    this._updateStateAndNotify(safeSearchTypeValue);
  }

  render() {
    const stylesLiArr: [CSSProperties] = this.state.isDisabled ? [css.li_base, css.li_disabled] : [css.li_base, css.li_active];
    const css_input_arr: [CSSProperties] = this.state.isDisabled ? [css.input, css.input_disabled] : [css.input, css.input_active];
    const li_elements = this.state.values.map((item_value, index) => {
      return <li key={item_value + index} style={stylesLiArr}>
        <input checked={this.state.selectedOption === item_value}
               onChange={(e) => {this.handleOptionChange(e)}}
               style={css_input_arr}
               type="radio"
               name={this.props.name}
               value={item_value} />
        <span style={[css.text]}
              value={item_value}
              onClick={(e) => {this.handleLiClick(e)}}>{this.state.textValues[index]}</span>
      </li>
    });
    return <div>
      <StyleRoot>
        <div style={[css.ul_base]}>
          {this.state.title ? <div style={[css.title]}>{this.state.title}: {this.state.selectedOption}</div> : null}
          {li_elements}
        </div>
      </StyleRoot>
    </div>
  }
}

export { _EB_RadioButtonList };
let EB_RadioButtonList = Radium(_EB_RadioButtonList);
export { EB_RadioButtonList };