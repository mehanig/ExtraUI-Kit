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
var radium_1 = require("radium");
var css = require("./css_eb_valueslider");
var _ValueSlider = (function (_super) {
    __extends(_ValueSlider, _super);
    function _ValueSlider(props) {
        var _this = _super.call(this) || this;
        var max = props.maxValue;
        var min = props.minValue;
        _this.state = {
            isDisabled: props.disabled ? true : false,
            title: props.title,
            currentValue: props.currentValue ? props.currentValue : (min + max) / 2,
            mouseMoveReady: false,
            currentXPos: 0,
            isEditBoxMounted: false,
        };
        _this.onMouseMove = _this.onMouseMove.bind(_this);
        _this.onMouseUp = _this.onMouseUp.bind(_this);
        return _this;
    }
    _ValueSlider.prototype._updateStateAndNotify = function (currentValue) {
        var _this = this;
        if (!this.state.isDisabled) {
            if (this.props.notifyOnChange) {
                this.setState({ currentValue: currentValue }, function () {
                    _this.props.notifyOnChange(currentValue);
                });
            }
            else {
                this.setState({ currentValue: currentValue });
            }
        }
    };
    _ValueSlider.prototype.onMouseDown = function (mouseEvent) {
        var max = this.props.maxValue;
        var min = this.props.minValue;
        this.setState({
            mouseMoveReady: true,
            initialXPos: mouseEvent.pageX,
            initialSliderValue: this.state.currentValue ? this.state.currentValue : (min + max) / 2,
        });
        window.addEventListener("mousemove", this.onMouseMove);
        window.addEventListener("mouseup", this.onMouseUp);
    };
    _ValueSlider.prototype.onMouseMove = function (mouseEvent) {
        if (this.state.mouseMoveReady) {
            var initialValue = this.state.initialSliderValue;
            var initialX = this.state.initialXPos;
            var currX = mouseEvent.pageX;
            var currValue = initialValue + currX - initialX;
            this._updateStateAndNotify(currValue);
        }
    };
    _ValueSlider.prototype.onMouseUp = function (mouseEvent) {
        this.setState({
            mouseMoveReady: false,
        });
        window.removeEventListener("mousemove", this.onMouseMove);
        window.removeEventListener("mouseup", this.onMouseUp);
    };
    _ValueSlider.prototype.mountEditValueBox = function () {
        var isEditBoxMounted = !this.state.isEditBoxMounted;
        this.setState({ isEditBoxMounted: isEditBoxMounted });
    };
    _ValueSlider.prototype.unmountEditValueBoxSave = function () {
    };
    _ValueSlider.prototype.render = function () {
        var _this = this;
        var mainBase = this.props.sizeH ? [css.main_base, { "width": this.props.sizeH + "px" }] : [css.main_base];
        return React.createElement("div", null,
            React.createElement(radium_1.StyleRoot, null,
                React.createElement("div", { style: mainBase },
                    React.createElement("span", { style: [css.title] }, this.state.title),
                    !this.state.isEditBoxMounted ?
                        (React.createElement("span", { style: [css.draggable], onMouseDown: function (e) { _this.onMouseDown(e); }, onMouseMove: function (e) { _this.onMouseMove(e); }, onDoubleClick: function (e) { _this.mountEditValueBox(); }, onMouseUp: function (e) { _this.onMouseUp(e); } }, this.state.currentValue)) :
                        (React.createElement("span", { style: [css.draggable], onClick: function (e) { _this.unmountEditValueBoxSave(); } },
                            React.createElement("input", { style: [css.input_field] }))))));
    };
    return _ValueSlider;
}(React.Component));
exports._ValueSlider = _ValueSlider;
var ValueSlider = Radium(_ValueSlider);
exports.ValueSlider = ValueSlider;
//# sourceMappingURL=eb_valueslider.js.map