import * as React from "react";
export declare type StringFunction = () => string;
export declare type StringToVoid = (f: string | number) => void;
export interface IRadioButtonProps {
    name: string;
    children?: React.ReactChild;
    className?: string;
    values: [string];
    disabled?: any;
    textValues?: [string | StringFunction];
    title?: string | StringFunction;
    selectedOption?: string;
    notifyOnChange?: StringToVoid;
}
export interface IRadioButtonState {
    name: string;
    isDisabled?: boolean;
    values: [string];
    textValues: [string | StringFunction];
    title?: string | StringFunction;
    selectedOption?: string;
}
export default class RadiobuttonList extends React.Component<IRadioButtonProps, IRadioButtonState> {
    constructor(props: IRadioButtonProps);
    render(): JSX.Element;
    private _updateStateAndNotify(selectedOption);
    private handleOptionChange(changeEvent);
    private handleLiClick(clickEvent);
}
