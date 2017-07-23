import {CONST as C} from "../css_const";
import {ICSSProperties} from "../css_types";

const TabMenuBase: ICSSProperties = {
  display: "flex",
  flexDirection: "column",
  fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
  border: 0,
  padding: "2px 2px",
  outline: "none",
  userSelect: "none",
  listStyle: "none",
  overflow: "hidden",
  fontSize: C.FontSize,
  color: C.TextColor,
  boxSizing: 'border-box'
};

const tabsStyle: ICSSProperties = {
  alignSelf: "flex-start",
  display: "flex",
  flexDirection: "row",
  alignItems: "baseline",
  overflow: "hidden",
};

const tabBase: ICSSProperties = {
  padding: "6px 5px 3px 5px",
  margin: "auto 5px 3px 5px",
  cursor: "pointer",
};

const selectedTab: ICSSProperties = {
  borderBottom: `2px solid ${C.UnderlineColor}`,
};

const notSelectedTab: ICSSProperties = {

};

export { TabMenuBase, selectedTab, notSelectedTab, tabsStyle, tabBase };
