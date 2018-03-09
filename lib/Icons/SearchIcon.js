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
var svgSourceSearchIcon = "\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <defs>\n        <rect id=\"path-1\" x=\"1.91594817\" y=\"4.4992815\" width=\"0.833333333\" height=\"5.83333333\" rx=\"0.416666667\"></rect>\n        <mask id=\"mask-2\" maskContentUnits=\"userSpaceOnUse\" maskUnits=\"objectBoundingBox\" x=\"0\" y=\"0\" width=\"1\" height=\"5.83333333\" fill=\"white\">\n            <use xlink:href=\"#path-1\"></use>\n        </mask>\n    </defs>\n    <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <g id=\"buttons\" transform=\"translate(-475.000000, -410.000000)\" stroke=\"#B1B1B1\">\n            <g id=\"search\" transform=\"translate(475.000000, 411.000000)\">\n                <ellipse id=\"Oval\" cx=\"6.66666667\" cy=\"3.33333333\" rx=\"3.33333333\" ry=\"3.33333333\"></ellipse>\n                <use id=\"Rectangle-3\" mask=\"url(#mask-2)\" stroke-width=\"2\" transform=\"translate(2.415948, 7.415948) rotate(45.000000) translate(-2.415948, -7.415948) \" xlink:href=\"#path-1\"></use>\n            </g>\n        </g>\n    </g>\n</svg>\n";
var SearchIcon = (function (_super) {
    __extends(SearchIcon, _super);
    function SearchIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SearchIcon.prototype.render = function () {
        return (React.createElement(SVGInline.default, { svg: svgSourceSearchIcon, className: this.props.className }));
    };
    return SearchIcon;
}(React.Component));
exports.SearchIcon = SearchIcon;
//# sourceMappingURL=SearchIcon.js.map