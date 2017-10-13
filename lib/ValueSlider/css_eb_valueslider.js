"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var css_const_1 = require("../css_const");
var MainBase = {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    fontFamily: "HelveticaNeue, Helvetica Neue, HelveticaNeueRoman, HelveticaNeue-Roman, Helvetica Neue Roman, TeXGyreHerosRegular, Helvetica, Tahoma, Geneva, Arial",
    height: "20px",
    color: css_const_1.CONST.TextColor,
    fontSize: css_const_1.CONST.FontSize,
    padding: "2px 2px",
    outline: "none",
    userSelect: "none",
    listStyle: "none",
    margin: "10px",
    boxSizing: "border-box",
};
exports.MainBase = MainBase;
var Title = {
    cursor: "pointer",
};
exports.Title = Title;
var Draggable = {
    "color": "#2391FF",
    ":hover": {
        color: "#0088FF",
    },
    "cursor": "pointer",
    "marginLeft": "auto",
    "padding": "3px 12px 3px 12px",
    "background": css_const_1.CONST.Darken20,
    "minWidth": "40px",
    "maxWidth": "40px",
    "boxSizing": "border-box",
};
exports.Draggable = Draggable;
var InputField = {
    width: "30px",
};
exports.InputField = InputField;
//# sourceMappingURL=css_eb_valueslider.js.map