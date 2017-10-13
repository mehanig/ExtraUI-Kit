"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var css_const_1 = require("../css_const");
var TabMenuBase = {
    display: "flex",
    flexDirection: "column",
    fontFamily: "HelveticaNeue, Helvetica Neue, HelveticaNeueRoman, HelveticaNeue-Roman, Helvetica Neue Roman, TeXGyreHerosRegular, Helvetica, Tahoma, Geneva, Arial",
    border: 0,
    outline: "none",
    userSelect: "none",
    listStyle: "none",
    overflow: "hidden",
    fontSize: css_const_1.CONST.FontSize,
    color: css_const_1.CONST.TextColor,
    boxSizing: "border-box",
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
    margin: "auto 5px 0px 5px",
    cursor: "pointer",
};
exports.tabBase = tabBase;
var selectedTab = {
    borderBottom: "2px solid " + css_const_1.CONST.UnderlineColor,
};
exports.selectedTab = selectedTab;
var tabWithTitleStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: "10px",
    background: css_const_1.CONST.Darken50,
    marginBottom: "10px",
};
exports.tabWithTitleStyle = tabWithTitleStyle;
var notSelectedTab = {};
exports.notSelectedTab = notSelectedTab;
//# sourceMappingURL=css_eb_tabmenu.js.map