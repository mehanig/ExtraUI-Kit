"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var css_base = {
    fontSize: 11,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "column",
    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
    color: '#fff',
    border: 0,
    width: '140px',
    height: '22px',
    borderRadius: '2px',
    padding: '2px 2px',
    margin: '10px',
    cursor: 'pointer',
    outline: 'none',
    userSelect: 'none'
};
exports.css_base = css_base;
var css_active = {
    backgroundColor: '#2391FF',
    ':hover': {
        backgroundColor: '#0088FF',
    },
    ':focus': {
        backgroundColor: '#0088FF',
    },
    ':active': {
        backgroundColor: '#005299',
        transform: 'translateY(2px)',
    },
};
exports.css_active = css_active;
var css_disabled = {
    backgroundColor: '#393939'
};
exports.css_disabled = css_disabled;
var css_p_base = {
    margin: "auto"
};
exports.css_p_base = css_p_base;
//# sourceMappingURL=css_eb_button.js.map