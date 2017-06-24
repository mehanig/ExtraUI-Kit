import * as React from "react";

// TODO: import Radium from "radium"; doesn't work WAT??
// import Radium from "radium";
let Radium = require('radium');
import {StyleRoot} from 'radium';
import {CSSProperties} from '../css_types';
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
  currentValue?: number,
}


class _EB_ValueSlider extends React.Component<ValueSliderProps, ValueSliderState> {
  constructor(props: ValueSliderProps) {
    super();
    this.state = {
      isDisabled: props.disabled ? true : false,
      title: props.title,
      currentValue: props.currentValue
    };
  }

  _updateStateAndNotify(currentValue: number) {
    if (!this.state.isDisabled) {
      if (this.props.notifyOnChange) {
        this.props.notifyOnChange(currentValue);
      }
      this.setState({currentValue});
    }
  }

  handleOptionChange(changeEvent: React.ChangeEvent<HTMLInputElement>) : void {
    const safeSearchTypeValue: number =  parseInt(changeEvent.currentTarget.value);
    this._updateStateAndNotify(safeSearchTypeValue);
  }

  handleLiClick(clickEvent: React.MouseEvent<HTMLSpanElement>) : void {
    const safeSearchTypeValue: number = parseInt(clickEvent.currentTarget.getAttribute('value'));
    this._updateStateAndNotify(safeSearchTypeValue);
  }

  render() {
    const stylesLiArr: [CSSProperties] = this.state.isDisabled ? [css.main_base, css.main_disabled] : [css.main_base, css.main_active];
    // const css_input_arr: [CSSProperties] = this.state.isDisabled ? [css.input, css.input_disabled] : [css.input, css.input_active];
    // return <li key={item_value + index} style={stylesLiArr}>
    //     <input checked={this.state.selectedOption === item_value}
    //            onChange={(e) => {this.handleOptionChange(e)}}
    //            style={css_input_arr}
    //            type="radio"
    //            name={this.props.name}
    //            value={item_value} />
    //     <span style={[css.text]}
    //           value={item_value}
    //           onClick={(e) => {this.handleLiClick(e)}}>{this.state.textValues[index]}</span>
    //   </li>
    const max: number = this.props.maxValue;
    const min: number = this.props.minValue;
    let currValue: number = this.state.currentValue ? this.state.currentValue : (min+max)/2;
    return <div>
      <StyleRoot>
        <div style={[css.main_base]}>
          <span style={[css.title]}>{this.state.title}</span>
          <span style={[css.draggable]}>{currValue}</span>
        </div>
      </StyleRoot>
    </div>
  }
}

export { _EB_ValueSlider };
let EB_ValueSlider = Radium(_EB_ValueSlider);
export { EB_ValueSlider };