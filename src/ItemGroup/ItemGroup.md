<style>
  .extraStylesForExamlpes {
    border: 2px solid black;
  }
</style>

```jsx

  class ExampleItemGroup extends React.Component {
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
        <div className="extraStylesForExamlpes">
        <ItemGroup
          title="Group with folding on title"
          onTitleClick={this.changeFolding}
          isFolded={this.state.isFolded}
          items={[<Item>Item 1</Item>, <Item>Item 2</Item>, <Item>Item 3</Item>]}
        ></ItemGroup>
        <ItemGroup
          title="Group folding via Filter"
          onTitleClick={this.changeFilter}
          filterContent={this.state.displayViaFilter}
          items={[<Item>Item 1</Item>, <Item>Item 2</Item>, <Item>Item 3</Item>]}
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
  
  <ExampleItemGroup/>
```