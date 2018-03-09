import * as Radium from "radium";
import * as React from "react";
import Icons from "../Icons/Icons";
import * as css from "./css_eb_itemgroup";

export type AnyFunction = () => any;

export interface IItemProps {
  value: string,
  children?: React.ReactChild,
  className?: string,
  icon?: string,
  iconOnHover?: string,
  onClick?: AnyFunction
}

export interface IItemState {
  hover: boolean,
}

@Radium
export default class Item extends React.Component<IItemProps, IItemState> {
  constructor(props: IItemProps) {
    super(props);
    this.state = {
      hover: false,
    };
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  public render() {
    let Icon =  this.props.icon ? <Icons type={this.props.icon}/> : null;
    if (this.state.hover && this.props.iconOnHover) {
      Icon = <Icons type={this.props.iconOnHover}/>;
    }
    return (
      <div
        className="extraui-kit__item-itemElement"
        style={[css.ItemMain]}
        onClick={this.props.onClick ? this.props.onClick : null}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        <span style={[css.ItemMainIcon]}>{Icon}</span>
        {this.props.children}
      </div>
    );
  }

  private onMouseEnter() {
    this.setState({
      ...this.state,
      hover: true,
    });
  }

  private onMouseLeave() {
    this.setState({
      ...this.state,
      hover: false,
    });
  }
}
