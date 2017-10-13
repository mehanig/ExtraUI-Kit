import * as Radium from "radium";
import * as React from "react";
import {ICSSProperties} from "../css_types";
import * as css from "./css_eb_tabmenu";
import ReactChild = React.ReactChild;
import * as Icons from "../Icons/_allIcons";
import { Tab } from "./eb_tab";

export type StringFunction = () => string;
export type StringToVoid = (f: string | number) => void;

export interface ITabMenuProps {
  name: string,
  children?: React.ReactChild,
  className?: string,
  values: [string],
  disabled?: any,
  textValues?: [string | StringFunction],
  selectedOption?: string,
  title?: string,
  notifyOnChange?: StringToVoid,
  onClick?: any
}

export interface ITabMenuState {
  name: string
  isDisabled?: boolean,
  values: [string],
  textValues: [string | StringFunction],
  title?: string | StringFunction,
  selectedOption?: string,
}

class EBTabMenu extends React.Component<ITabMenuProps, ITabMenuState> {
  constructor(props: ITabMenuProps) {
    super();
    this.state = {
      values: props.values,
      isDisabled: props.disabled ? true : false,
      name: props.name,
      textValues: props.textValues ? props.textValues : props.values,
      selectedOption: props.selectedOption,
    };
    this.onTabClick = this.onTabClick.bind(this);
  }

  public render() {
    const stylesLiArr: [ICSSProperties] =
      this.state.isDisabled ? [css.TabMenuBase] : [css.TabMenuBase];
    const allTabs = React.Children.map(this.props.children, (child) => {
      const c = (child as JSX.Element);
      if (c.props && c.type === Tab) {
        return child;
      }
    });
    const tabs: JSX.Element[] = this.state.values.map((itemValue, index) => {
      const styleTab: [ICSSProperties] = this.state.selectedOption === itemValue ?
        [css.tabBase, css.selectedTab] : [css.tabBase, css.notSelectedTab];

      const tabElement = (allTabs[index] as JSX.Element);
      const tabIcon = tabElement.props.icon ? tabElement.props.icon : false;
      const Component = tabIcon ? Icons[tabIcon] : null;
      const tabContent = tabIcon ? (
          <span><Component/></span>
        ) : (
          <span>{this.state.textValues[index]}</span>
        );
      return (
        <span key={index} value={itemValue} style={styleTab} onClick={this.onTabClick}>
          {tabContent}
        </span>
      );
    });
    const selectedTabContentArr = allTabs.filter((child) => {
      const c = (child as JSX.Element);
      if (c.props && this.state.selectedOption && c.props.value === this.state.selectedOption) {
        return child;
      }
    });
    const selectedTabContent = selectedTabContentArr.length ? selectedTabContentArr[0] : null;
    const tabHeading: JSX.Element = (
      <div style={[css.tabsStyle]}>
        {tabs}
      </div>
    );
    const tabHeadingWithTitle: JSX.Element = (
      <div className="extraui-kit__tabmenu-tabWithTitleStyle" style={[css.tabWithTitleStyle]}>
        <span>{this.props.title}</span>
        {tabHeading}
      </div>
    );
    return (
      <div onClick={this.props.onClick ? this.props.onClick : null} className={this.props.onClick ? "EB_TabClickable" : ""}>
        <Radium.StyleRoot>
          <div style={stylesLiArr}>
            {this.props.title ? tabHeadingWithTitle : tabHeading}
            <div>
              {selectedTabContent}
            </div>
          </div>
        </Radium.StyleRoot>
      </div>
    );
  }

  private onTabClick(clickEvent: React.MouseEvent<HTMLSpanElement>): void {
    const safeTypeValue: string = clickEvent.currentTarget.getAttribute("value");
    this.setState({selectedOption: safeTypeValue});
    if (this.props.notifyOnChange) {
      this.props.notifyOnChange(safeTypeValue);
    }
  }
}

export { EBTabMenu };
const TabMenu = Radium(EBTabMenu);
export { TabMenu };
