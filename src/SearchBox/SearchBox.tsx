import * as Radium from "radium";
import * as React from "react";
import Icons from "../Icons/Icons";
import ChangeEvent = React.ChangeEvent;
import { Input } from "../RadioButtonList/css_eb_radiobutton";
import * as css from "./css_eb_searchbox";

export type AnyFunction = (value: any) => any;

export interface ISearchBoxProps {
  children?: React.ReactChild,
  className?: string,
  icon?: string,
  onType?: AnyFunction,
  onHitEnter?: AnyFunction,
  placeholder?: string
}

export interface ISearchBoxState {
  value: string
}

@Radium
export default class SearchBox extends React.Component<ISearchBoxProps, ISearchBoxState> {
  constructor(props: ISearchBoxProps) {
    super(props);
    this.state = {
      value: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputKeyPress = this.handleInputKeyPress.bind(this);
  }

  public render() {
    const Icon =  this.props.icon ? <Icons type={this.props.icon}/> : null;

    // We need to apply padding because of icon being displayed on the left
    const inputStyle = this.props.icon ? [css.InputWithIconStyle] : [];
    return (
      <div className="extraui-kit__searchBox" style={[css.SearchBoxStyle]}>
        <span style={[css.InlinedIcon]}>{Icon}</span>
        <input
          style={inputStyle}
          value={this.state.value}
          onChange={this.handleInputChange}
          onKeyPress={this.handleInputKeyPress}
          placeholder={this.props.placeholder}
        />
        {this.props.children}
      </div>
    );
  }

  private handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    this.setState({value: e.target.value});
    if (typeof this.props.onType === "function") {
      this.props.onType(e.target.value);
    }
  }

  private handleInputKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      if ( typeof this.props.onHitEnter === "function") {
        this.props.onHitEnter(this.state.value);
      }
    }
  }
}