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
var base64Active = "base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAOCAYAAAAmL5yKAAAAIElEQVQokWO8cOHCfwYKABMlmgcHYBwNg9EwYBgMYQAA3esNyX25hI0AAAAASUVORK5CYII=";
var base64Inactive = "base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAOCAYAAAAmL5yKAAAAH0lEQVQokWPMzMz8z0ABYKJE8+AAjKNhMBoGDIMhDAAYbAj1EJ3h2AAAAABJRU5ErkJggg==";
var RowIconActive = (function (_super) {
    __extends(RowIconActive, _super);
    function RowIconActive() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RowIconActive.prototype.render = function () {
        return (React.createElement("img", { src: "data:image/png;" + base64Active }));
    };
    return RowIconActive;
}(React.Component));
exports.RowIconActive = RowIconActive;
var RowIconInactive = (function (_super) {
    __extends(RowIconInactive, _super);
    function RowIconInactive() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RowIconInactive.prototype.render = function () {
        return (React.createElement("img", { src: "data:image/png;" + base64Inactive }));
    };
    return RowIconInactive;
}(React.Component));
exports.RowIconInactive = RowIconInactive;
//# sourceMappingURL=RowIcon.js.map