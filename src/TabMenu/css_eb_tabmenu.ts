import {CONST as C} from "../css_const";
import {ICSSProperties} from "../css_types";

const TabMenuBase: ICSSProperties = {
  display: "flex",
  flexDirection: "column",
  fontFamily: "HelveticaNeue, Helvetica Neue, HelveticaNeueRoman, HelveticaNeue-Roman, Helvetica Neue Roman, TeXGyreHerosRegular, Helvetica, Tahoma, Geneva, Arial",
  border: 0,
  outline: "none",
  userSelect: "none",
  listStyle: "none",
  overflow: "hidden",
  fontSize: C.FontSize,
  color: C.TextColor,
  boxSizing: "border-box",
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
  margin: "auto 5px 0px 5px",
  cursor: "pointer",
};

const selectedTab: ICSSProperties = {
  borderBottom: `2px solid ${C.UnderlineColor}`,
};

const tabWithTitleStyle: ICSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingLeft: "10px",
  background: C.Darken50,
  marginBottom: "10px",
};

const notSelectedTab: ICSSProperties = {

};

export { TabMenuBase, selectedTab, notSelectedTab, tabsStyle, tabBase, tabWithTitleStyle };
