import {CONST as C} from "../css_const";
import {ICSSProperties} from "../css_types";

const CssBase: ICSSProperties = {
  fontSize: C.FontSize,
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  flexDirection: "column",
  fontFamily: "HelveticaNeue, Helvetica Neue, HelveticaNeueRoman, HelveticaNeue-Roman, Helvetica Neue Roman, TeXGyreHerosRegular, Helvetica, Tahoma, Geneva, Arial",
  color: C.TextColor,
  border: 0,
  width: "140px",
  height: "22px",
  borderRadius: "2px",
  padding: "2px 2px",
  margin: "10px",
  cursor: "pointer",
  outline: "none",
  userSelect: "none",
  boxSizing: "border-box",
};

const CssActive: ICSSProperties = {
  "backgroundColor": "#2391FF",
  ":hover": {
    backgroundColor: "#0088FF",
  },
  ":focus": {
    backgroundColor: "#0088FF",
  },
  ":active": {
    backgroundColor: "#005299",
    transform: "translateY(2px)",
  },
};

const CssDisabled: ICSSProperties = {
  backgroundColor: "#393939",
};

const CssPBase: ICSSProperties = {
  margin: "auto",
};

const AEButton: ICSSProperties = {
  fontSize: C.FontSize,
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  flexDirection: "column",
  fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
  color: C.TextColor,
  border: `1px solid ${C.UnderlineColor}`,
  width: "140px",
  height: "22px",
  borderRadius: "22px",
  padding: "2px 2px",
  margin: "10px",
  cursor: "pointer",
  outline: "none",
  userSelect: "none",
};

const AECssActive: ICSSProperties = {
  "backgroundColor": "Transparent",
  "backgroundRepeat": "no-repeat",
  "overflow": "hidden",
  ":hover": {
    backgroundColor: "#9d9d9d",
  },
  ":focus": {
    backgroundColor: "#0088FF",
  },
  ":active": {
    backgroundColor: "#005299",
    transform: "translateY(2px)",
  },
};

const AECssDisabled: ICSSProperties = {
  backgroundColor: "#393939",
};

export { CssBase, CssActive, CssDisabled, CssPBase, AEButton, AECssActive, AECssDisabled};
