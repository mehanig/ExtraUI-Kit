"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var css_const_1 = require("../css_const");
var LiDisabled = {
    backgroundColor: "#989898",
};
exports.LiDisabled = LiDisabled;
var Base = {
    display: "flex",
    float: "left",
    flexDirection: "row",
    margin: "10px",
    fontSize: 12,
    color: css_const_1.CONST.TextColor,
    border: 0,
    height: "20px",
    padding: "2px 2px",
    outline: "none",
    userSelect: "none",
    alignItems: "center",
    listStyle: "none",
    boxSizing: "border-box",
    fontFamily: "HelveticaNeue, Helvetica Neue, HelveticaNeueRoman, HelveticaNeue-Roman, Helvetica Neue Roman, TeXGyreHerosRegular, Helvetica, Tahoma, Geneva, Arial",
};
exports.Base = Base;
var Input = {
    margin: "0 5px 0 0",
    cursor: "pointer",
};
exports.Input = Input;
var InputDisabled = {
    ":checked": {
        color: "#393939",
    },
};
exports.InputDisabled = InputDisabled;
var InputActive = {};
exports.InputActive = InputActive;
var Text = {
    margin: "0 0 5px 0",
    cursor: "pointer",
};
exports.Text = Text;
var Title = {
    marginLeft: "0.3em",
    cursor: "pointer",
};
exports.Title = Title;
