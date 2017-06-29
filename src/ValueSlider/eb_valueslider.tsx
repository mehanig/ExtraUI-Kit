import * as React from "react"

// TODO: import Radium from "radium"; doesn't work WAT??
// import Radium from "radium";
let Radium = require('radium')
import {StyleRoot} from 'radium'
import {CSSProperties} from '../css_types'
import * as css from './css_eb_valueslider'

export type StringFunction = () => string;


export interface ValueSliderProps {
  children?: React.ReactChild,
  className?: string,
  disabled?: boolean,
  maxValue: number,
  minValue: number
  title: string | StringFunction,
  currentValue?: number,
  notifyOnChange?: (string) => void
}

export interface ValueSliderState {
  isDisabled?: boolean,
  title: string | StringFunction,
  currentValue: number,
  mouseMoveReady: boolean,
  currentXPos: number,
  initialXPos?: number,
  initialSliderValue?: number
}


class _EB_ValueSlider extends React.Component<ValueSliderProps, ValueSliderState> {
  constructor(props: ValueSliderProps) {
    super();
    const max: number = props.maxValue;
    const min: number = props.minValue;
    this.state = {
      isDisabled: props.disabled ? true : false,
      title: props.title,
      currentValue: props.currentValue ? props.currentValue : (min+max)/2,
      mouseMoveReady: false,
      currentXPos: 0,
    }
    this.onMouseMove = this.onMouseMove.bind(this)
    this.onMouseUp = this.onMouseUp.bind(this)
  }

  _updateStateAndNotify(currentValue: number) {
    if (!this.state.isDisabled) {
      if (this.props.notifyOnChange) {
        this.setState({currentValue}, () => {
          this.props.notifyOnChange(currentValue)
        })
      } else {
        this.setState({currentValue})
      }
    }
  }

  onMouseDown(mouseEvent: React.MouseEvent<HTMLSpanElement>) : void {
    const max: number = this.props.maxValue
    const min: number = this.props.minValue
    this.setState({
      mouseMoveReady: true,
      initialXPos: mouseEvent.pageX,
      initialSliderValue: this.state.currentValue ? this.state.currentValue : (min+max)/2
    })
    window.addEventListener("mousemove", this.onMouseMove)
    window.addEventListener("mouseup", this.onMouseUp)
  }

  onMouseMove(mouseEvent: any) :void {
    if (this.state.mouseMoveReady) {
      const initialValue = this.state.initialSliderValue
      const initialX = this.state.initialXPos
      const currX = mouseEvent.pageX
      const currValue = initialValue + currX - initialX
      this._updateStateAndNotify(currValue)
    }
  }

  onMouseUp(mouseEvent: any) : void {
    this.setState({
      mouseMoveReady: false
    })
    window.removeEventListener("mousemove", this.onMouseMove)
    window.removeEventListener("mouseup", this.onMouseUp)
  }

  render() {
    const stylesLiArr: [CSSProperties] = this.state.isDisabled ? [css.main_base, css.main_disabled] : [css.main_base, css.main_active];
    return <div>
      <StyleRoot>
        <div style={[css.main_base]}>
          <span style={[css.title]}>{this.state.title}</span>
          <span style={[css.draggable]}
                onMouseDown={e=>{this.onMouseDown(e)}}
                onMouseMove={e=>{this.onMouseMove(e)}}
                onMouseUp={e=>{this.onMouseUp(e)}}>{this.state.currentValue}</span>
        </div>
      </StyleRoot>
    </div>
  }
}

export { _EB_ValueSlider }
let EB_ValueSlider = Radium(_EB_ValueSlider)
export { EB_ValueSlider }