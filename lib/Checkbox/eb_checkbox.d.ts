import * as React from "react";
export declare type StringToVoid = (f: string | number | boolean) => void;
export interface ICheckboxProps {
    name: string;
    children?: React.ReactChild;
    className?: string;
    selected?: boolean;
    disabled?: boolean;
    notifyOnChange?: StringToVoid;
}
export interface ICheckboxState {
    name: string;
    isDisabled: boolean;
    isSelected: boolean;
}
declare class EBCheckbox extends React.Component<ICheckboxProps, ICheckboxState> {
    constructor(props: ICheckboxProps);
    componentWillReceiveProps(nextProps: ICheckboxProps): void;
    render(): JSX.Element;
    private _updateStateAndNotify(isSelected);
    private handleOptionChange();
    private handleNameClick();
}
export { EBCheckbox };
declare const Checkbox: any;
export { Checkbox };
