import * as React from "react";

const base64Active = "base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAACNJREFUOBFjYKAQMKakpPynxAwmSjQPDr2jYcDAMBoGwyIMANZNCLmkwvgBAAAAAElFTkSuQmCC";
class RowIcon extends React.Component<{}, {}> {
  public render() {
    return (
      <img src={"data:image/png;" + base64Active}/>
    );
  }
}

export { RowIcon }