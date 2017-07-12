import {CONST as C} from "../css_const";
import {ICSSProperties} from "../css_types";

const MainBase: ICSSProperties = {
  display: "flex",
  justifyContent: "flex-start",
  flexDirection: "row",
  alignItems: "center",
  fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
  borderBottom: `1px solid ${C.UnderlineColor}`,
  height: "20px",
  color: C.TextColor,
  fontSize: C.FontSize,
  padding: "2px 2px",
  outline: "none",
  userSelect: "none",
  listStyle: "none",
  margin: "10px",
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
};

const InputField: ICSSProperties = {
  width: "30px",
};

export {MainBase, Title, Draggable, InputField};
