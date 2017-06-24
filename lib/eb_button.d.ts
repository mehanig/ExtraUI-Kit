import * as React from "react";
export declare type StringFunction = () => string;
export interface ButtonProps {
    children?: React.ReactChild;
    className?: string;
    onClickHandler?: any;
    text?: string | StringFunction;
    disabled?: any;
}
export interface ButtonState {
    onClickHandler?: any;
    buttonText?: string | StringFunction;
    isDisabled?: boolean;
}
declare class _EB_Button extends React.Component<ButtonProps, ButtonState> {
    constructor(props: ButtonProps);
    onClickHandler(): void;
    render(): JSX.Element;
}
export { _EB_Button };
declare let EB_Button: any;
export { EB_Button };
