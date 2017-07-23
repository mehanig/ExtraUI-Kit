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
var base64Active = "base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAARBJREFUOBFjYCABpKam2qMrZ0YXwMUHau79////TBMTk09nz549AVPHBGPgo6Gai4BqfjEyMt5BVsuIzMHGRtbMzMwcMnPmzM3I6vAaQEgzyCCcXkDS/B9ocxa6zTBXYHUBTDPQv/+AAccEpG9wcHAYTJ48+SdMI4zGcAFMM1ABKMAigPQVoCEaP378KIdpQqZRDEDWDAqwWbNmrQYakg7U8B+IKwoKCgSQNYPYcAPQNcP8PHv27GNAQ3YDXcH55cuXYKwG4NIMUww0YBmU7Q8Tg9GMKSkpXUBOKRD/YmFhieXj49sOk4TRQP+rffv27QyQf0tISMgEJg6iQQaA/Ec2YAHq/Ax0IgPQj2QbMrAaAfP8g9jKZksbAAAAAElFTkSuQmCC";
var AngleIcon = (function (_super) {
    __extends(AngleIcon, _super);
    function AngleIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AngleIcon.prototype.render = function () {
        return (React.createElement("img", { src: "data:image/png;" + base64Active }));
    };
    return AngleIcon;
}(React.Component));
exports.AngleIcon = AngleIcon;
//# sourceMappingURL=AngleIcon.js.map