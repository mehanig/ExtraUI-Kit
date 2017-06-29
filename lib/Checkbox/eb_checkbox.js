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
var css = require("./css_eb_checkbox");
var _EB_Checkbox = (function (_super) {
    __extends(_EB_Checkbox, _super);
    function _EB_Checkbox(props) {
        var _this = _super.call(this) || this;
        _this.state = {
            name: props.name,
            isDisabled: props.disabled,
            isSelected: props.selected
        };
        return _this;
    }
    _EB_Checkbox.prototype._updateStateAndNotify = function (isSelected) {
        var _this = this;
        if (!this.state.isDisabled) {
            if (this.props.notifyOnChange) {
                this.setState({ isSelected: isSelected }, function () {
                    _this.props.notifyOnChange(isSelected);
                });
            }
            else {
                this.setState({ isSelected: isSelected });
            }
        }
    };
    _EB_Checkbox.prototype.handleOptionChange = function () {
        this._updateStateAndNotify(!this.state.isSelected);
    };
    _EB_Checkbox.prototype.handleNameClick = function () {
        this._updateStateAndNotify(!this.state.isSelected);
    };
    _EB_Checkbox.prototype.render = function () {
        var _this = this;
        var stylesLiArr = this.state.isDisabled ? [css.li_base, css.li_disabled] : [css.li_base, css.li_active];
        var css_input_arr = this.state.isDisabled ? [css.input, css.input_disabled] : [css.input, css.input_active];
        return React.createElement("div", null,
            React.createElement(radium_1.StyleRoot, null,
                React.createElement("div", { style: [css.base] },
                    React.createElement("input", { type: "checkbox", checked: this.state.isSelected, onChange: function () { _this.handleOptionChange(); } }),
                    React.createElement("div", { style: [css.title], onClick: function () { _this.handleNameClick(); } }, this.state.name))));
    };
    return _EB_Checkbox;
}(React.Component));
exports._EB_Checkbox = _EB_Checkbox;
var EB_Checkbox = Radium(_EB_Checkbox);
exports.EB_Checkbox = EB_Checkbox;
//# sourceMappingURL=eb_checkbox.js.map