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
var svgSourceLightBulbIcon = "\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg width=\"8px\" height=\"8px\" viewBox=\"0 0 8 8\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <defs></defs>\n    <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <g id=\"buttons\" transform=\"translate(-79.000000, -631.000000)\" fill=\"#B1B1B1\">\n            <path d=\"M80.7288437,631.292823 C81.1168995,630.904768 81.7421966,630.900902 82.1315041,631.290209 C82.5181162,631.676821 82.5164709,632.305289 82.1288899,632.69287 L80.691678,634.130082 C80.3036221,634.518138 79.678325,634.522003 79.2890175,634.132696 C78.9024054,633.746084 78.9040507,633.117616 79.2916317,632.730035 L80.7288437,631.292823 Z M80.7288437,635.424031 C81.1168995,635.035976 81.7421966,635.03211 82.1315041,635.421417 C82.5181162,635.808029 82.5164709,636.436497 82.1288899,636.824078 L80.691678,638.26129 C80.3036221,638.649346 79.678325,638.653211 79.2890175,638.263904 C78.9024054,637.877292 78.9040507,637.248824 79.2916317,636.861243 L80.7288437,635.424031 Z M84.7288437,631.292823 C85.1168995,630.904768 85.7421966,630.900902 86.1315041,631.290209 C86.5181162,631.676821 86.5164709,632.305289 86.1288899,632.69287 L84.691678,634.130082 C84.3036221,634.518138 83.678325,634.522003 83.2890175,634.132696 C82.9024054,633.746084 82.9040507,633.117616 83.2916317,632.730035 L84.7288437,631.292823 Z M84.7288437,635.424031 C85.1168995,635.035976 85.7421966,635.03211 86.1315041,635.421417 C86.5181162,635.808029 86.5164709,636.436497 86.1288899,636.824078 L84.691678,638.26129 C84.3036221,638.649346 83.678325,638.653211 83.2890175,638.263904 C82.9024054,637.877292 82.9040507,637.248824 83.2916317,636.861243 L84.7288437,635.424031 Z\" id=\"Lightbulb\"></path>\n        </g>\n    </g>\n</svg>\n";
var svgSourceLightBulbIconActive = "\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg width=\"8px\" height=\"8px\" viewBox=\"0 0 8 8\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <defs></defs>\n    <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <g id=\"buttons\" transform=\"translate(-118.000000, -631.000000)\" fill=\"#2391FF\">\n            <path d=\"M119.728844,631.292823 C120.1169,630.904768 120.742197,630.900902 121.131504,631.290209 C121.518116,631.676821 121.516471,632.305289 121.12889,632.69287 L119.691678,634.130082 C119.303622,634.518138 118.678325,634.522003 118.289018,634.132696 C117.902405,633.746084 117.904051,633.117616 118.291632,632.730035 L119.728844,631.292823 Z M119.728844,635.424031 C120.1169,635.035976 120.742197,635.03211 121.131504,635.421417 C121.518116,635.808029 121.516471,636.436497 121.12889,636.824078 L119.691678,638.26129 C119.303622,638.649346 118.678325,638.653211 118.289018,638.263904 C117.902405,637.877292 117.904051,637.248824 118.291632,636.861243 L119.728844,635.424031 Z M123.728844,631.292823 C124.1169,630.904768 124.742197,630.900902 125.131504,631.290209 C125.518116,631.676821 125.516471,632.305289 125.12889,632.69287 L123.691678,634.130082 C123.303622,634.518138 122.678325,634.522003 122.289018,634.132696 C121.902405,633.746084 121.904051,633.117616 122.291632,632.730035 L123.728844,631.292823 Z M123.728844,635.424031 C124.1169,635.035976 124.742197,635.03211 125.131504,635.421417 C125.518116,635.808029 125.516471,636.436497 125.12889,636.824078 L123.691678,638.26129 C123.303622,638.649346 122.678325,638.653211 122.289018,638.263904 C121.902405,637.877292 121.904051,637.248824 122.291632,636.861243 L123.728844,635.424031 Z\" id=\"Lightbulb_hover\"></path>\n        </g>\n    </g>\n</svg>\n";
var LightBulbIcon = (function (_super) {
    __extends(LightBulbIcon, _super);
    function LightBulbIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LightBulbIcon.prototype.render = function () {
        return (React.createElement(SVGInline.default, { svg: svgSourceLightBulbIcon, className: this.props.className }));
    };
    return LightBulbIcon;
}(React.Component));
exports.LightBulbIcon = LightBulbIcon;
var LightBulbIconActive = (function (_super) {
    __extends(LightBulbIconActive, _super);
    function LightBulbIconActive() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LightBulbIconActive.prototype.render = function () {
        return (React.createElement(SVGInline.default, { svg: svgSourceLightBulbIconActive, className: this.props.className }));
    };
    return LightBulbIconActive;
}(React.Component));
exports.LightBulbIconActive = LightBulbIconActive;
//# sourceMappingURL=LightBulbIcon.js.map