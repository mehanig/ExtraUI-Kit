import * as React from "react";
import { IIconProps } from "../Interfaces";
import * as SVGInline from "react-svg-inline";

const base64Active = "base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAARBJREFUOBFjYCABpKam2qMrZ0YXwMUHau79////TBMTk09nz549AVPHBGPgo6Gai4BqfjEyMt5BVsuIzMHGRtbMzMwcMnPmzM3I6vAaQEgzyCCcXkDS/B9ocxa6zTBXYHUBTDPQv/+AAccEpG9wcHAYTJ48+SdMI4zGcAFMM1ABKMAigPQVoCEaP378KIdpQqZRDEDWDAqwWbNmrQYakg7U8B+IKwoKCgSQNYPYcAPQNcP8PHv27GNAQ3YDXcH55cuXYKwG4NIMUww0YBmU7Q8Tg9GMKSkpXUBOKRD/YmFhieXj49sOk4TRQP+rffv27QyQf0tISMgEJg6iQQaA/Ec2YAHq/Ax0IgPQj2QbMrAaAfP8g9jKZksbAAAAAElFTkSuQmCC";

const svgSourceTriangleRight = `
<svg width="6px" height="7px" viewBox="0 0 6 7" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="buttons" transform="translate(-88.000000, -337.000000)" fill="#2391FF">
            <path d="M87.8850989,337.5 L94.1154311,337.5 C94.2683941,337.51858 94.4010327,337.629316 94.4632543,337.790389 C94.525476,337.951462 94.5077988,338.138324 94.4168987,338.280407 L91.319209,343.258 C91.262043,343.392778 91.147694,343.483732 91.0174344,343.498033 C90.8871748,343.512335 90.7598141,343.44792 90.6813209,343.328037 L87.5836312,338.245388 C87.4919809,338.108552 87.474211,337.924787 87.5374979,337.768309 C87.6007848,337.61183 87.7346757,337.508481 87.8850989,337.5 L87.8850989,337.5 Z" id="tr-right" transform="translate(91.000000, 340.500000) scale(-1, 1) rotate(90.000000) translate(-91.000000, -340.500000) "></path>
        </g>
    </g>
</svg>
`;

const svgSourceTriangleRightHover = `
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg width="6px" height="7px" viewBox="0 0 6 7" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="buttons" transform="translate(-136.000000, -337.000000)" fill="#6EB7FF">
            <path d="M135.885099,337.5 L142.115431,337.5 C142.268394,337.51858 142.401033,337.629316 142.463254,337.790389 C142.525476,337.951462 142.507799,338.138324 142.416899,338.280407 L139.319209,343.258 C139.262043,343.392778 139.147694,343.483732 139.017434,343.498033 C138.887175,343.512335 138.759814,343.44792 138.681321,343.328037 L135.583631,338.245388 C135.491981,338.108552 135.474211,337.924787 135.537498,337.768309 C135.600785,337.61183 135.734676,337.508481 135.885099,337.5 L135.885099,337.5 Z" id="tr-right-hover" transform="translate(139.000000, 340.500000) scale(-1, 1) rotate(90.000000) translate(-139.000000, -340.500000) "></path>
        </g>
    </g>
</svg>
`;

const svgSourceTriangleDown = `
<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
   width="6px" height="6px" viewBox="0 0 6 6" enable-background="new 0 0 6 6" xml:space="preserve">
<g id="Page-1">
  <g id="buttons" transform="translate(-793.000000, -77.000000)">
    <path id="Up_active" fill="#2391FF" d="M793.33,77h5.34c0.131,0.012,0.245,0.081,0.298,0.181s0.038,0.217-0.04,0.306l-2.655,3.111
      c-0.049,0.084-0.147,0.141-0.259,0.15c-0.112,0.009-0.221-0.031-0.288-0.106l-2.655-3.177c-0.079-0.086-0.094-0.2-0.039-0.298
      C793.086,77.07,793.201,77.005,793.33,77L793.33,77z"/>
  </g>
</g>
</svg>
`;

class TriangleArrowRight extends React.Component<IIconProps, {}> {
  public render() {
    return (
      <SVGInline.default svg={svgSourceTriangleRight}/>
    );
  }
}

class TriangleArrowRightHover extends React.Component<IIconProps, {}> {
  public render() {
    return (
      <SVGInline.default svg={svgSourceTriangleRightHover}/>
    );
  }
}

class TriangleArrowDown extends React.Component<IIconProps, {}> {
  public render() {
    return (
      <SVGInline.default svg={svgSourceTriangleDown}/>
    );
  }
}

export { TriangleArrowRight, TriangleArrowRightHover, TriangleArrowDown };
