import * as Radium from "radium";
import * as React from "react";
import {ICSSProperties} from "../css_types";
import {AEButton, AECssActive, AECssDisabled, CssActive, CssBase, CssDisabled, CssPBase} from "./css_eb_button";

export interface IButtonProps {
  /** Callback function to be invoked when button is clicked */
  onClickHandler?: any,
  /** Text to appear on button */
  text?: string,
  /** Specify if button should be non clickable */
  disabled?: any,
  /** Extra parameter to specify if button should be used without styling */
  UIType?: string
}

export interface IButtonState {
  buttonText?: string
  isDisabled?: boolean
}

/**
 * Button component
 */
@Radium
export default class Button extends React.Component<IButtonProps, IButtonState> {
  constructor(props: IButtonProps) {
    super();
    this.state = {
      buttonText: props.text || "Button",
      isDisabled: !!props.disabled,
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  public render() {
    const onClick: any = this.state.isDisabled ? null : this.onClickHandler;
    const stylesArr: [ICSSProperties] = (this.props.UIType === "AE") ?
      this.state.isDisabled ? [AEButton, AECssDisabled] : [AEButton, AECssActive]
    :
      this.state.isDisabled ? [CssBase, CssDisabled] : [CssBase, CssActive];
    return (
      <div>
        <Radium.StyleRoot>
          <div className="extraui-kit__button-main" style={[stylesArr]} onClick={onClick}>
            <p style={[CssPBase]}>{this.state.buttonText}</p></div>
        </Radium.StyleRoot>
      </div>
    );
  }

  private onClickHandler(e: React.MouseEvent<any>, obj: any): void {
    this.props.onClickHandler(e, obj);
  }
}
