import * as React from "react";
export declare type StringFunction = () => string;
export declare type StringToVoid = (f: string | number) => void;
export interface ITabMenuProps {
    name: string;
    children?: React.ReactChild;
    className?: string;
    values: [string];
    disabled?: any;
    textValues?: [string | StringFunction];
    selectedOption?: string;
    title?: string;
    notifyOnChange?: StringToVoid;
    onClick?: any;
}
export interface ITabMenuState {
    name: string;
    isDisabled?: boolean;
    values: [string];
    textValues: [string | StringFunction];
    title?: string | StringFunction;
    selectedOption?: string;
}
declare class EBTabMenu extends React.Component<ITabMenuProps, ITabMenuState> {
    constructor(props: ITabMenuProps);
    render(): JSX.Element;
    private onTabClick(clickEvent);
}
export { EBTabMenu };
declare const TabMenu: any;
export { TabMenu };
