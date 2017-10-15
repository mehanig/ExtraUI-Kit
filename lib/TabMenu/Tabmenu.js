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
var css = require("./css_eb_tabmenu");
var Tab_1 = require("./Tab");
var TabMenu = (function (_super) {
    __extends(TabMenu, _super);
    function TabMenu(props) {
        var _this = _super.call(this) || this;
        _this.state = {
            values: props.values,
            isDisabled: !!props.disabled,
            textValues: props.textValues ? props.textValues : props.values,
            selectedOption: props.selectedOption,
        };
        _this.onTabClick = _this.onTabClick.bind(_this);
        return _this;
    }
    TabMenu.prototype.render = function () {
        var _this = this;
        var stylesLiArr = this.state.isDisabled ? [css.TabMenuBase] : [css.TabMenuBase];
        var allTabs = React.Children.map(this.props.children, function (child) {
            var c = child;
            if (c.props && c.type === Tab_1.default) {
                return child;
            }
        });
        var tabs = this.state.values.map(function (itemValue, index) {
            var styleTab = _this.state.selectedOption === itemValue ?
                [css.tabBase, css.selectedTab] : [css.tabBase, css.notSelectedTab];
            var tabElement = allTabs[index];
            var tabIcon = tabElement.props.icon ? tabElement.props.icon : false;
            var Component = tabIcon ? React.createElement(Icons_1.default, { type: tabIcon }) : null;
            var tabContent = tabIcon ? (React.createElement("span", null, Component)) : (React.createElement("span", null, _this.state.textValues[index]));
            return (React.createElement("span", { key: index, value: itemValue, style: styleTab, onClick: _this.onTabClick }, tabContent));
        });
        var selectedTabContentArr = allTabs.filter(function (child) {
            var c = child;
            if (c.props && _this.state.selectedOption && c.props.value === _this.state.selectedOption) {
                return child;
            }
        });
        var selectedTabContent = selectedTabContentArr.length ? selectedTabContentArr[0] : null;
        var tabHeading = (React.createElement("div", { style: [css.tabsStyle] }, tabs));
        var tabHeadingWithTitle = (React.createElement("div", { className: "extraui-kit__tabmenu-tabWithTitleStyle", style: [css.tabWithTitleStyle] },
            React.createElement("span", null, this.props.title),
            tabHeading));
        return (React.createElement("div", { onClick: this.props.onClick ? this.props.onClick : null, className: this.props.onClick ? "EB_TabClickable" : "" },
            React.createElement(Radium.StyleRoot, null,
                React.createElement("div", { style: stylesLiArr },
                    this.props.title ? tabHeadingWithTitle : tabHeading,
                    React.createElement("div", null, selectedTabContent)))));
    };
    TabMenu.prototype.onTabClick = function (clickEvent) {
        var safeTypeValue = clickEvent.currentTarget.getAttribute("value");
        this.setState({ selectedOption: safeTypeValue });
        if (this.props.notifyOnChange) {
            this.props.notifyOnChange(safeTypeValue);
        }
    };
    return TabMenu;
}(React.Component));
TabMenu = __decorate([
    Radium
], TabMenu);
exports.default = TabMenu;
//# sourceMappingURL=TabMenu.js.map