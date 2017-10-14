import * as React from "react";
export declare type StringFunction = () => string;
export declare type StringToVoid = (f: string | number) => void;
export interface ITabMenuProps {
    values: [string];
    disabled?: any;
    textValues?: [string | StringFunction];
    selectedOption?: string;
    title?: string;
    notifyOnChange?: StringToVoid;
    onClick?: any;
}
export interface ITabMenuState {
    isDisabled?: boolean;
    values: [string];
    textValues: [string | StringFunction];
    title?: string | StringFunction;
    selectedOption?: string;
}
export default class TabMenu extends React.Component<ITabMenuProps, ITabMenuState> {
    constructor(props: ITabMenuProps);
    render(): JSX.Element;
    private onTabClick(clickEvent);
}
