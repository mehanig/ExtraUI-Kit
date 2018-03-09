import * as React from "react";
export interface IIconsProps {
    type: string;
    className?: string;
}
export default class Icons extends React.Component<IIconsProps, {}> {
    private ICON_MAPPING;
    render(): JSX.Element;
}
