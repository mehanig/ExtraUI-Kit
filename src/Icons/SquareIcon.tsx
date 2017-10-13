import * as React from "react";

const base64Active = "base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAEdJREFUOBFjYKAQMIL037x58z855qirqzMykaMRWQ8LMgdkIjIfFxvZxRS7YNQABobRMGBgQEmJyCkMVypEF6c4ENENJJkPADnFC6q8NmXQAAAAAElFTkSuQmCC";
const base64Inactive = "base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAEdJREFUOBFjYKAQMIL0p6Sk/CfHnDlz5jAykaMRWQ8LMgdkIjIfFxvZxRS7YNQABobRMGBgQEmJyCkMVypEF6c4ENENJJkPACubCkuDsgijAAAAAElFTkSuQmCC";

class SquareIconActive extends React.Component<{}, {}> {
  public render() {
    return (
      <img src={"data:image/png;" + base64Active}/>
    );
  }
}

class SquareIconInactive extends React.Component<{}, {}> {
  public render() {
    return (
      <img src={"data:image/png;" + base64Inactive}/>
    );
  }
}

export { SquareIconActive, SquareIconInactive };
