import {CONST as C} from "../css_const";
import {ICSSProperties} from "../css_types";

const LiDisabled: ICSSProperties = {
  backgroundColor: "#989898",
};

const Base: ICSSProperties = {
  display: "flex",
  float: "left",
  flexDirection: "row",
  margin: "10px",
  fontSize: 12,
  color: C.TextColor,
  border: 0,
  height: "20px",
  padding: "2px 2px",
  outline: "none",
  userSelect: "none",
  alignItems: "center",
  listStyle: "none",
  boxSizing: "border-box",
  fontFamily: "HelveticaNeue, Helvetica Neue, HelveticaNeueRoman, HelveticaNeue-Roman, Helvetica Neue Roman, TeXGyreHerosRegular, Helvetica, Tahoma, Geneva, Arial",
};

const Input: ICSSProperties = {
  margin: "0 5px 0 0",
  cursor: "pointer",
};

const InputDisabled: ICSSProperties = {
  ":checked": {
    color: "#393939",
  },
};

const InputActive: ICSSProperties = {
};

const Text: ICSSProperties = {
  margin: "0 0 5px 0",
  cursor: "pointer",
};

const Title: ICSSProperties = {
  marginLeft: "0.3em",
  cursor: "pointer",
};

export {LiDisabled, Base, Text, Input, InputDisabled, InputActive, Title};
