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
var css = require("./css_eb_tabmenu");
var Icons = require("../Icons/_allIcons");
var eb_tab_1 = require("./eb_tab");
var TabMenu = (function (_super) {
    __extends(TabMenu, _super);
    function TabMenu(props) {
        var _this = _super.call(this) || this;
        _this.state = {
            values: props.values,
            isDisabled: props.disabled ? true : false,
            name: props.name,
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
            if (c.props && c.type === eb_tab_1.Tab) {
                return child;
            }
        });
        var tabs = this.state.values.map(function (itemValue, index) {
            var styleTab = _this.state.selectedOption === itemValue ?
                [css.tabBase, css.selectedTab] : [css.tabBase, css.notSelectedTab];
            var tabElement = allTabs[index];
            var tabIcon = tabElement.props.icon ? tabElement.props.icon : false;
            var Component = tabIcon ? Icons[tabIcon] : null;
            var tabContent = tabIcon ? (<span><Component /></span>) : (<span>{_this.state.textValues[index]}</span>);
            return (<span key={index} value={itemValue} style={styleTab} onClick={_this.onTabClick}>
          {tabContent}
        </span>);
        });
        var selectedTabContentArr = allTabs.filter(function (child) {
            var c = child;
            if (c.props && _this.state.selectedOption && c.props.value === _this.state.selectedOption) {
                return child;
            }
        });
        var selectedTabContent = selectedTabContentArr.length ? selectedTabContentArr[0] : null;
        var tabHeading = (<div style={[css.tabsStyle]}>
        {tabs}
      </div>);
        var tabHeadingWithTitle = (<div className="extraui-kit__tabmenu-tabWithTitleStyle" style={[css.tabWithTitleStyle]}>
        <span>{this.props.title}</span>
        {tabHeading}
      </div>);
        return (<div onClick={this.props.onClick ? this.props.onClick : null} className={this.props.onClick ? "EB_TabClickable" : ""}>
        <Radium.StyleRoot>
          <div style={stylesLiArr}>
            {this.props.title ? tabHeadingWithTitle : tabHeading}
            <div>
              {selectedTabContent}
            </div>
          </div>
        </Radium.StyleRoot>
      </div>);
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
exports.TabMenu = TabMenu;
