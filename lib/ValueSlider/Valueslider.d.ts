import * as React from "react";
export declare type StringFunction = () => string;
export declare type StringToVoid = (f: string | number) => void;
export declare type AnyToVoid = (f: any) => void;
export declare type VoidFunction = () => void;
export interface IValueSliderProps {
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
export default class ValueSlider extends React.Component<IValueSliderProps, IValueSliderState> {
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
