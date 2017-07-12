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
  color: "white",
  cursor: "pointer",
};

const tabsStyle: ICSSProperties = {
  alignSelf: "flex-start",
  display: "flex",
  flexDirection: "row",
  alignItems: "baseline",
  overflow: "hidden",
};

const tabBase: ICSSProperties = {
  padding: "6px 10px",
};

const selectedTab: ICSSProperties = {

};

const notSelectedTab: ICSSProperties = {

};

export { TabMenuBase, selectedTab, notSelectedTab, tabsStyle, tabBase };
