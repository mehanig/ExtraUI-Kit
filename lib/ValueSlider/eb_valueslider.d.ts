import * as React from "react";
export declare type StringFunction = () => string;
export declare type StringToVoid = (f: string | number) => void;
export declare type AnyToVoid = (f: any) => void;
export declare type VoidFunction = () => void;
export interface IValueSliderProps {
    children?: React.ReactChild;
    className?: string;
    disabled?: boolean;
    maxValue: number;
    minValue: number;
    title: string | StringFunction;
    currentValue?: number;
    notifyOnChange?: StringToVoid;
    slideDidEnd?: VoidFunction;
    sizeH?: number;
    icon?: string;
    iconClick?: AnyToVoid;
}
export interface IValueSliderState {
    isDisabled?: boolean;
    title: string | StringFunction;
    currentValue: number;
    tmpValue: number | string;
    mouseMoveReady: boolean;
    currentXPos: number;
    initialXPos?: number;
    initialSliderValue?: number;
    isEditBoxMounted: boolean;
    input_id?: string;
    shiftPressed: boolean;
}
declare class EBValueSlider extends React.Component<IValueSliderProps, IValueSliderState> {
    constructor(props: IValueSliderProps);
    render(): JSX.Element;
    private selectTextIfFocused(e);
    private focusInput(input);
    private _updateStateAndNotify(currentValue);
    private onMouseDown(mouseEvent);
    private onMouseMove(mouseEvent);
    private onMouseUp(mouseEvent);
    private mountEditValueBox();
    private unmountEditValueBoxSave();
    private outsideEditValueBoxClick(mouseEvent);
    private handleInputChange(e);
    private handleInputKeyPress(e);
    private handleIconClick(mouseEvent);
}
export { EBValueSlider };
declare const ValueSlider: any;
export { ValueSlider };
