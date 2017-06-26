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
var css = require("./css_eb_valueslider");
var _EB_ValueSlider = (function (_super) {
    __extends(_EB_ValueSlider, _super);
    function _EB_ValueSlider(props) {
        var _this = _super.call(this) || this;
        var max = props.maxValue;
        var min = props.minValue;
        _this.state = {
            isDisabled: props.disabled ? true : false,
            title: props.title,
            currentValue: props.currentValue ? props.currentValue : (min + max) / 2,
            mouseMoveReady: false,
            currentXPos: 0,
        };
        _this.onMouseMove = _this.onMouseMove.bind(_this);
        _this.onMouseUp = _this.onMouseUp.bind(_this);
        return _this;
    }
    _EB_ValueSlider.prototype._updateStateAndNotify = function (currentValue) {
        if (!this.state.isDisabled) {
            if (this.props.notifyOnChange) {
                this.props.notifyOnChange(currentValue);
            }
            this.setState({ currentValue: currentValue });
        }
    };
    _EB_ValueSlider.prototype.handleOptionChange = function (changeEvent) {
        var safeSearchTypeValue = parseInt(changeEvent.currentTarget.value);
        this._updateStateAndNotify(safeSearchTypeValue);
    };
    _EB_ValueSlider.prototype.handleLiClick = function (clickEvent) {
        var safeSearchTypeValue = parseInt(clickEvent.currentTarget.getAttribute('value'));
        this._updateStateAndNotify(safeSearchTypeValue);
    };
    _EB_ValueSlider.prototype.onMouseDown = function (mouseEvent) {
        var max = this.props.maxValue;
        var min = this.props.minValue;
        this.setState({
            mouseMoveReady: true,
            initialXPos: mouseEvent.pageX,
            initialSliderValue: this.state.currentValue ? this.state.currentValue : (min + max) / 2
        });
        window.addEventListener("mousemove", this.onMouseMove);
        window.addEventListener("mouseup", this.onMouseUp);
    };
    _EB_ValueSlider.prototype.onMouseMove = function (mouseEvent) {
        if (this.state.mouseMoveReady) {
            var initialValue = this.state.initialSliderValue;
            var initialX = this.state.initialXPos;
            var currX = mouseEvent.pageX;
            this.setState({
                currentValue: initialValue + currX - initialX
            });
        }
    };
    _EB_ValueSlider.prototype.onMouseUp = function (mouseEvent) {
        this.setState({
            mouseMoveReady: false
        });
        window.removeEventListener("mousemove", this.onMouseMove);
        window.removeEventListener("mouseup", this.onMouseUp);
    };
    _EB_ValueSlider.prototype.render = function () {
        var _this = this;
        var stylesLiArr = this.state.isDisabled ? [css.main_base, css.main_disabled] : [css.main_base, css.main_active];
        return React.createElement("div", null,
            React.createElement(radium_1.StyleRoot, null,
                React.createElement("div", { style: [css.main_base] },
                    React.createElement("span", { style: [css.title] }, this.state.title),
                    React.createElement("span", { style: [css.draggable], onMouseDown: function (e) { _this.onMouseDown(e); }, onMouseMove: function (e) { _this.onMouseMove(e); }, onMouseUp: function (e) { _this.onMouseUp(e); } }, this.state.currentValue))));
    };
    return _EB_ValueSlider;
}(React.Component));
exports._EB_ValueSlider = _EB_ValueSlider;
var EB_ValueSlider = Radium(_EB_ValueSlider);
exports.EB_ValueSlider = EB_ValueSlider;
//# sourceMappingURL=eb_valueslider.js.map