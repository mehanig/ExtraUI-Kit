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
var Radium = require('radium');
var radium_1 = require("radium");
var css_eb_button_1 = require("./css_eb_button");
var _EB_Button = (function (_super) {
    __extends(_EB_Button, _super);
    function _EB_Button(props) {
        var _this = _super.call(this) || this;
        _this.state = {
            onClickHandler: props.onClickHandler,
            buttonText: props.text || "Button",
            isDisabled: props.disabled ? true : false
        };
        _this.onClickHandler = _this.onClickHandler.bind(_this);
        return _this;
    }
    _EB_Button.prototype.onClickHandler = function () {
        this.state.onClickHandler();
    };
    _EB_Button.prototype.render = function () {
        var onClick = this.state.isDisabled ? null : this.onClickHandler;
        var stylesArr = this.state.isDisabled ? [css_eb_button_1.css_base, css_eb_button_1.css_disabled] : [css_eb_button_1.css_base, css_eb_button_1.css_active];
        return React.createElement("div", null,
            React.createElement(radium_1.StyleRoot, null,
                React.createElement("label", { style: [stylesArr], onClick: onClick },
                    React.createElement("p", { style: [css_eb_button_1.css_p_base] }, this.state.buttonText))));
    };
    return _EB_Button;
}(React.Component));
exports._EB_Button = _EB_Button;
var EB_Button = Radium(_EB_Button);
exports.EB_Button = EB_Button;
//# sourceMappingURL=eb_label.js.map