import * as React from "react";
export declare type StringFunction = () => string;
export declare type StringToVoid = (f: string | number) => void;
export interface IValueSliderProps {
    children?: React.ReactChild;
    className?: string;
    disabled?: boolean;
    maxValue: number;
    minValue: number;
    title: string | StringFunction;
    currentValue?: number;
    notifyOnChange?: StringToVoid;
    sizeH?: number;
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
}
declare class EBValueSlider extends React.Component<IValueSliderProps, IValueSliderState> {
    constructor(props: IValueSliderProps);
    render(): JSX.Element;
    private _updateStateAndNotify(currentValue);
    private onMouseDown(mouseEvent);
    private onMouseMove(mouseEvent);
    private onMouseUp(mouseEvent);
    private mountEditValueBox();
    private unmountEditValueBoxSave();
    private handleInputChange(e);
    private handleInputKeyPress(e);
}
export { EBValueSlider };
declare const ValueSlider: any;
export { ValueSlider };
