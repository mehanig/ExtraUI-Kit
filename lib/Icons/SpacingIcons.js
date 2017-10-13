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
var base64X = "base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAANlJREFUOBHNUTsKwkAQze5KCtGLWIiNR7GxShFyp2S3MI2Nl7ExF1FSBDbrPMjIbEBIUMGBZWbee/NLkuQvLM/zgDd1GanXU4ve6b7foCiKJa14Gk8EBm6MKwB8vzFm1/f9OYSwSdN0LcVd192VUo3W+ui9v4JzzqmFFDEBDAWSQ4zGUgMsakC5p2dA0LQHPBsVr4b4pUEeNaATtnTCBZOstdEJOHM44UBb3Lhx9BfKsmxItCeyZoHwNThoBBZvAKKqqpZchlgafbBM5hxHGzA4x3/cYM6w32ifLXNTyIi5ZJcAAAAASUVORK5CYII=";
var base64Y = "base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAL9JREFUOBFjYKAQMML0p6Sk/IexiaHnzJkD1stEjGJ8auAuQFeUnp6u9ffv30tAcWYgMJg5c+ZFdDUgPlYXpKWlcf379281SDNIEZC9DCQGYqMDrAYANUz7//+/FkwxiA0Sg/GRaZxeAClKTU39DNTMw8bGxjtt2rQvyBphbKwugEkSQw+8AVjDAJioFgCdH4/mhYXAxJOAJoY9GpmYmLIYGRmvwRSD2CAxGB+ZxuoCkAJiExLcgAHLC8jeIYsNADgQPtdoptiPAAAAAElFTkSuQmCC";
var SpacingX = (function (_super) {
    __extends(SpacingX, _super);
    function SpacingX() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpacingX.prototype.render = function () {
        return (React.createElement("img", { src: "data:image/png;" + base64X }));
    };
    return SpacingX;
}(React.Component));
exports.SpacingX = SpacingX;
var SpacingY = (function (_super) {
    __extends(SpacingY, _super);
    function SpacingY() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpacingY.prototype.render = function () {
        return (React.createElement("img", { style: { minWidth: "12px" }, src: "data:image/png;" + base64Y }));
    };
    return SpacingY;
}(React.Component));
exports.SpacingY = SpacingY;
//# sourceMappingURL=SpacingIcons.js.map