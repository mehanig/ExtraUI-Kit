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
var base64Active = "base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAANRJREFUOBHtUzEOgzAMxFFZKnhAv8DOU7p3SIJE/1MpsLTvYecJ/UCrDhFK8FWEKVIDcy1ZdpI7m8RHli2mlLrAwzo1EoBN01TOuQG5EKI2xozIU4y01kfv/cBegUBEI3vddd0npYDgzrdABgE59lLIwHyv0LZtYa19ced33/dlKhk4sQUcw/4L7HhEKeUd2gkPShjhNE0lz/6JMeZ5fgqHsbiMe2TFnqFY4oo+Bvy1x82g1OsBXQFmBRaIYY08ZgGHM8b6zUrEFzNxvcIeIT24wPrHzq1yXronP9E4AAAAAElFTkSuQmCC";
var DimensionsIcon = (function (_super) {
    __extends(DimensionsIcon, _super);
    function DimensionsIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DimensionsIcon.prototype.render = function () {
        return (React.createElement("img", { src: "data:image/png;" + base64Active }));
    };
    return DimensionsIcon;
}(React.Component));
exports.DimensionsIcon = DimensionsIcon;
//# sourceMappingURL=DimensionsIcon.js.map