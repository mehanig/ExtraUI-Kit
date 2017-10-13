import * as React from "react";

const base64X = "base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAANlJREFUOBHNUTsKwkAQze5KCtGLWIiNR7GxShFyp2S3MI2Nl7ExF1FSBDbrPMjIbEBIUMGBZWbee/NLkuQvLM/zgDd1GanXU4ve6b7foCiKJa14Gk8EBm6MKwB8vzFm1/f9OYSwSdN0LcVd192VUo3W+ui9v4JzzqmFFDEBDAWSQ4zGUgMsakC5p2dA0LQHPBsVr4b4pUEeNaATtnTCBZOstdEJOHM44UBb3Lhx9BfKsmxItCeyZoHwNThoBBZvAKKqqpZchlgafbBM5hxHGzA4x3/cYM6w32ifLXNTyIi5ZJcAAAAASUVORK5CYII=";
const base64Y = "base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAL9JREFUOBFjYKAQMML0p6Sk/IexiaHnzJkD1stEjGJ8auAuQFeUnp6u9ffv30tAcWYgMJg5c+ZFdDUgPlYXpKWlcf379281SDNIEZC9DCQGYqMDrAYANUz7//+/FkwxiA0Sg/GRaZxeAClKTU39DNTMw8bGxjtt2rQvyBphbKwugEkSQw+8AVjDAJioFgCdH4/mhYXAxJOAJoY9GpmYmLIYGRmvwRSD2CAxGB+ZxuoCkAJiExLcgAHLC8jeIYsNADgQPtdoptiPAAAAAElFTkSuQmCC";

class SpacingX extends React.Component<{}, {}> {
  public render() {
    return (
      <img src={"data:image/png;" + base64X}/>
    );
  }
}

class SpacingY extends React.Component<{}, {}> {
  public render() {
    return (
      <img style={{minWidth: "12px"}} src={"data:image/png;" + base64Y}/>
    );
  }
}

export { SpacingX, SpacingY };
