import * as React from "react";
export declare type AnyFunction = (value: any) => any;
export interface ISearchBoxProps {
    children?: React.ReactChild;
    className?: string;
    icon?: string;
    onType?: AnyFunction;
    onHitEnter?: AnyFunction;
    placeholder?: string;
}
export interface ISearchBoxState {
    value: string;
}
export default class SearchBox extends React.Component<ISearchBoxProps, ISearchBoxState> {
    constructor(props: ISearchBoxProps);
    render(): JSX.Element;
    private handleInputChange(e);
    private handleInputKeyPress(e);
}
