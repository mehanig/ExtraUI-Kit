import * as React from "react";
export declare type AnyFunction = () => any;
export interface IItemProps {
    value: string;
    children?: React.ReactChild;
    className?: string;
    icon?: string;
    iconOnHover?: string;
    onClick?: AnyFunction;
}
export interface IItemState {
    hover: boolean;
}
export default class Item extends React.Component<IItemProps, IItemState> {
    constructor(props: IItemProps);
    render(): JSX.Element;
    private onMouseEnter();
    private onMouseLeave();
}
