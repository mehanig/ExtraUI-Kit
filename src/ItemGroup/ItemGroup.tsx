import * as Radium from "radium";
import * as React from "react";
import * as css from "./css_eb_itemgroup";
import AnimateHeight from "react-animate-height";
import Item from "./Item";
import Icons from "../Icons/Icons";
import { ISearchBoxProps } from "../SearchBox/SearchBox";

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
  filterContent?: BoolFunction,
  isFolded: boolean,
  itemHeight: number,
}

@Radium
export default class ItemGroup extends React.Component<IItemGroupProps, IItemGroupState> {
  constructor(props: IItemGroupProps) {
    super(props);
    const filterContent = this.createFilter(props);
    this.state = {
      isFolded: props.isFolded,
      filterContent,
      itemHeight: 0,
    };
  }

  public render() {
    const itemsFiltered = this.props.items.filter(this.state.filterContent);
    const cells = itemsFiltered.map((item, idx) =>
      (
        <div
          key={idx}
          ref={(cellDivElement) => {
                if (cellDivElement && cellDivElement.clientHeight !== this.state.itemHeight) {
                  this.setState({...this.state, itemHeight: cellDivElement.clientHeight});
                }
              }
            }
        >
          {item}
        </div>
      ),
    );
    const Icon = this.state.isFolded ? <Icons type="TriangleArrowRight"/> : <Icons type="TriangleArrowDown"/>;
    const animatedCells = (
      <AnimateHeight
        duration={500}
        height={this.state.isFolded ? "0" : this.state.itemHeight * cells.length}
      >
        {cells}
      </AnimateHeight>
    );
    return (
      <div style={[css.ItemGroupMain]}>
        <div
          className="extraui-kit__itemGroup-title"
          style={[css.ItemGroupTitle]}
          onClick={this.props.onTitleClick}
        >
          <span className="extraui-kit__itemGroup-title-icon" style={[css.ItemGroupTitleIcon]}>
            {Icon}
          </span>
          {this.props.title ? this.props.title : null}
        </div>
        {animatedCells}
        {this.props.children}
      </div>
    );
  }

  public componentWillReceiveProps(nextProps: IItemGroupProps) {
    const filterContent = this.createFilter(nextProps);
    // Tricky place, we need to handle cases if we removed the filter (eq. cleaned SearchBox).
    // State and props are out of sync in this case
    const changeFromClick = nextProps.isFolded !== this.props.isFolded ? !this.state.isFolded : nextProps.isFolded;
    this.setState({
      ...this.state,
      isFolded: this.isFilterChanged(nextProps) ? false : changeFromClick,
      filterContent,
    });
  }

  // We unfold all the ItemGroups after filter changed
  private isFilterChanged(nextProps) {
    if (this.props.filterContent !== nextProps.filterContent) {
      return true;
    }
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
