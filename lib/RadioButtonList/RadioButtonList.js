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
var css = require("./css_eb_radiobutton");
var RadiobuttonList = (function (_super) {
    __extends(RadiobuttonList, _super);
    function RadiobuttonList(props) {
        var _this = _super.call(this) || this;
        _this.state = {
            values: props.values,
            isDisabled: !!props.disabled,
            name: props.name,
            textValues: props.textValues ? props.textValues : props.values,
            title: props.title,
            selectedOption: props.selectedOption,
        };
        _this.handleOptionChange = _this.handleOptionChange.bind(_this);
        _this.handleLiClick = _this.handleLiClick.bind(_this);
        return _this;
    }
    RadiobuttonList.prototype.render = function () {
        var _this = this;
        var stylesLiArr = this.state.isDisabled ? [css.LiBase, css.LiDisabled] : [css.LiBase];
        var cssInputArr = this.state.isDisabled ? [css.Input, css.InputDisabled] : [css.Input];
        var liElements = this.state.values.map(function (itemValue, index) {
            return (React.createElement("li", { key: itemValue + index, style: stylesLiArr },
                React.createElement("input", { checked: _this.state.selectedOption === itemValue, onChange: _this.handleOptionChange, style: cssInputArr, type: "radio", name: _this.props.name, value: itemValue }),
                React.createElement("span", { style: [css.Text], value: itemValue, onClick: _this.handleLiClick }, _this.state.textValues[index])));
        });
        return (React.createElement("div", null,
            React.createElement(Radium.StyleRoot, null,
                React.createElement("div", { style: [css.UlBase] },
                    this.state.title ? React.createElement("div", { style: [css.Title] }, this.state.title) : null,
                    liElements))));
    };
    RadiobuttonList.prototype._updateStateAndNotify = function (selectedOption) {
        var _this = this;
        if (!this.state.isDisabled) {
            if (this.props.notifyOnChange) {
                this.setState({ selectedOption: selectedOption }, function () {
                    _this.props.notifyOnChange(selectedOption);
                });
            }
            else {
                this.setState({ selectedOption: selectedOption });
            }
        }
    };
    RadiobuttonList.prototype.handleOptionChange = function (changeEvent) {
        var safeSearchTypeValue = changeEvent.currentTarget.value;
        this._updateStateAndNotify(safeSearchTypeValue);
    };
    RadiobuttonList.prototype.handleLiClick = function (clickEvent) {
        var safeSearchTypeValue = clickEvent.currentTarget.getAttribute("value");
        this._updateStateAndNotify(safeSearchTypeValue);
    };
    return RadiobuttonList;
}(React.Component));
RadiobuttonList = __decorate([
    Radium
], RadiobuttonList);
exports.default = RadiobuttonList;
//# sourceMappingURL=RadioButtonList.js.map