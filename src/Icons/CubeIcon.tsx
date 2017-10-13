import * as React from "react";

const base64Active = "base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAM5JREFUOBFjZEACt2/fzvz37980JCGCTEaYCqDmpP///88BYrgYTA4fDVYM1BwD1LgQqPATExOTi4qKyllcmm7evNkAlKuHyTMBNYcCNS8AChCtmZGR8R7MAEagif9hHCLph6ysrPa/f/9+AFLPRKQmuDKgF52VlJQewgRYYAx1dXW8gQdzqaqq6l2YHhBNsguQNY9kA+7fv68ACwuSAxGk+devXwdABgATVCnJBkA1ywM116qpqfWQkxJBNrcANdeCXEGyC4Cae2CaQQYAANvrTu4DTkOuAAAAAElFTkSuQmCC";
const base64Inactive = "base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAM1JREFUOBFjZEACaWlpmf/+/ZuGJESQyQhTkZqamvT///85QD5cDCaHjwYrTk9PjwHavBBowCegYpc5c+acxaUJ6MoGoNp6mDwTUCD079+/C0jUfA9mAGNKSsp/GIdI+iE7O7v9z58/H4DUMxGpCa6MiYnJeerUqQ9hAiwwBtDfeAMP5tJZs2bdhekB0SS7AFnzSDYgIyNDARYWJAciSPOfP38OgAxgZGQsJdkAqGZ5oOba2bNn95CTEkE2twA114JcQbILgJp7YJpBBgAABsxTwprhNZUAAAAASUVORK5CYII=";

class CubeIconActive extends React.Component<{}, {}> {
  public render() {
    return (
      <img src={"data:image/png;" + base64Active}/>
    );
  }
}

class CubeIconInactive extends React.Component<{}, {}> {
  public render() {
    return (
      <img src={"data:image/png;" + base64Inactive}/>
    );
  }
}

export { CubeIconActive, CubeIconInactive };
