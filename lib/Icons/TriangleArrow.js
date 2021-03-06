"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var SVGInline = require("react-svg-inline");
var svgSourceTriangleRight = "\n<svg width=\"6px\" height=\"7px\" viewBox=\"0 0 6 7\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <g id=\"buttons\" transform=\"translate(-88.000000, -337.000000)\" fill=\"#2391FF\">\n            <path d=\"M87.8850989,337.5 L94.1154311,337.5 C94.2683941,337.51858 94.4010327,337.629316 94.4632543,337.790389 C94.525476,337.951462 94.5077988,338.138324 94.4168987,338.280407 L91.319209,343.258 C91.262043,343.392778 91.147694,343.483732 91.0174344,343.498033 C90.8871748,343.512335 90.7598141,343.44792 90.6813209,343.328037 L87.5836312,338.245388 C87.4919809,338.108552 87.474211,337.924787 87.5374979,337.768309 C87.6007848,337.61183 87.7346757,337.508481 87.8850989,337.5 L87.8850989,337.5 Z\" id=\"tr-right\" transform=\"translate(91.000000, 340.500000) scale(-1, 1) rotate(90.000000) translate(-91.000000, -340.500000) \"></path>\n        </g>\n    </g>\n</svg>\n";
var svgSourceTriangleRightHover = "\n<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg width=\"6px\" height=\"7px\" viewBox=\"0 0 6 7\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <g id=\"buttons\" transform=\"translate(-136.000000, -337.000000)\" fill=\"#6EB7FF\">\n            <path d=\"M135.885099,337.5 L142.115431,337.5 C142.268394,337.51858 142.401033,337.629316 142.463254,337.790389 C142.525476,337.951462 142.507799,338.138324 142.416899,338.280407 L139.319209,343.258 C139.262043,343.392778 139.147694,343.483732 139.017434,343.498033 C138.887175,343.512335 138.759814,343.44792 138.681321,343.328037 L135.583631,338.245388 C135.491981,338.108552 135.474211,337.924787 135.537498,337.768309 C135.600785,337.61183 135.734676,337.508481 135.885099,337.5 L135.885099,337.5 Z\" id=\"tr-right-hover\" transform=\"translate(139.000000, 340.500000) scale(-1, 1) rotate(90.000000) translate(-139.000000, -340.500000) \"></path>\n        </g>\n    </g>\n</svg>\n";
var svgSourceTriangleDown = "\n<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n   width=\"6px\" height=\"6px\" viewBox=\"0 0 6 6\" enable-background=\"new 0 0 6 6\" xml:space=\"preserve\">\n<g id=\"Page-1\">\n  <g id=\"buttons\" transform=\"translate(-793.000000, -77.000000)\">\n    <path id=\"Up_active\" fill=\"#2391FF\" d=\"M793.33,77h5.34c0.131,0.012,0.245,0.081,0.298,0.181s0.038,0.217-0.04,0.306l-2.655,3.111\n      c-0.049,0.084-0.147,0.141-0.259,0.15c-0.112,0.009-0.221-0.031-0.288-0.106l-2.655-3.177c-0.079-0.086-0.094-0.2-0.039-0.298\n      C793.086,77.07,793.201,77.005,793.33,77L793.33,77z\"/>\n  </g>\n</g>\n</svg>\n";
var TriangleArrowRight = (function (_super) {
    __extends(TriangleArrowRight, _super);
    function TriangleArrowRight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TriangleArrowRight.prototype.render = function () {
        return (React.createElement(SVGInline.default, { className: this.props.className, svg: svgSourceTriangleRight }));
    };
    return TriangleArrowRight;
}(React.Component));
exports.TriangleArrowRight = TriangleArrowRight;
var TriangleArrowRightHover = (function (_super) {
    __extends(TriangleArrowRightHover, _super);
    function TriangleArrowRightHover() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TriangleArrowRightHover.prototype.render = function () {
        return (React.createElement(SVGInline.default, { className: this.props.className, svg: svgSourceTriangleRightHover }));
    };
    return TriangleArrowRightHover;
}(React.Component));
exports.TriangleArrowRightHover = TriangleArrowRightHover;
var TriangleArrowDown = (function (_super) {
    __extends(TriangleArrowDown, _super);
    function TriangleArrowDown() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TriangleArrowDown.prototype.render = function () {
        return (React.createElement(SVGInline.default, { className: this.props.className, svg: svgSourceTriangleDown }));
    };
    return TriangleArrowDown;
}(React.Component));
exports.TriangleArrowDown = TriangleArrowDown;
//# sourceMappingURL=TriangleArrow.js.map