import * as React from "react";

const base64Active = "base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAOCAYAAAAmL5yKAAAAIElEQVQokWO8cOHCfwYKABMlmgcHYBwNg9EwYBgMYQAA3esNyX25hI0AAAAASUVORK5CYII=";
const base64Inactive = "base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAOCAYAAAAmL5yKAAAAH0lEQVQokWPMzMz8z0ABYKJE8+AAjKNhMBoGDIMhDAAYbAj1EJ3h2AAAAABJRU5ErkJggg==";

class RowIconActive extends React.Component<{}, {}> {
  public render() {
    return (
      <img src={"data:image/png;" + base64Active}/>
    );
  }
}

class RowIconInactive extends React.Component<{}, {}> {
  public render() {
    return (
      <img src={"data:image/png;" + base64Inactive}/>
    );
  }
}

export { RowIconActive, RowIconInactive };
