import { ICSSProperties } from "../css_types";

const InlinedIcon: ICSSProperties = {
  position: "absolute",
  left: "5px",
};

const InputWithIconStyle: ICSSProperties = {
  paddingLeft: "20px",
  maxWidth: "100%",
  minWidth: "100%",
  width: "100%",
  boxSizing: "border-box",
  backgroundColor: "#101010",
  paddingTop: "6px",
  paddingBottom: "6px",
  caretColor: "white",
  border: "1px solid #4040cc",
  borderRadius: "2px",
  color: "white",
};

InputWithIconStyle[":focus"] = {
  border: "1px solid #4040cc",
  outline: "none",
};

const SearchBoxStyle: ICSSProperties = {
  display: "flex",
  alignItems: "center",
  position: "relative",
};

export { InlinedIcon, InputWithIconStyle, SearchBoxStyle };
