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
  onClick?: AnyFunction
}

@Radium
export default class Tab extends React.Component<IItemProps, {}> {
  constructor(props: IItemProps) {
    super(props);
  }
  public render() {
    const Icon =  this.props.icon ? <Icons type={this.props.icon}/> : null;
    return (
      <div
        className="extraui-kit__item-itemElement"
        style={[css.ItemMain]}
        onClick={this.props.onClick ? this.props.onClick : null}
      >
        {Icon}
        {this.props.children}
      </div>
    );
  }
}
