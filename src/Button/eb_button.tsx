import * as React from "react";
import * as Radium from "radium";
import {ICSSProperties} from "../css_types";
import {CssActive, CssBase, CssDisabled, CssPBase} from "./css_eb_button";

export type StringFunction = () => string;

export interface IButtonProps {
  children?: React.ReactChild,
  className?: string,
  onClickHandler?: any,
  text?: string | StringFunction,
  disabled?: any
}

export interface IButtonState {
  onClickHandler?: any
  buttonText?: string | StringFunction
  isDisabled?: boolean
}

class EBButton extends React.Component<IButtonProps, IButtonState> {
  constructor(props: IButtonProps) {
    super();
    this.state = {
      onClickHandler: props.onClickHandler,
      buttonText: props.text || "Button",
      isDisabled: props.disabled ? true : false,
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  public render() {
    const onClick: any = this.state.isDisabled ? null : this.onClickHandler;
    const stylesArr: [ICSSProperties] = this.state.isDisabled ? [CssBase, CssDisabled] : [CssBase, CssActive];
    return (
      <div>
        <Radium.StyleRoot>
          <div style={[stylesArr]} onClick={onClick}><p style={[CssPBase]}>{this.state.buttonText}</p></div>
        </Radium.StyleRoot>
      </div>
    );
  }

  private onClickHandler(): void {
    this.state.onClickHandler();
  }
}

export { EBButton };
const Button = Radium(EBButton);
export { Button };
