"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CssBase = {
    fontSize: 11,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "column",
    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
    color: "#fff",
    border: 0,
    width: "140px",
    height: "22px",
    borderRadius: "2px",
    padding: "2px 2px",
    margin: "10px",
    cursor: "pointer",
    outline: "none",
    userSelect: "none",
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
