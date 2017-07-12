"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var css_const_1 = require("../css_const");
var MainBase = {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
    borderBottom: "1px solid " + css_const_1.CONST.UnderlineColor,
    height: "20px",
    color: css_const_1.CONST.TextColor,
    fontSize: css_const_1.CONST.FontSize,
    padding: "2px 2px",
    outline: "none",
    userSelect: "none",
    listStyle: "none",
    margin: "10px",
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
};
exports.Draggable = Draggable;
var InputField = {
    width: "30px",
};
exports.InputField = InputField;
//# sourceMappingURL=css_eb_valueslider.js.map