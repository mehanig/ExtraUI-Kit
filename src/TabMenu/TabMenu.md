TabMenu example:

```jsx
<div>
    <TabMenu values={["Tab1", "Tab2", "Tab3"]} selectedOption="Tab1"  title="Tab example">
        <Tab value="Tab1">
            Ti Loh
        </Tab>
        <Tab value="Tab2">
            Ti Chmo
        </Tab>
        <Tab value="Tab3">
            Ti soska
        </Tab>
    </TabMenu>
    <div style={{marginBottom: "40px"}}></div>
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