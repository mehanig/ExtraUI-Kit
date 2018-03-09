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
var Icons_1 = require("../Icons/Icons");
var css = require("./css_eb_searchbox");
var SearchBox = (function (_super) {
    __extends(SearchBox, _super);
    function SearchBox(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            value: "",
        };
        _this.handleInputChange = _this.handleInputChange.bind(_this);
        _this.handleInputKeyPress = _this.handleInputKeyPress.bind(_this);
        return _this;
    }
    SearchBox.prototype.render = function () {
        var Icon = this.props.icon ? React.createElement(Icons_1.default, { type: this.props.icon }) : React.createElement(Icons_1.default, { type: "SearchIcon" });
        var inputStyle = [css.InputWithIconStyle];
        return (React.createElement("div", { className: "extraui-kit__searchBox", style: [css.SearchBoxStyle] },
            React.createElement("span", { style: [css.InlinedIcon] }, Icon),
            React.createElement("input", { style: inputStyle, value: this.state.value, onChange: this.handleInputChange, onKeyPress: this.handleInputKeyPress, placeholder: this.props.placeholder }),
            this.props.children));
    };
    SearchBox.prototype.handleInputChange = function (e) {
        this.setState({ value: e.target.value });
        if (typeof this.props.onType === "function") {
            this.props.onType(e.target.value);
        }
    };
    SearchBox.prototype.handleInputKeyPress = function (e) {
        if (e.key === "Enter") {
            if (typeof this.props.onHitEnter === "function") {
                this.props.onHitEnter(this.state.value);
            }
        }
    };
    SearchBox = __decorate([
        Radium
    ], SearchBox);
    return SearchBox;
}(React.Component));
exports.default = SearchBox;
//# sourceMappingURL=SearchBox.js.map