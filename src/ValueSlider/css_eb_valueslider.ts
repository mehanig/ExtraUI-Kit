import {ICSSProperties} from "../css_types";

const MainBase: ICSSProperties = {
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

const MainDisabled: ICSSProperties = {
};

const MainActive: ICSSProperties = {

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
  width: "50px",
};

export {MainBase, MainDisabled, MainActive, Title, Draggable, InputField};
