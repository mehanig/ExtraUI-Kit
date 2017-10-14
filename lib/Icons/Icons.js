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
var AngleIcon_1 = require("./AngleIcon");
var CircleIcon_1 = require("./CircleIcon");
var ColumnIcon_1 = require("./ColumnIcon");
var CubeIcon_1 = require("./CubeIcon");
var DimensionsIcon_1 = require("./DimensionsIcon");
var RadiusIcon_1 = require("./RadiusIcon");
var RotateIcon_1 = require("./RotateIcon");
var Rotations_1 = require("./Rotations");
var RowIcon_1 = require("./RowIcon");
var SpacingIcons_1 = require("./SpacingIcons");
var SpiralIcon_1 = require("./SpiralIcon");
var SquareIcon_1 = require("./SquareIcon");
var ICON_MAPPING = {
    AngleIcon: AngleIcon_1.AngleIcon,
    ColumnIconActive: ColumnIcon_1.ColumnIconActive,
    ColumnIconInactive: ColumnIcon_1.ColumnIconInactive,
    CircleIconActive: CircleIcon_1.CircleIconActive,
    CircleIconInactive: CircleIcon_1.CircleIconInactive,
    CubeIconActive: CubeIcon_1.CubeIconActive,
    CubeIconInactive: CubeIcon_1.CubeIconInactive,
    DimensionsIcon: DimensionsIcon_1.DimensionsIcon,
    RadiusIcon: RadiusIcon_1.RadiusIcon,
    RotateIcon: RotateIcon_1.RotateIcon,
    RotationsRActive: Rotations_1.RotationsRActive,
    RotationsRInactive: Rotations_1.RotationsRInactive,
    RotationsLActive: Rotations_1.RotationsLActive,
    RotationsLInactive: Rotations_1.RotationsLInactive,
    RowIconActive: RowIcon_1.RowIconActive,
    RowIconInactive: RowIcon_1.RowIconInactive,
    SpacingX: SpacingIcons_1.SpacingX,
    SpacingY: SpacingIcons_1.SpacingY,
    SpiralIcon: SpiralIcon_1.SpiralIcon,
    SquareIconActive: SquareIcon_1.SquareIconActive,
    SquareIconInactive: SquareIcon_1.SquareIconInactive,
};
var Icons = (function (_super) {
    __extends(Icons, _super);
    function Icons() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Icons.prototype.render = function () {
        var Component = ICON_MAPPING[this.props.type];
        return React.createElement(Component, null);
    };
    return Icons;
}(React.Component));
exports.default = Icons;
//# sourceMappingURL=Icons.js.map