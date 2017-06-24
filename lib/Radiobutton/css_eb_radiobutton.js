"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var li_base = {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
    border: 0,
    height: '20px',
    padding: '2px 2px',
    outline: 'none',
    userSelect: 'none',
    listStyle: 'none'
};
exports.li_base = li_base;
var li_active = {};
exports.li_active = li_active;
var li_disabled = {
    backgroundColor: '#989898'
};
exports.li_disabled = li_disabled;
var ul_base = {
    fontSize: 11,
    display: 'flex',
    float: "left",
    flexDirection: "column",
    margin: '10px',
    color: '#fff',
};
exports.ul_base = ul_base;
var input = {
    margin: "0 5px 0 0",
    cursor: 'pointer',
};
exports.input = input;
var input_disabled = {
    ':checked': {
        color: '#393939'
    }
};
exports.input_disabled = input_disabled;
var input_active = {};
exports.input_active = input_active;
var text = {
    margin: "0 0 5px 0",
    cursor: 'pointer'
};
exports.text = text;
var title = {
    fontSize: 13,
    margin: '0 0 8px 2px',
    cursor: 'pointer'
};
exports.title = title;
//# sourceMappingURL=css_eb_radiobutton.js.map