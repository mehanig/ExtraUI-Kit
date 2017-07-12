"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var css_const_1 = require("../css_const");
var TabMenuBase = {
    display: "flex",
    flexDirection: "column",
    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
    border: 0,
    padding: "2px 2px",
    outline: "none",
    userSelect: "none",
    listStyle: "none",
    overflow: "hidden",
    fontSize: css_const_1.CONST.FontSize,
    color: css_const_1.CONST.TextColor,
};
exports.TabMenuBase = TabMenuBase;
var tabsStyle = {
    alignSelf: "flex-start",
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    overflow: "hidden",
};
exports.tabsStyle = tabsStyle;
var tabBase = {
    padding: "6px 5px 3px 5px",
    margin: "auto 5px 3px 5px",
    cursor: "pointer",
};
exports.tabBase = tabBase;
var selectedTab = {
    borderBottom: "2px solid " + css_const_1.CONST.UnderlineColor,
};
exports.selectedTab = selectedTab;
var notSelectedTab = {};
exports.notSelectedTab = notSelectedTab;
//# sourceMappingURL=css_eb_tabmenu.js.map