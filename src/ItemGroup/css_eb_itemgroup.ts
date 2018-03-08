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
  "paddingLeft": "20px",
  "paddingTop": "7px",
  "paddingBottom": "7px",
  ":hover": {
    backgroundColor: "#404040",
  },
};

const ItemGroupTitle: ICSSProperties = {
  "paddingTop": "7px",
  "paddingBottom": "7px",
  ":hover": {
    backgroundColor: "#505050",
  },
}

export { ItemGroupMain, ItemMain, ItemGroupTitle };
