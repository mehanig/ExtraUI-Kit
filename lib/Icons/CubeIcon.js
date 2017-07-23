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
var base64Active = "base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAM5JREFUOBFjZEACt2/fzvz37980JCGCTEaYCqDmpP///88BYrgYTA4fDVYM1BwD1LgQqPATExOTi4qKyllcmm7evNkAlKuHyTMBNYcCNS8AChCtmZGR8R7MAEagif9hHCLph6ysrPa/f/9+AFLPRKQmuDKgF52VlJQewgRYYAx1dXW8gQdzqaqq6l2YHhBNsguQNY9kA+7fv68ACwuSAxGk+devXwdABgATVCnJBkA1ywM116qpqfWQkxJBNrcANdeCXEGyC4Cae2CaQQYAANvrTu4DTkOuAAAAAElFTkSuQmCC";
var base64Inactive = "base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAM1JREFUOBFjZEACaWlpmf/+/ZuGJESQyQhTkZqamvT///85QD5cDCaHjwYrTk9PjwHavBBowCegYpc5c+acxaUJ6MoGoNp6mDwTUCD079+/C0jUfA9mAGNKSsp/GIdI+iE7O7v9z58/H4DUMxGpCa6MiYnJeerUqQ9hAiwwBtDfeAMP5tJZs2bdhekB0SS7AFnzSDYgIyNDARYWJAciSPOfP38OgAxgZGQsJdkAqGZ5oOba2bNn95CTEkE2twA114JcQbILgJp7YJpBBgAABsxTwprhNZUAAAAASUVORK5CYII=";
var CubeIconActive = (function (_super) {
    __extends(CubeIconActive, _super);
    function CubeIconActive() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CubeIconActive.prototype.render = function () {
        return (React.createElement("img", { src: "data:image/png;" + base64Active }));
    };
    return CubeIconActive;
}(React.Component));
exports.CubeIconActive = CubeIconActive;
var CubeIconInactive = (function (_super) {
    __extends(CubeIconInactive, _super);
    function CubeIconInactive() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CubeIconInactive.prototype.render = function () {
        return (React.createElement("img", { src: "data:image/png;" + base64Inactive }));
    };
    return CubeIconInactive;
}(React.Component));
exports.CubeIconInactive = CubeIconInactive;
//# sourceMappingURL=CubeIcon.js.map