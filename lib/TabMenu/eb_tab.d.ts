import * as React from "react";
export interface ITabProps {
    children?: React.ReactChild;
    className?: string;
    value: string;
}
declare class Tab extends React.Component<ITabProps, {}> {
    constructor(props: ITabProps);
    render(): JSX.Element;
}
export { Tab };
