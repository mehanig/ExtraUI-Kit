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
var base64 = "base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAcNJREFUOBHFkr1KA1EQhZPNJqRQH8CoD6CIhbZWC4KPoFjpJgFjqSIWIZBKBBtJID82IlgrgiCIWtrZ2CmIkZhGGy3yR9bvLLshGK0svDB77p6ZM3fmzg0E/nsFfyvAtu1ZfBvBYHAGHMTusYNisViGc9i768cEiLcJyjqOY/iBPXgZiUSW8vl8TVxfgE72xG1wyzCMYRmxi/y/gFaz2TwiuXu4qSzf1oZOJjhdKpV2enzHqVTqAvEdfiuRSNj4Sn0VIFTPAfDQF8fj8Qo2n8vl3hBvevyK0MTxATlAX4P09emLOp1OyN/jHyFhkf/RaDR6U6/X5ZrQRy08Y+PtdlvELXaNLUjAfSTof4pkUIFuQv2Q1J2Eer3wCLckeJX4Ds6DFcRn8rPclhqNht/io0iDQM21A9rJZNIql8u66Sm4Y+zVs51YLJbOZDK6s3UJ4U9c1Id72CfBGttaKBRaKhQKl+J7l8TVajVLRXojT+FweFJ35s6SkYRxnCOwMIcAVXVgmuY9dzDUarWm8Wu8ep0OnMWLvNIB3ZeoJATswa2CKrVv6WRs2RcroJvAj6adCYJskszBjXn8A3hK2bu9o/Y1f8IvEgTG09A9TxkAAAAASUVORK5CYII=";
var SpiralIcon = (function (_super) {
    __extends(SpiralIcon, _super);
    function SpiralIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpiralIcon.prototype.render = function () {
        return (React.createElement("img", { src: "data:image/png;" + base64 }));
    };
    return SpiralIcon;
}(React.Component));
exports.SpiralIcon = SpiralIcon;
//# sourceMappingURL=SpiralIcon.js.map