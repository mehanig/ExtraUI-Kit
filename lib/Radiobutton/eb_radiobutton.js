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
var css = require("./css_eb_radiobutton");
var EBRadioButtonList = (function (_super) {
    __extends(EBRadioButtonList, _super);
    function EBRadioButtonList(props) {
        var _this = _super.call(this) || this;
        _this.state = {
            values: props.values,
            isDisabled: props.disabled ? true : false,
            name: props.name,
            textValues: props.textValues ? props.textValues : props.values,
            title: props.title,
            selectedOption: props.selectedOption,
        };
        _this.handleOptionChange = _this.handleOptionChange.bind(_this);
        _this.handleLiClick = _this.handleLiClick.bind(_this);
        return _this;
    }
    EBRadioButtonList.prototype.render = function () {
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
                    this.state.title ? React.createElement("div", { style: [css.Title] },
                        this.state.title,
                        ": ",
                        this.state.selectedOption) : null,
                    liElements))));
    };
    EBRadioButtonList.prototype._updateStateAndNotify = function (selectedOption) {
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
    EBRadioButtonList.prototype.handleOptionChange = function (changeEvent) {
        var safeSearchTypeValue = changeEvent.currentTarget.value;
        this._updateStateAndNotify(safeSearchTypeValue);
    };
    EBRadioButtonList.prototype.handleLiClick = function (clickEvent) {
        var safeSearchTypeValue = clickEvent.currentTarget.getAttribute("value");
        this._updateStateAndNotify(safeSearchTypeValue);
    };
    return EBRadioButtonList;
}(React.Component));
exports.EBRadioButtonList = EBRadioButtonList;
var RadioButtonList = Radium(EBRadioButtonList);
exports.RadioButtonList = RadioButtonList;
//# sourceMappingURL=eb_radiobutton.js.map