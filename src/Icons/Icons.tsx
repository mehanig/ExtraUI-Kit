import * as React from "react";
import { AngleIcon } from "./AngleIcon";
import { CircleIconActive, CircleIconInactive } from "./CircleIcon";
import { ColumnIconActive, ColumnIconInactive } from "./ColumnIcon";
import { CubeIconActive, CubeIconInactive } from "./CubeIcon";
import { DimensionsIcon } from "./DimensionsIcon";
import { RadiusIcon } from "./RadiusIcon";
import { RotateIcon } from "./RotateIcon";
import { RotationsLActive, RotationsLInactive, RotationsRActive, RotationsRInactive} from "./Rotations";
import { RowIconActive, RowIconInactive } from "./RowIcon";
import { SpacingX, SpacingY} from "./SpacingIcons";
import { SpiralIcon } from "./SpiralIcon";
import { SquareIconActive, SquareIconInactive } from "./SquareIcon";

const ICON_MAPPING = {
  AngleIcon,
  ColumnIconActive,
  ColumnIconInactive,
  CircleIconActive,
  CircleIconInactive,
  CubeIconActive,
  CubeIconInactive,
  DimensionsIcon,
  RadiusIcon,
  RotateIcon,
  RotationsRActive,
  RotationsRInactive,
  RotationsLActive,
  RotationsLInactive,
  RowIconActive,
  RowIconInactive,
  SpacingX,
  SpacingY,
  SpiralIcon,
  SquareIconActive,
  SquareIconInactive,
};

export interface IIconsProps {
  /** Name of Icon, all available names listed in documentation */
  type: string
}

/**
 * Icon component
 */
export default class Icons extends React.Component<IIconsProps, {}> {
  public render() {
    const Component = ICON_MAPPING[this.props.type];
    return <Component/>;
  }
}
