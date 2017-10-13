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
var css = require("./css_eb_checkbox");
var Checkbox = (function (_super) {
    __extends(Checkbox, _super);
    function Checkbox(props) {
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
    Checkbox.prototype.componentWillReceiveProps = function (nextProps) {
        if (this.props.selected !== nextProps.selected) {
            this.setState({ isSelected: nextProps.selected });
        }
        if (this.props.disabled !== nextProps.disabled) {
            this.setState({ isDisabled: nextProps.disabled });
        }
    };
    Checkbox.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(Radium.StyleRoot, null,
                React.createElement("div", { style: [css.Base] },
                    React.createElement("input", { type: "checkbox", checked: this.state.isSelected, onChange: this.handleOptionChange }),
                    React.createElement("div", { style: [css.Title], onClick: this.handleNameClick }, this.state.name)))));
    };
    Checkbox.prototype._updateStateAndNotify = function (isSelected) {
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
    Checkbox.prototype.handleOptionChange = function () {
        this._updateStateAndNotify(!this.state.isSelected);
    };
    Checkbox.prototype.handleNameClick = function () {
        this._updateStateAndNotify(!this.state.isSelected);
    };
    return Checkbox;
}(React.Component));
Checkbox = __decorate([
    Radium
], Checkbox);
exports.default = Checkbox;
//# sourceMappingURL=Checkbox.js.map