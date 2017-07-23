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
var base64Active = "base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAU5JREFUOBGtk0FKw1AQhvNS0Fu4S7KQGgS9gIuAp3DTjejKg7hSuummpxCy8AIKUqWLJLveQqGJ//ecB22JRMWBl3kz8/9/5r1JXLRjTdMcdl03UbqQP6DsnFvJlfKzJEmW5IK5sBF4r67rW4EutY9DftOr1qo2TdP0RvsPal7AyA+Kz3zSubX8QuuZWHailQs38lEUPUrkHBEvUFXVnQpXVnyL4/hCrb5Y7J2Odty27VzB2PL3WZZdOzvzq7UN+VTk901y2Au7L5EnRDiO1lEs4gSygrW9uZeMCMJgwMKBy2UVFGWL3ba/0ttPw3A/WIGKH5WCcGG+MvDwWLi94xogb5U5+8oyjOqn5rFw6aA0Vs6ohhQMkxuupIOZFl/YiDkzqu9EbIxzsHDgxrrVpRJTI42Zc18n5MI3ABYO3P/5lE3x7z+Tte+dWv3V7/wJs4DO7UJM/UIAAAAASUVORK5CYII=";
var base64Inactive = "base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAXJJREFUOBGlk09Kw1AQxvsS0Zwhhe5FahHqBboQPIWbFiKYjSfICbrJooF04ymELrxABaniBQrtGao0jd/vNYE0tPhvIMmbme/73svMPNOo2WAwODPG9PM8v1KqVaTnik0UG6dp+l6lmNKJouh4uVwOBbrV45Tx6lciGz0j3/fvhf8kZwUgLxaLRxF7BSETcCb/2YKM6Wrd0dot/Kdms3mNyBGBYmdLFvHNdd2bJEleyJUWBMFFlmUPEmqzERzl7gz/rMWrgg5kz/Mu4zj+KInVbxiGJ6vVaoqIsBvlziFRMP45Y+dDZITIgQFbbNh3tKDaDQnN6scmXjcwYInDZWfbKjm2YHXCPr+CbSHwL0NgjoKO1f2pUgU7p4gTiDpWh1Z9JwIGLDi4FHGsBS1x6TOtOiRCDgxYOHAdZlvOCJICbfq87yTEyhkACweunURmW6N8KoEeIuv1eqoB2xllxXZGGY4V4oVxH/58mbYS2/dvr/MX/AbuVs+sPP8AAAAASUVORK5CYII=";
var CircleIconActive = (function (_super) {
    __extends(CircleIconActive, _super);
    function CircleIconActive() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CircleIconActive.prototype.render = function () {
        return (React.createElement("img", { src: "data:image/png;" + base64Active }));
    };
    return CircleIconActive;
}(React.Component));
exports.CircleIconActive = CircleIconActive;
var CircleIconInactive = (function (_super) {
    __extends(CircleIconInactive, _super);
    function CircleIconInactive() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CircleIconInactive.prototype.render = function () {
        return (React.createElement("img", { src: "data:image/png;" + base64Inactive }));
    };
    return CircleIconInactive;
}(React.Component));
exports.CircleIconInactive = CircleIconInactive;
//# sourceMappingURL=CircleIcon.js.map