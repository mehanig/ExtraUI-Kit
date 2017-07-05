import * as React from "react";

// TODO: import Radium from "radium"; doesn't work WAT??
// import Radium from "radium";
const Radium = require("radium");
import {StyleRoot} from "radium";
import {CSSProperties} from "../css_types";
import * as css from "./css_eb_valueslider";

export type StringFunction = () => string;
export type StringToVoid = (f: string | number) => void;

export interface ValueSliderProps {
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

export interface ValueSliderState {
  isDisabled?: boolean,
  title: string | StringFunction,
  currentValue: number,
  mouseMoveReady: boolean,
  currentXPos: number,
  initialXPos?: number,
  initialSliderValue?: number,
  isEditBoxMounted: boolean
}

class _ValueSlider extends React.Component<ValueSliderProps, ValueSliderState> {
  constructor(props: ValueSliderProps) {
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
  }

  _updateStateAndNotify(currentValue: number) {
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

  onMouseDown(mouseEvent: React.MouseEvent<HTMLSpanElement>): void {
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

  onMouseMove(mouseEvent: any): void {
    if (this.state.mouseMoveReady) {
      const initialValue = this.state.initialSliderValue;
      const initialX = this.state.initialXPos;
      const currX = mouseEvent.pageX;
      const currValue = initialValue + currX - initialX;
      this._updateStateAndNotify(currValue);
    }
  }

  onMouseUp(mouseEvent: any): void {
    this.setState({
      mouseMoveReady: false,
    });
    window.removeEventListener("mousemove", this.onMouseMove);
    window.removeEventListener("mouseup", this.onMouseUp);
  }

  mountEditValueBox(): void {
    const isEditBoxMounted = !this.state.isEditBoxMounted;
    this.setState({isEditBoxMounted});
  }

  unmountEditValueBoxSave(): void {
    alert("NotImplemented");
  }

  render() {
    const mainBase: [CSSProperties] = this.props.sizeH ? [css.Main_base, {"width": `${this.props.sizeH}px`}] : [css.Main_base];
    return (
      <div>
        <StyleRoot>
          <div style={mainBase}>
            <span style={[css.Title]}>{this.state.title}</span>
            {!this.state.isEditBoxMounted ?
              (
                <span style={[css.Draggable]} onMouseDown={(e) => { this.onMouseDown(e); }} onMouseMove={(e) => { this.onMouseMove(e); }} onDoubleClick={(e) => { this.mountEditValueBox(); }} onMouseUp={(e) => { this.onMouseUp(e); }}>
                  {this.state.currentValue}
                </span>
              ) : (
                <span style={[css.Draggable]} onClick={(e) => { this.unmountEditValueBoxSave(); }}>
                  <input style={[css.Input_field]}/>
                </span>
              )
            }
          </div>
        </StyleRoot>
      </div>
    );
  }
}

export { _ValueSlider };
const ValueSlider = Radium(_ValueSlider);
export { ValueSlider };
