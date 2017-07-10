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
var css = require("./css_eb_checkbox");
var EBCheckbox = (function (_super) {
    __extends(EBCheckbox, _super);
    function EBCheckbox(props) {
        var _this = _super.call(this) || this;
        _this.state = {
            name: props.name,
            isDisabled: props.disabled,
            isSelected: props.selected,
        };
        _this.handleOptionChange = _this.handleOptionChange.bind(_this);
        _this.handleNameClick = _this.handleNameClick.bind(_this);
        return _this;
    }
    EBCheckbox.prototype.componentWillReceiveProps = function (nextProps) {
        if (this.props.selected != nextProps.selected) {
            this.setState({ isSelected: nextProps.selected });
        }
        if (this.props.disabled != nextProps.disabled) {
            this.setState({ isDisabled: nextProps.disabled });
        }
    };
    EBCheckbox.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(Radium.StyleRoot, null,
                React.createElement("div", { style: [css.Base] },
                    React.createElement("input", { type: "checkbox", checked: this.state.isSelected, onChange: this.handleOptionChange }),
                    React.createElement("div", { style: [css.Title], onClick: this.handleNameClick }, this.state.name)))));
    };
    EBCheckbox.prototype._updateStateAndNotify = function (isSelected) {
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
    EBCheckbox.prototype.handleOptionChange = function () {
        this._updateStateAndNotify(!this.state.isSelected);
    };
    EBCheckbox.prototype.handleNameClick = function () {
        this._updateStateAndNotify(!this.state.isSelected);
    };
    return EBCheckbox;
}(React.Component));
exports.EBCheckbox = EBCheckbox;
var Checkbox = Radium(EBCheckbox);
exports.Checkbox = Checkbox;
//# sourceMappingURL=eb_checkbox.js.map