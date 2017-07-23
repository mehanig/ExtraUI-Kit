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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var base64Active = "base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAACNJREFUOBFjYKAQMKakpPynxAwmSjQPDr2jYcDAMBoGwyIMANZNCLmkwvgBAAAAAElFTkSuQmCC";
var RowIcon = (function (_super) {
    __extends(RowIcon, _super);
    function RowIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RowIcon.prototype.render = function () {
        return (React.createElement("img", { src: "data:image/png;" + base64Active }));
    };
    return RowIcon;
}(React.Component));
exports.RowIcon = RowIcon;
//# sourceMappingURL=RowIcon.js.map