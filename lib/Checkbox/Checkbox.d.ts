import * as React from "react";
export declare type StringToVoid = (f: string | number | boolean) => void;
export interface ICheckboxProps {
    name: string;
    selected?: boolean;
    disabled?: boolean;
    notifyOnChange?: StringToVoid;
}
export interface ICheckboxState {
    name: string;
    isDisabled: boolean;
    isSelected: boolean;
}
export default class Checkbox extends React.Component<ICheckboxProps, ICheckboxState> {
    constructor(props: ICheckboxProps);
    componentWillReceiveProps(nextProps: ICheckboxProps): void;
    render(): JSX.Element;
    private _updateStateAndNotify(isSelected);
    private handleOptionChange();
    private handleNameClick();
}
