import * as React from "react";
export interface IButtonProps {
    onClickHandler?: any;
    text?: string;
    disabled?: any;
    UIType?: string;
}
export interface IButtonState {
    buttonText?: string;
    isDisabled?: boolean;
}
export default class Button extends React.Component<IButtonProps, IButtonState> {
    constructor(props: IButtonProps);
    render(): JSX.Element;
    private onClickHandler(e, obj);
}
