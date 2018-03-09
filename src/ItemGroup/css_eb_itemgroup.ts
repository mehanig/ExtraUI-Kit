import {CONST as C} from "../css_const";
import {ICSSProperties} from "../css_types";

const ItemGroupMain: ICSSProperties = {
  cursor: "pointer",
  fontFamily: "HelveticaNeue, Helvetica Neue, HelveticaNeueRoman, HelveticaNeue-Roman, Helvetica Neue Roman, TeXGyreHerosRegular, Helvetica, Tahoma, Geneva, Arial",
  border: 0,
  outline: "none",
  userSelect: "none",
  listStyle: "none",
  overflow: "hidden",
  fontSize: C.FontSize,
  color: C.TextColor,
  boxSizing: "border-box",
};

const ItemMain: ICSSProperties = {
  "paddingLeft": "34px",
  "paddingTop": "7px",
  "paddingBottom": "7px",
  ":hover": {
    backgroundColor: "#404040",
  },
  "borderBottom": "1px solid #1f1f1f",
  "position": "relative",
};

const ItemMainIcon: ICSSProperties = {
  position: "absolute",
  left: "22px",
};

const ItemGroupTitle: ICSSProperties = {
  "paddingTop": "7px",
  "paddingBottom": "7px",
  ":hover": {
    backgroundColor: "#505050",
  },
  "borderBottom": "1px solid #1f1f1f",
};

const ItemGroupTitleIcon: ICSSProperties = {
  paddingLeft: "5px",
  paddingRight: "5px",
};

export { ItemGroupMain, ItemMain, ItemMainIcon, ItemGroupTitle, ItemGroupTitleIcon};
