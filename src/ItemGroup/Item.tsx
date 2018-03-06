import * as React from "react";
import Icons from "../Icons/Icons";

export type AnyFunction = () => any;

export interface IItemProps {
  children?: React.ReactChild,
  className?: string,
  icon?: string,
  onClick?: AnyFunction
}

export default class Tab extends React.Component<IItemProps, {}> {
  constructor(props: IItemProps) {
    super();
  }
  public render() {
    const Icon =  this.props.icon ? <Icons type={this.props.icon}/> : null;
    return (
      <div
        className="extraui-kit__item-itemElement"
        onClick={this.props.onClick ? this.props.onClick : null}
      >
        {Icon}
        {this.props.children}
      </div>
    );
  }
}
