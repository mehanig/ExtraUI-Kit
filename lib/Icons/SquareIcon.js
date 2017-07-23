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
var base64Active = "base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAEdJREFUOBFjYKAQMIL037x58z855qirqzMykaMRWQ8LMgdkIjIfFxvZxRS7YNQABobRMGBgQEmJyCkMVypEF6c4ENENJJkPADnFC6q8NmXQAAAAAElFTkSuQmCC";
var base64Inactive = "base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAEdJREFUOBFjYKAQMIL0p6Sk/CfHnDlz5jAykaMRWQ8LMgdkIjIfFxvZxRS7YNQABobRMGBgQEmJyCkMVypEF6c4ENENJJkPACubCkuDsgijAAAAAElFTkSuQmCC";
var SquareIconActive = (function (_super) {
    __extends(SquareIconActive, _super);
    function SquareIconActive() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SquareIconActive.prototype.render = function () {
        return (React.createElement("img", { src: "data:image/png;" + base64Active }));
    };
    return SquareIconActive;
}(React.Component));
exports.SquareIconActive = SquareIconActive;
var SquareIconInactive = (function (_super) {
    __extends(SquareIconInactive, _super);
    function SquareIconInactive() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SquareIconInactive.prototype.render = function () {
        return (React.createElement("img", { src: "data:image/png;" + base64Inactive }));
    };
    return SquareIconInactive;
}(React.Component));
exports.SquareIconInactive = SquareIconInactive;
//# sourceMappingURL=SquareIcon.js.map