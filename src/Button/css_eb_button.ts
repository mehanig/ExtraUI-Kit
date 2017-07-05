import {CSSProperties} from "../css_types";

const CssBase: CSSProperties = {
  fontSize: 11,
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  flexDirection: "column",
  fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
  color: "#fff",
  border: 0,
  width: "140px",
  height: "22px",
  borderRadius: "2px",
  padding: "2px 2px",
  margin: "10px",
  cursor: "pointer",
  outline: "none",
  userSelect: "none",
};

const CssActive: CSSProperties = {
  backgroundColor: "#2391FF",
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

const CssDisabled: CSSProperties = {
  backgroundColor: "#393939",
};

const CssPBase: CSSProperties = {
  margin: "auto",
};

export { CssBase, CssActive, CssDisabled, CssPBase };
