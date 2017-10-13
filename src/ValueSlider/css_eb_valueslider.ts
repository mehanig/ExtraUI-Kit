import {CONST as C} from "../css_const";
import {ICSSProperties} from "../css_types";

const MainBase: ICSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
  alignItems: "center",
  fontFamily: "HelveticaNeue, Helvetica Neue, HelveticaNeueRoman, HelveticaNeue-Roman, Helvetica Neue Roman, TeXGyreHerosRegular, Helvetica, Tahoma, Geneva, Arial",
  height: "20px",
  color: C.TextColor,
  fontSize: C.FontSize,
  padding: "2px 2px",
  outline: "none",
  userSelect: "none",
  listStyle: "none",
  margin: "10px",
  boxSizing: "border-box",
};

const Title: ICSSProperties = {
  cursor: "pointer",
};

const Draggable: ICSSProperties = {
  "color": "#2391FF",
  ":hover": {
    color: "#0088FF",
  },
  "cursor": "pointer",
  "marginLeft": "auto",
  "padding": "3px 12px 3px 12px",
  "background": C.Darken20,
  "minWidth": "40px",
  "maxWidth": "40px",
  "boxSizing": "border-box",
};

const InputField: ICSSProperties = {
  width: "30px",
};

export {MainBase, Title, Draggable, InputField};
