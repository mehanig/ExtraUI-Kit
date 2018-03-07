```jsx

  class ExampleItemGroup extends React.Component {
    constructor() {
      super();
      this.state = {
        display: true
      };
      this.handleClick = this.handleClick.bind(this);
    }

    render() {
      const { selectedKey } = this.state;
      return (
        <ItemGroup
          title="My Group"
          onTitleClick={this.handleClick}
          filterContent={this.state.display}
          items={[<Item>Item 1</Item>, <Item>Item 2</Item>, <Item>Item 3</Item>]}
        ></ItemGroup>
      );
    }

    handleClick() {
      this.setState({...this.state, display: !this.state.display});
    }
  }
  
  <ExampleItemGroup/>
```