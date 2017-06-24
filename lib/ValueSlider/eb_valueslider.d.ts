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
}
export interface ValueSliderState {
    isDisabled?: boolean;
    title: string | StringFunction;
    currentValue?: number;
}
declare class _EB_ValueSlider extends React.Component<ValueSliderProps, ValueSliderState> {
    constructor(props: ValueSliderProps);
    _updateStateAndNotify(currentValue: number): void;
    handleOptionChange(changeEvent: React.ChangeEvent<HTMLInputElement>): void;
    handleLiClick(clickEvent: React.MouseEvent<HTMLSpanElement>): void;
    render(): JSX.Element;
}
export { _EB_ValueSlider };
declare let EB_ValueSlider: any;
export { EB_ValueSlider };
