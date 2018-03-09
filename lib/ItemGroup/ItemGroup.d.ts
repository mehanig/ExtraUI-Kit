import * as React from "react";
import Item from "./Item";
export declare type AnyFunction = () => any;
export declare type BoolFunction = () => boolean;
export interface IItemGroupProps {
    children?: React.ReactChild;
    className?: string;
    icon?: string;
    onTitleClick?: AnyFunction;
    title?: string;
    items: Item[];
    filterContent?: string | BoolFunction | boolean;
    isFolded?: boolean;
}
export interface IItemGroupState {
    filterContent?: BoolFunction;
    isFolded: boolean;
    itemHeight: number;
}
export default class ItemGroup extends React.Component<IItemGroupProps, IItemGroupState> {
    constructor(props: IItemGroupProps);
    render(): JSX.Element;
    componentWillReceiveProps(nextProps: IItemGroupProps): void;
    private isFilterChanged(nextProps);
    private createFilter(props);
}
