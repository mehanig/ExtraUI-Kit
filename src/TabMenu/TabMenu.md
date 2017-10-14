TabMenu example:

```jsx
<div>
    {/* First example */}
    <TabMenu values={["Tab1", "Tab2", "Tab3"]} selectedOption="Tab1"  title="Tab example">
        <Tab value="Tab1">
            Content of first tab
        </Tab>
        <Tab value="Tab2">
            Content of second tab
        </Tab>
        <Tab value="Tab3">
            Content of third tab
        </Tab>
    </TabMenu>
    
    
    <div style={{marginBottom: "40px"}}></div>
    
    {/* Second example */}
    <TabMenu values={["Tab1", "Tab2", "Tab3"]} selectedOption="Tab1"  title="Tabs with Icons">
        <Tab value="Tab1" icon="CircleIconActive">
            Tab with CircleIconActive Icon In header
        </Tab>
        <Tab value="Tab2" icon="SquareIconActive">
            Tab with SquareIconActive Icon
        </Tab>
        <Tab value="Tab3" icon="CubeIconActive">
            Tab with CubeIconActive Icon
        </Tab>
    </TabMenu>
</div>
```