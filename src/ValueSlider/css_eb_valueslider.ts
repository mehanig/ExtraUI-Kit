import {CSSProperties} from "../css_types";

const Main_base: CSSProperties = {
  display: "flex",
  justifyContent: "flex-start",
  flexDirection: "row",
  alignItems: "center",
  fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
  borderBottom: "1px solid black",
  height: "20px",
  color: "#fff",
  fontSize: 11,
  padding: "2px 2px",
  outline: "none",
  userSelect: "none",
  listStyle: "none",
  margin: "10px",
};

const Main_disabled: CSSProperties = {
};

const Main_active: CSSProperties = {

};

const Title: CSSProperties = {
  cursor: "pointer",
};

const Draggable: CSSProperties = {
  color: "#2391FF",
  ":hover": {
    color: "#0088FF",
  },
  cursor: "pointer",
  marginLeft: "auto",
};

const Li_disabled : CSSProperties = {
  backgroundColor: "#989898",
};

const Main_base2: CSSProperties = {
  fontSize: 11,
  display: "flex",
  float: "left",
  flexDirection: "column",
  margin: "10px",
  color: "#fff",
};

const Input_field: CSSProperties = {
  width: "50px",
};




export {Main_base, Main_disabled, Main_active, Title, Draggable, Input_field};