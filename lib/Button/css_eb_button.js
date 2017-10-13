"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var css_const_1 = require("../css_const");
var CssBase = {
    fontSize: css_const_1.CONST.FontSize,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "column",
    fontFamily: "HelveticaNeue, Helvetica Neue, HelveticaNeueRoman, HelveticaNeue-Roman, Helvetica Neue Roman, TeXGyreHerosRegular, Helvetica, Tahoma, Geneva, Arial",
    color: css_const_1.CONST.TextColor,
    border: 0,
    width: "140px",
    height: "22px",
    borderRadius: "2px",
    padding: "2px 2px",
    margin: "10px",
    cursor: "pointer",
    outline: "none",
    userSelect: "none",
    boxSizing: "border-box",
};
exports.CssBase = CssBase;
var CssActive = {
    "backgroundColor": "#2391FF",
    ":hover": {
        backgroundColor: "#0088FF",
    },
    ":focus": {
        backgroundColor: "#0088FF",
    },
    ":active": {
        backgroundColor: "#005299",
        transform: "translateY(2px)",
    },
};
exports.CssActive = CssActive;
var CssDisabled = {
    backgroundColor: "#393939",
};
exports.CssDisabled = CssDisabled;
var CssPBase = {
    margin: "auto",
};
exports.CssPBase = CssPBase;
var AEButton = {
    fontSize: css_const_1.CONST.FontSize,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "column",
    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
    color: css_const_1.CONST.TextColor,
    border: "1px solid " + css_const_1.CONST.UnderlineColor,
    width: "140px",
    height: "22px",
    borderRadius: "22px",
    padding: "2px 2px",
    margin: "10px",
    cursor: "pointer",
    outline: "none",
    userSelect: "none",
};
exports.AEButton = AEButton;
var AECssActive = {
    "backgroundColor": "Transparent",
    "backgroundRepeat": "no-repeat",
    "overflow": "hidden",
    ":hover": {
        backgroundColor: "#9d9d9d",
    },
    ":focus": {
        backgroundColor: "#0088FF",
    },
    ":active": {
        backgroundColor: "#005299",
        transform: "translateY(2px)",
    },
};
exports.AECssActive = AECssActive;
var AECssDisabled = {
    backgroundColor: "#393939",
};
exports.AECssDisabled = AECssDisabled;
//# sourceMappingURL=css_eb_button.js.map