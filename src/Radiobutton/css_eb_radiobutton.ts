import {CSSProperties} from "../css_types";

const Li_base: CSSProperties = {
  display: "flex",
  justifyContent: "flex-start",
  flexDirection: "row",
  alignItems: "center",
  fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
  border: 0,
  height: "20px",
  padding: "2px 2px",
  outline: "none",
  userSelect: "none",
  listStyle: "none",
};

const Li_active: CSSProperties = {
};

const Li_disabled: CSSProperties = {
  backgroundColor: "#989898",
};

const Ul_base: CSSProperties = {
  fontSize: 11,
  display: "flex",
  float: "left",
  flexDirection: "column",
  margin: "10px",
  color: "#fff",
};

const Input: CSSProperties = {
  margin: "0 5px 0 0",
  cursor: "pointer",
};

const Input_disabled: CSSProperties = {
  ":checked": {
    color:"#393939",
  },
};

const Input_active: CSSProperties = {
};

const Text: CSSProperties = {
  margin: "0 0 5px 0",
  cursor: "pointer",
};

const Title: CSSProperties = {
  fontSize: 13,
  margin: "0 0 8px 2px",
  cursor: "pointer",
};

export {Li_base, Li_active, Li_disabled, Ul_base, Text, Input, Input_disabled, Input_active, Title};