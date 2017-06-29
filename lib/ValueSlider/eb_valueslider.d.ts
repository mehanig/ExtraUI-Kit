import * as React from "react";
export declare type StringFunction = () => string;
export interface ValueSliderProps {
    children?: React.ReactChild;
    className?: string;
    disabled?: boolean;
    maxValue: number;
    minValue: number;
    title: string | StringFunction;
    currentValue?: number;
    notifyOnChange?: (string) => void;
    sizeH?: number;
}
export interface ValueSliderState {
    isDisabled?: boolean;
    title: string | StringFunction;
    currentValue: number;
    mouseMoveReady: boolean;
    currentXPos: number;
    initialXPos?: number;
    initialSliderValue?: number;
    isEditBoxMounted: boolean;
}
declare class _EB_ValueSlider extends React.Component<ValueSliderProps, ValueSliderState> {
    constructor(props: ValueSliderProps);
    _updateStateAndNotify(currentValue: number): void;
    onMouseDown(mouseEvent: React.MouseEvent<HTMLSpanElement>): void;
    onMouseMove(mouseEvent: any): void;
    onMouseUp(mouseEvent: any): void;
    mountEditValueBox(): void;
    unmountEditValueBoxSave(): void;
    render(): JSX.Element;
}
export { _EB_ValueSlider };
declare let EB_ValueSlider: any;
export { EB_ValueSlider };
