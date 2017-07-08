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
var Radium = require("radium");
var css_eb_button_1 = require("./css_eb_button");
var EBButton = (function (_super) {
    __extends(EBButton, _super);
    function EBButton(props) {
        var _this = _super.call(this) || this;
        _this.state = {
            onClickHandler: props.onClickHandler,
            buttonText: props.text || "Button",
            isDisabled: props.disabled ? true : false,
        };
        _this.onClickHandler = _this.onClickHandler.bind(_this);
        return _this;
    }
    EBButton.prototype.render = function () {
        var onClick = this.state.isDisabled ? null : this.onClickHandler;
        var stylesArr = this.state.isDisabled ? [css_eb_button_1.CssBase, css_eb_button_1.CssDisabled] : [css_eb_button_1.CssBase, css_eb_button_1.CssActive];
        return (<div>
        <Radium.StyleRoot>
          <div style={[stylesArr]} onClick={onClick}><p style={[css_eb_button_1.CssPBase]}>{this.state.buttonText}</p></div>
        </Radium.StyleRoot>
      </div>);
    };
    EBButton.prototype.onClickHandler = function () {
        this.state.onClickHandler();
    };
    return EBButton;
}(React.Component));
exports.EBButton = EBButton;
var Button = Radium(EBButton);
exports.Button = Button;
