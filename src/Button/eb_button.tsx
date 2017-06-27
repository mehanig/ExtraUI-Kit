import * as React from "react";

// TODO: import Radium from "radium"; doesn't work WAT??
// import Radium from "radium";
let Radium = require('radium');
import {StyleRoot} from 'radium';
import {CSSProperties} from '../css_types';
import {css_base, css_disabled, css_active, css_p_base} from './css_eb_button'

export type StringFunction = () => string;


export interface ButtonProps {
  children?: React.ReactChild,
  className?: string,
  onClickHandler?: any,
  text?:  string | StringFunction,
  disabled?: any
}

export interface ButtonState {
  onClickHandler?: any
  buttonText?: string | StringFunction
  isDisabled?: boolean
}

class _EB_Button extends React.Component<ButtonProps, ButtonState> {
  constructor(props: ButtonProps) {
    super();
    this.state = {
      onClickHandler: props.onClickHandler,
      buttonText: props.text || "Button",
      isDisabled: props.disabled ? true : false
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() : void {
    this.state.onClickHandler();
  }

  render() {
    const onClick: any = this.state.isDisabled ? null : this.onClickHandler;
    const stylesArr: [CSSProperties] = this.state.isDisabled ? [css_base, css_disabled] : [css_base, css_active];
    return <div>
      <StyleRoot>
        <div style={[stylesArr]} onClick={onClick}><p style={[css_p_base]}>{this.state.buttonText}</p></div>
      </StyleRoot>
    </div>
  }
}

export { _EB_Button };
let EB_Button = Radium(_EB_Button);
export { EB_Button };