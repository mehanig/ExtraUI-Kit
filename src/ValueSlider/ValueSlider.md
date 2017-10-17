ValueSlider example:

```jsx
<ValueSlider
    title="Slider Example: Drag or double click"
    maxValue={1000}
    minValue={1}
    currentValue={50}
    sizeH={200}
    icon="AngleIcon"
/>
```


```jsx
<ValueSlider
    title="This slider icon is also clickable"
    maxValue={1000}
    minValue={1}
    currentValue={50}
    sizeH={200}
    icon="AngleIcon"
    iconClick={() => {alert('Hey')}}
/>