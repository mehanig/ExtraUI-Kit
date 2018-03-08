import * as Radium from "radium";
import * as React from "react";
import * as css from "./css_eb_itemgroup";
import AnimateHeight from "react-animate-height";
import Item from "./Item";

export type AnyFunction = () => any;
export type BoolFunction = () => boolean;

export interface IItemGroupProps {
  children?: React.ReactChild,
  className?: string,
  icon?: string,
  onTitleClick?: AnyFunction,
  title?: string;
  items: Item[],
  /** Property to filter every item in a list based on item.value.
   *
   *  String : will search for all items with string value inside
   *  Boolean : will return full list or empty list
   *  Function : fill draw item baset on the result of applied function
   */
  filterContent?: string | BoolFunction | boolean,
  isFolded?: boolean
}

export interface IItemGroupState {
  filterContent?: BoolFunction
}

@Radium
export default class ItemGroup extends React.Component<IItemGroupProps, IItemGroupState> {
  constructor(props: IItemGroupProps) {
    super(props);
    const filter = this.createFilter(props);
    this.state = {
      filterContent: filter,
    };
  }

  public render() {
    const itemsFiltered = this.props.items.filter(this.state.filterContent);
    const cells = itemsFiltered.map((item, idx) =>
      (
        <div key={idx}>
          {item}
        </div>
      ),
    );
    const isFolded = this.props.hasOwnProperty("isFolded") ? this.props.isFolded : false;
    const height = isFolded ? "0" : "auto";
    return (
      <div style={[css.ItemGroupMain]}>
        <div
          className="extraui-kit__itemGroup-title"
          style={[css.ItemGroupTitle]}
          onClick={this.props.onTitleClick}
        >
          {this.props.title ? this.props.title : null}
        </div>
        <AnimateHeight
          duration={500}
          height={height}
        >
          {cells}
        </AnimateHeight>
        {this.props.children}
      </div>
    );
  }

  public componentWillReceiveProps(nextProps) {
    this.setState({
      ...this.state,
      filterContent: this.createFilter(nextProps)});
  }

  private createFilter(props) {
    let filter;
    if (!props.hasOwnProperty("filterContent")) {
      filter = () => true;
    } else {
      if (typeof props.filterContent === "string") {
        filter = (s) => {
          return s.props.value.indexOf(this.props.filterContent) !== -1;
        };
      } else if (typeof props.filterContent === "function") {
        filter = props.filterContent;
      } else if (typeof props.filterContent === "boolean") {
        filter = () => props.filterContent;
      }
    }
    return filter;
  }
}
