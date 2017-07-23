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
var base64Active = "base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAcdJREFUOBG9kztLA1EQhb2buCZ/IQloG1A7LQWJYKEgWAmKoORFII3YJeIKsRObQEgCKoiCjZhCC0FBLCzsfICtQpLKPjGv9ZvFLCFKtHLg7p05M+fcnbuzqq/LotHoULPZXAMOmKY5qJRq4L/iX+m6vpfJZF46KaodGIahF4vFdQhJit1tvGs3iXfdbncinU5/SM4SgKDC4fAZ+xyYiciBpmknLpfrEf+jUqn4W63WMvlV8jrYpdfrnS2Xy0lLAHKCghSJd4fDMZPNZu9FvdtCodAYIgVwD7VP+COKnofp+QGwyalTuVzutpvYGYsI8R1kp+Aa5AiBxjr6jSwETp5pky0BHpPi8OrHsvcyWjVodbNXzf/nVDAYlG9rGxe5lc/nDRv4wYlEIgHu7orUs9aZ/wtZ6iEvys6F3tgCBA1u90ISvYzTJ6hdYrW4+JwlQCBD4WQVvr7zjxrMzDhf4ZS6ftYGA/csI2x4PJ5UqVQ6B5yGWUNwn3YOmfkXsIFqtToKcQF/hTxpVeCe5tlNa5TluHg8PsDMb+PKn2jjkmsbhAoiKZ/Pt8PPVxP8W2EsFvPX6/UguQBrCIIT4hv+NT3v8tqv+LZ9AprR1zQs2kZ4AAAAAElFTkSuQmCC";
var RotateIcon = (function (_super) {
    __extends(RotateIcon, _super);
    function RotateIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RotateIcon.prototype.render = function () {
        return (React.createElement("img", { src: "data:image/png;" + base64Active }));
    };
    return RotateIcon;
}(React.Component));
exports.RotateIcon = RotateIcon;
//# sourceMappingURL=RotateIcon.js.map