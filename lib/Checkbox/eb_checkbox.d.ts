import * as React from "react";
export declare type StringFunction = () => string;
export declare type StringToVoid = (f: string | number | boolean) => void;
export interface CheckboxProps {
    name: string;
    children?: React.ReactChild;
    className?: string;
    selected?: boolean;
    disabled?: boolean;
    notifyOnChange?: StringToVoid;
}
export interface CheckboxState {
    name: string;
    isDisabled: boolean;
    isSelected: boolean;
}
declare class _EB_Checkbox extends React.Component<CheckboxProps, CheckboxState> {
    constructor(props: CheckboxProps);
    _updateStateAndNotify(isSelected: boolean): void;
    handleOptionChange(): void;
    handleNameClick(): void;
    render(): JSX.Element;
}
export { _EB_Checkbox };
declare const EB_Checkbox: any;
export { EB_Checkbox };
