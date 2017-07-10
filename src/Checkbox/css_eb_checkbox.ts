import {ICSSProperties} from "../css_types";

const LiBase: ICSSProperties = {
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

const LiDisabled: ICSSProperties = {
  backgroundColor: "#989898",
};

const Base: ICSSProperties = {
  fontSize: 11,
  display: "flex",
  float: "left",
  flexDirection: "row",
  margin: "10px",
  color: "#fff",
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
  fontSize: 13,
  margin: "0 0 8px 2px",
  cursor: "pointer",
};

export {LiBase, LiDisabled, Base, Text, Input, InputDisabled, InputActive, Title};
