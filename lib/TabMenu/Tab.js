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
var Tab = (function (_super) {
    __extends(Tab, _super);
    function Tab(props) {
        return _super.call(this) || this;
    }
    Tab.prototype.render = function () {
        return (React.createElement("div", null, this.props.children));
    };
    return Tab;
}(React.Component));
exports.default = Tab;
//# sourceMappingURL=Tab.js.map