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
var css = require("./css_eb_valueslider");
var EBValueSlider = (function (_super) {
    __extends(EBValueSlider, _super);
    function EBValueSlider(props) {
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
            tmpValue: ""
        };
        _this.onMouseMove = _this.onMouseMove.bind(_this);
        _this.onMouseUp = _this.onMouseUp.bind(_this);
        _this.onMouseDown = _this.onMouseDown.bind(_this);
        _this.mountEditValueBox = _this.mountEditValueBox.bind(_this);
        _this.unmountEditValueBoxSave = _this.unmountEditValueBoxSave.bind(_this);
        _this.handleInputChange = _this.handleInputChange.bind(_this);
        _this.handleInputKeyPress = _this.handleInputKeyPress.bind(_this);
        return _this;
    }
    EBValueSlider.prototype.render = function () {
        var mainBase = this.props.sizeH ? [css.MainBase, { width: this.props.sizeH + "px" }] : [css.MainBase];
        var noEditBoxSlider = (React.createElement("span", { style: [css.Draggable], onMouseDown: this.onMouseDown, onMouseMove: this.onMouseMove, onDoubleClick: this.mountEditValueBox, onMouseUp: this.onMouseUp }, this.state.currentValue));
        var EditBoxSlider = (React.createElement("span", { style: [css.Draggable], onClick: this.unmountEditValueBoxSave },
            React.createElement("input", { style: [css.InputField], value: this.state.tmpValue, ref: function (input) { return input && input.focus(); }, onChange: this.handleInputChange, onKeyPress: this.handleInputKeyPress })));
        return (React.createElement("div", null,
            React.createElement(Radium.StyleRoot, null,
                React.createElement("div", { style: mainBase },
                    React.createElement("span", { style: [css.Title] }, this.state.title),
                    !this.state.isEditBoxMounted ? noEditBoxSlider : EditBoxSlider))));
    };
    EBValueSlider.prototype._updateStateAndNotify = function (currentValue) {
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
    EBValueSlider.prototype.onMouseDown = function (mouseEvent) {
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
    EBValueSlider.prototype.onMouseMove = function (mouseEvent) {
        if (this.state.mouseMoveReady) {
            var initialValue = this.state.initialSliderValue;
            var initialX = this.state.initialXPos;
            var currX = mouseEvent.pageX;
            var currValue = initialValue + currX - initialX;
            this._updateStateAndNotify(currValue);
        }
    };
    EBValueSlider.prototype.onMouseUp = function (mouseEvent) {
        this.setState({
            mouseMoveReady: false,
        });
        window.removeEventListener("mousemove", this.onMouseMove);
        window.removeEventListener("mouseup", this.onMouseUp);
    };
    EBValueSlider.prototype.mountEditValueBox = function () {
        var isEditBoxMounted = !this.state.isEditBoxMounted;
        this.setState({ isEditBoxMounted: isEditBoxMounted, tmpValue: this.state.currentValue });
    };
    EBValueSlider.prototype.unmountEditValueBoxSave = function () {
        var _this = this;
        var intValue = Number(this.state.tmpValue);
        if (!isNaN(intValue)) {
            this.setState({ currentValue: intValue }, function () {
                _this._updateStateAndNotify(intValue);
            });
        }
        var isEditBoxMounted = !this.state.isEditBoxMounted;
        this.setState({ isEditBoxMounted: isEditBoxMounted });
    };
    EBValueSlider.prototype.handleInputChange = function (e) {
        this.setState({ tmpValue: e.target.value });
    };
    EBValueSlider.prototype.handleInputKeyPress = function (e) {
        if (e.key === 'Enter') {
            this.unmountEditValueBoxSave();
        }
    };
    return EBValueSlider;
}(React.Component));
exports.EBValueSlider = EBValueSlider;
var ValueSlider = Radium(EBValueSlider);
exports.ValueSlider = ValueSlider;
//# sourceMappingURL=eb_valueslider.js.map