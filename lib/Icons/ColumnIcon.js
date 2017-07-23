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
var base64Active = "base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAQCAYAAAAmlE46AAAAJ0lEQVQokWPcvn37fwYGBgZPT09GBgYGBmL5TAxkglGNoxpHNeICAJ42D0TrQ9tWAAAAAElFTkSuQmCC";
var base64Inactive = "base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAAAKklEQVQ4EWNgAIKUlJT/IAxigwApfCaIFvLJUQMYGEbDYDQMQDlo4NMBAH+MEXfKFE50AAAAAElFTkSuQmCC";
var ColumnIconActive = (function (_super) {
    __extends(ColumnIconActive, _super);
    function ColumnIconActive() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColumnIconActive.prototype.render = function () {
        return (React.createElement("img", { src: "data:image/png;" + base64Active }));
    };
    return ColumnIconActive;
}(React.Component));
exports.ColumnIconActive = ColumnIconActive;
var ColumnIconInactive = (function (_super) {
    __extends(ColumnIconInactive, _super);
    function ColumnIconInactive() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColumnIconInactive.prototype.render = function () {
        return (React.createElement("img", { src: "data:image/png;" + base64Inactive }));
    };
    return ColumnIconInactive;
}(React.Component));
exports.ColumnIconInactive = ColumnIconInactive;
//# sourceMappingURL=ColumnIcon.js.map