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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Radium = require("radium");
var React = require("react");
var css_eb_button_1 = require("./css_eb_button");
var Button = (function (_super) {
    __extends(Button, _super);
    function Button(props) {
        var _this = _super.call(this) || this;
        _this.state = {
            buttonText: props.text || "Button",
            isDisabled: !!props.disabled,
        };
        _this.onClickHandler = _this.onClickHandler.bind(_this);
        return _this;
    }
    Button.prototype.render = function () {
        var onClick = this.state.isDisabled ? null : this.onClickHandler;
        var stylesArr = (this.props.UIType === "AE") ?
            this.state.isDisabled ? [css_eb_button_1.AEButton, css_eb_button_1.AECssDisabled] : [css_eb_button_1.AEButton, css_eb_button_1.AECssActive]
            :
                this.state.isDisabled ? [css_eb_button_1.CssBase, css_eb_button_1.CssDisabled] : [css_eb_button_1.CssBase, css_eb_button_1.CssActive];
        return (React.createElement("div", null,
            React.createElement(Radium.StyleRoot, null,
                React.createElement("div", { className: "extraui-kit__button-main", style: [stylesArr], onClick: onClick },
                    React.createElement("p", { style: [css_eb_button_1.CssPBase] }, this.state.buttonText)))));
    };
    Button.prototype.onClickHandler = function (e, obj) {
        this.props.onClickHandler(e, obj);
    };
    return Button;
}(React.Component));
Button = __decorate([
    Radium
], Button);
exports.default = Button;
//# sourceMappingURL=Button.js.map