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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
var css = require("./css_eb_itemgroup");
var Item = (function (_super) {
    __extends(Item, _super);
    function Item(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            hover: false,
        };
        _this.onMouseEnter = _this.onMouseEnter.bind(_this);
        _this.onMouseLeave = _this.onMouseLeave.bind(_this);
        return _this;
    }
    Item.prototype.render = function () {
        var Icon = this.props.icon ? React.createElement(Icons_1.default, { type: this.props.icon }) : null;
        if (this.state.hover && this.props.iconOnHover) {
            Icon = React.createElement(Icons_1.default, { type: this.props.iconOnHover });
        }
        return (React.createElement("div", { className: "extraui-kit__item-itemElement", style: [css.ItemMain], onClick: this.props.onClick ? this.props.onClick : null, onMouseEnter: this.onMouseEnter, onMouseLeave: this.onMouseLeave },
            React.createElement("span", { style: [css.ItemMainIcon] }, Icon),
            this.props.children));
    };
    Item.prototype.onMouseEnter = function () {
        this.setState(__assign({}, this.state, { hover: true }));
    };
    Item.prototype.onMouseLeave = function () {
        this.setState(__assign({}, this.state, { hover: false }));
    };
    Item = __decorate([
        Radium
    ], Item);
    return Item;
}(React.Component));
exports.default = Item;
//# sourceMappingURL=Item.js.map