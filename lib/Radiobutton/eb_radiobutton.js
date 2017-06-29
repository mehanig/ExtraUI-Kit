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
var css = require("./css_eb_radiobutton");
var _EB_RadioButtonList = (function (_super) {
    __extends(_EB_RadioButtonList, _super);
    function _EB_RadioButtonList(props) {
        var _this = _super.call(this) || this;
        _this.state = {
            values: props.values,
            isDisabled: props.disabled ? true : false,
            name: props.name,
            textValues: props.textValues ? props.textValues : props.values,
            title: props.title,
            selectedOption: props.selectedOption
        };
        return _this;
    }
    _EB_RadioButtonList.prototype._updateStateAndNotify = function (selectedOption) {
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
    _EB_RadioButtonList.prototype.handleOptionChange = function (changeEvent) {
        var safeSearchTypeValue = changeEvent.currentTarget.value;
        this._updateStateAndNotify(safeSearchTypeValue);
    };
    _EB_RadioButtonList.prototype.handleLiClick = function (clickEvent) {
        var safeSearchTypeValue = clickEvent.currentTarget.getAttribute('value');
        this._updateStateAndNotify(safeSearchTypeValue);
    };
    _EB_RadioButtonList.prototype.render = function () {
        var _this = this;
        var stylesLiArr = this.state.isDisabled ? [css.li_base, css.li_disabled] : [css.li_base, css.li_active];
        var css_input_arr = this.state.isDisabled ? [css.input, css.input_disabled] : [css.input, css.input_active];
        var li_elements = this.state.values.map(function (item_value, index) {
            return React.createElement("li", { key: item_value + index, style: stylesLiArr },
                React.createElement("input", { checked: _this.state.selectedOption === item_value, onChange: function (e) { _this.handleOptionChange(e); }, style: css_input_arr, type: "radio", name: _this.props.name, value: item_value }),
                React.createElement("span", { style: [css.text], value: item_value, onClick: function (e) { _this.handleLiClick(e); } }, _this.state.textValues[index]));
        });
        return React.createElement("div", null,
            React.createElement(radium_1.StyleRoot, null,
                React.createElement("div", { style: [css.ul_base] },
                    this.state.title ? React.createElement("div", { style: [css.title] },
                        this.state.title,
                        ": ",
                        this.state.selectedOption) : null,
                    li_elements)));
    };
    return _EB_RadioButtonList;
}(React.Component));
exports._EB_RadioButtonList = _EB_RadioButtonList;
var EB_RadioButtonList = Radium(_EB_RadioButtonList);
exports.EB_RadioButtonList = EB_RadioButtonList;
//# sourceMappingURL=eb_radiobutton.js.map