import {CSSProperties} from "../css_types"

const li_base: CSSProperties = {
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
  listStyle: "none"
};

const li_active : CSSProperties = {
};

const li_disabled : CSSProperties = {
  backgroundColor: "#989898"
};

const base: CSSProperties = {
  fontSize: 11,
  display: "flex",
  float: "left",
  flexDirection: "row",
  margin: "10px",
  color: "#fff",
};

const input: CSSProperties = {
  margin: "0 5px 0 0",
  cursor: "pointer",
};

const input_disabled: CSSProperties = {
  ":checked": {
    color:"#393939"
  }
};

const input_active: CSSProperties = {

};

const text: CSSProperties = {
  margin: "0 0 5px 0",
  cursor: "pointer"
};

const title: CSSProperties = {
  fontSize: 13,
  margin: "0 0 8px 2px",
  cursor: "pointer"
};

export {li_base, li_active, li_disabled, base, text, input, input_disabled, input_active, title}