import * as Radium from "radium";
import * as React from "react";
import {ICSSProperties} from "../css_types";
import Icons from "../Icons/Icons";
import * as css from "./css_eb_tabmenu";
import Tab from "./Tab";

export type StringFunction = () => string;
export type StringToVoid = (f: string | number) => void;

export interface ITabMenuProps {
  /** Each containing `Tab` component should have one of this values specified as value.
   * List of available values, if `textValues` list not specified, this array will be used both for displaying
   * text at tabs and for values
   */
  values: [string],
  /** Specify if tabs should be non-clickable */
  disabled?: any,
  /** If presented, textValues will be used for displaying text at TabMenu header */
  textValues?: [string | StringFunction],
  /** Value of selected tab */
  selectedOption?: string,
  /** Title of TabMenu */
  title?: string,
  /** Function to be called after every selected tab change */
  notifyOnChange?: StringToVoid,
  /** Function to be called when clicked on every Tab */
  onClick?: any
}

export interface ITabMenuState {
  isDisabled?: boolean,
  values: [string],
  textValues: [string | StringFunction],
  title?: string | StringFunction,
  selectedOption?: string,
}

/**
 * Menu component with multiple tabs
 */
@Radium
export default class TabMenu extends React.Component<ITabMenuProps, ITabMenuState> {
  constructor(props: ITabMenuProps) {
    super();
    this.state = {
      values: props.values,
      isDisabled: !!props.disabled,
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
      const Component = tabIcon ? <Icons type={tabIcon}/> : null;
      const tabContent = tabIcon ? (
          <span>{Component}</span>
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
