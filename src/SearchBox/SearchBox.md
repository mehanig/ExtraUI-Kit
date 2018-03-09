SearchBox example:

```jsx
  class ExampleSearchBoxWithItemGroup extends React.Component {
    constructor() {
      super();
      this.state = {
          displayViaFilter: true,
          isFolded: false
      };
      this.changeFilter = this.changeFilter.bind(this);
      this.changeFolding = this.changeFolding.bind(this);
    }

    render() {
      const { selectedKey } = this.state;
      return (
        <div>
          <SearchBox 
            placeholder="type to search..."
            onType={(val) => {this.setState({...this.state, displayViaFilter: val})}}
          >
          </SearchBox>
          <ItemGroup
            title="Group with folding on title"
            onTitleClick={this.changeFolding}
            isFolded={this.state.isFolded}
            filterContent={this.state.displayViaFilter}
            items={[<Item value="item1">Item 1</Item>, <Item icon="LightBulbIcon" iconOnHover="LightBulbIconActive" value="item2">Item 2</Item>, <Item value="item3">Item 3</Item>]}
          ></ItemGroup>
        </div>
      );
    }

    changeFilter() {
      this.setState({...this.state, displayViaFilter: !this.state.displayViaFilter});
    }

    changeFolding() {
      this.setState({...this.state, isFolded: !this.state.isFolded})
    }
  }


  <div>
    <br/>
    <span>Search Box can be combined with ItemGroup:</span>
    <br/>
    <br/>
    <ExampleSearchBoxWithItemGroup/>
  </div>
```