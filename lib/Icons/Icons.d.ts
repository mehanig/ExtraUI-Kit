import * as React from "react";
import { AngleIcon } from "./AngleIcon";
import { CircleIconActive, CircleIconInactive } from "./CircleIcon";
import { ColumnIconActive, ColumnIconInactive } from "./ColumnIcon";
import { CubeIconActive, CubeIconInactive } from "./CubeIcon";
import { DimensionsIcon } from "./DimensionsIcon";
import { RadiusIcon } from "./RadiusIcon";
import { RotateIcon } from "./RotateIcon";
import { RotationsLActive, RotationsLInactive, RotationsRActive, RotationsRInactive } from "./Rotations";
import { RowIconActive, RowIconInactive } from "./RowIcon";
import { SpacingX, SpacingY } from "./SpacingIcons";
import { SpiralIcon } from "./SpiralIcon";
import { SquareIconActive, SquareIconInactive } from "./SquareIcon";
export interface IIconsProps {
    type: string;
}
export default class Icons extends React.Component<IIconsProps, {}> {
    ICON_MAPPING: {
        AngleIcon: typeof AngleIcon;
        ColumnIconActive: typeof ColumnIconActive;
        ColumnIconInactive: typeof ColumnIconInactive;
        CircleIconActive: typeof CircleIconActive;
        CircleIconInactive: typeof CircleIconInactive;
        CubeIconActive: typeof CubeIconActive;
        CubeIconInactive: typeof CubeIconInactive;
        DimensionsIcon: typeof DimensionsIcon;
        RadiusIcon: typeof RadiusIcon;
        RotateIcon: typeof RotateIcon;
        RotationsRActive: typeof RotationsRActive;
        RotationsRInactive: typeof RotationsRInactive;
        RotationsLActive: typeof RotationsLActive;
        RotationsLInactive: typeof RotationsLInactive;
        RowIconActive: typeof RowIconActive;
        RowIconInactive: typeof RowIconInactive;
        SpacingX: typeof SpacingX;
        SpacingY: typeof SpacingY;
        SpiralIcon: typeof SpiralIcon;
        SquareIconActive: typeof SquareIconActive;
        SquareIconInactive: typeof SquareIconInactive;
    };
    render(): JSX.Element;
}
