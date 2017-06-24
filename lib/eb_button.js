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
        var stylesArr = this.state.isDisabled ? [buttonStyle_base, buttonStyle_disabled] : [buttonStyle_base, buttonStyle_active];
        return React.createElement("div", null,
            React.createElement(radium_1.StyleRoot, null,
                React.createElement("div", { style: [stylesArr], onClick: onClick },
                    React.createElement("p", { style: [button_P_style] }, this.state.buttonText))));
    };
    return _EB_Button;
}(React.Component));
exports._EB_Button = _EB_Button;
var buttonStyle_base = {
    fontSize: 11,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "column",
    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
    color: '#fff',
    border: 0,
    width: '140px',
    height: '22px',
    borderRadius: '2px',
    padding: '2px 2px',
    margin: '10px',
    cursor: 'pointer',
    outline: 'none',
    userSelect: 'none'
};
var buttonStyle_active = {
    backgroundColor: '#2391FF',
    ':hover': {
        backgroundColor: '#0088FF',
    },
    ':focus': {
        backgroundColor: '#0088FF',
    },
    ':active': {
        backgroundColor: '#005299',
        transform: 'translateY(2px)',
    },
};
var buttonStyle_disabled = {
    backgroundColor: '#393939'
};
var button_P_style = {
    margin: "auto"
};
var EB_Button = Radium(_EB_Button);
exports.EB_Button = EB_Button;
//# sourceMappingURL=eb_button.js.map