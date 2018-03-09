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
var css = require("./css_eb_itemgroup");
var react_animate_height_1 = require("react-animate-height");
var Icons_1 = require("../Icons/Icons");
var ItemGroup = (function (_super) {
    __extends(ItemGroup, _super);
    function ItemGroup(props) {
        var _this = _super.call(this, props) || this;
        var filterContent = _this.createFilter(props);
        _this.state = {
            isFolded: props.isFolded,
            filterContent: filterContent,
            itemHeight: 0,
        };
        return _this;
    }
    ItemGroup.prototype.render = function () {
        var _this = this;
        var itemsFiltered = this.props.items.filter(this.state.filterContent);
        var cells = itemsFiltered.map(function (item, idx) {
            return (React.createElement("div", { key: idx, ref: function (cellDivElement) {
                    if (cellDivElement && cellDivElement.clientHeight !== _this.state.itemHeight) {
                        _this.setState(__assign({}, _this.state, { itemHeight: cellDivElement.clientHeight }));
                    }
                } }, item));
        });
        var Icon = this.state.isFolded ? React.createElement(Icons_1.default, { type: "TriangleArrowRight" }) : React.createElement(Icons_1.default, { type: "TriangleArrowDown" });
        var animatedCells = (React.createElement(react_animate_height_1.default, { duration: 500, height: this.state.isFolded ? "0" : this.state.itemHeight * cells.length }, cells));
        return (React.createElement("div", { style: [css.ItemGroupMain] },
            React.createElement("div", { className: "extraui-kit__itemGroup-title", style: [css.ItemGroupTitle], onClick: this.props.onTitleClick },
                React.createElement("span", { className: "extraui-kit__itemGroup-title-icon", style: [css.ItemGroupTitleIcon] }, Icon),
                this.props.title ? this.props.title : null),
            animatedCells,
            this.props.children));
    };
    ItemGroup.prototype.componentWillReceiveProps = function (nextProps) {
        var filterContent = this.createFilter(nextProps);
        var changeFromClick = nextProps.isFolded !== this.props.isFolded ? !this.state.isFolded : nextProps.isFolded;
        this.setState(__assign({}, this.state, { isFolded: this.isFilterChanged(nextProps) ? false : changeFromClick, filterContent: filterContent }));
    };
    ItemGroup.prototype.isFilterChanged = function (nextProps) {
        if (this.props.filterContent !== nextProps.filterContent) {
            return true;
        }
    };
    ItemGroup.prototype.createFilter = function (props) {
        var _this = this;
        var filter;
        if (!props.hasOwnProperty("filterContent")) {
            filter = function () { return true; };
        }
        else {
            if (typeof props.filterContent === "string") {
                filter = function (s) {
                    return s.props.value.indexOf(_this.props.filterContent) !== -1;
                };
            }
            else if (typeof props.filterContent === "function") {
                filter = props.filterContent;
            }
            else if (typeof props.filterContent === "boolean") {
                filter = function () { return props.filterContent; };
            }
        }
        return filter;
    };
    ItemGroup = __decorate([
        Radium
    ], ItemGroup);
    return ItemGroup;
}(React.Component));
exports.default = ItemGroup;
//# sourceMappingURL=ItemGroup.js.map