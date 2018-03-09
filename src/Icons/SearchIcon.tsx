import * as React from "react";
import { IIconProps } from "../Interfaces";
import * as SVGInline from "react-svg-inline";

const svgSourceSearchIcon = `
<?xml version="1.0" encoding="UTF-8"?>
<svg width="11px" height="11px" viewBox="0 0 11 11" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
        <rect id="path-1" x="1.91594817" y="4.4992815" width="0.833333333" height="5.83333333" rx="0.416666667"></rect>
        <mask id="mask-2" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="1" height="5.83333333" fill="white">
            <use xlink:href="#path-1"></use>
        </mask>
    </defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="buttons" transform="translate(-475.000000, -410.000000)" stroke="#B1B1B1">
            <g id="search" transform="translate(475.000000, 411.000000)">
                <ellipse id="Oval" cx="6.66666667" cy="3.33333333" rx="3.33333333" ry="3.33333333"></ellipse>
                <use id="Rectangle-3" mask="url(#mask-2)" stroke-width="2" transform="translate(2.415948, 7.415948) rotate(45.000000) translate(-2.415948, -7.415948) " xlink:href="#path-1"></use>
            </g>
        </g>
    </g>
</svg>
`;

class SearchIcon extends React.Component<IIconProps, {}> {
  public render() {
    return (
      <SVGInline.default svg={svgSourceSearchIcon} className={this.props.className}/>
    );
  }
}

export { SearchIcon };
