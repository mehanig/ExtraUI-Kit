import * as React from "react";

// TODO: import Radium from "radium"; doesn't work WAT??
// import Radium from "radium";
const Radium = require("radium");
import {StyleRoot} from "radium";
import {ICSSProperties} from "../css_types";
import * as css from "./css_eb_valueslider";

export type StringFunction = () => string;
export type StringToVoid = (f: string | number) => void;

export interface IValueSliderProps {
  children?: React.ReactChild,
  className?: string,
  disabled?: boolean,
  maxValue: number,
  minValue: number
  title: string | StringFunction,
  currentValue?: number,
  notifyOnChange?: StringToVoid,
  sizeH?: number
}

export interface IValueSliderState {
  isDisabled?: boolean,
  title: string | StringFunction,
  currentValue: number,
  mouseMoveReady: boolean,
  currentXPos: number,
  initialXPos?: number,
  initialSliderValue?: number,
  isEditBoxMounted: boolean
}

class EBValueSlider extends React.Component<IValueSliderProps, IValueSliderState> {
  constructor(props: IValueSliderProps) {
    super();
    const max: number = props.maxValue;
    const min: number = props.minValue;
    this.state = {
      isDisabled: props.disabled ? true : false,
      title: props.title,
      currentValue: props.currentValue ? props.currentValue : (min + max) / 2,
      mouseMoveReady: false,
      currentXPos: 0,
      isEditBoxMounted: false,
    };
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.mountEditValueBox = this.mountEditValueBox.bind(this);
    this.unmountEditValueBoxSave = this.unmountEditValueBoxSave.bind(this);
  }

  public render() {
    const mainBase: [ICSSProperties] =
      this.props.sizeH ? [css.MainBase, {width: `${this.props.sizeH}px`}] : [css.MainBase];
    const noEditBoxSlider =
      (
        <span
          style={[css.Draggable]}
          onMouseDown={this.onMouseDown}
          onMouseMove={this.onMouseMove}
          onDoubleClick={this.mountEditValueBox}
          onMouseUp={this.onMouseUp}
        >
          {this.state.currentValue}
        </span>
      );
    const EditBoxSlider =
      (
        <span style={[css.Draggable]} onClick={this.unmountEditValueBoxSave}>
          <input style={[css.InputField]}/>
        </span>
      );
    return (
      <div>
        <StyleRoot>
          <div style={mainBase}>
            <span style={[css.Title]}>{this.state.title}</span>
            {!this.state.isEditBoxMounted ? noEditBoxSlider : EditBoxSlider}
          </div>
        </StyleRoot>
      </div>
    );
  }

  private _updateStateAndNotify(currentValue: number) {
    if (!this.state.isDisabled) {
      if (this.props.notifyOnChange) {
        this.setState({currentValue}, () => {
          this.props.notifyOnChange(currentValue);
        });
      } else {
        this.setState({currentValue});
      }
    }
  }

  private onMouseDown(mouseEvent: React.MouseEvent<HTMLSpanElement>): void {
    const max: number = this.props.maxValue;
    const min: number = this.props.minValue;
    this.setState({
      mouseMoveReady: true,
      initialXPos: mouseEvent.pageX,
      initialSliderValue: this.state.currentValue ? this.state.currentValue : (min + max) / 2,
    });
    window.addEventListener("mousemove", this.onMouseMove);
    window.addEventListener("mouseup", this.onMouseUp);
  }

  private onMouseMove(mouseEvent: any): void {
    if (this.state.mouseMoveReady) {
      const initialValue = this.state.initialSliderValue;
      const initialX = this.state.initialXPos;
      const currX = mouseEvent.pageX;
      const currValue = initialValue + currX - initialX;
      this._updateStateAndNotify(currValue);
    }
  }

  private onMouseUp(mouseEvent: any): void {
    this.setState({
      mouseMoveReady: false,
    });
    window.removeEventListener("mousemove", this.onMouseMove);
    window.removeEventListener("mouseup", this.onMouseUp);
  }

  private mountEditValueBox(): void {
    const isEditBoxMounted = !this.state.isEditBoxMounted;
    this.setState({isEditBoxMounted});
  }

  private unmountEditValueBoxSave(): void {
    alert("NotImplemented");
  }
}

export { EBValueSlider };
const ValueSlider = Radium(EBValueSlider);
export { ValueSlider };
