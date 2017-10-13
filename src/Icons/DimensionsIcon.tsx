import * as React from "react";

const base64Active = "base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAANRJREFUOBHtUzEOgzAMxFFZKnhAv8DOU7p3SIJE/1MpsLTvYecJ/UCrDhFK8FWEKVIDcy1ZdpI7m8RHli2mlLrAwzo1EoBN01TOuQG5EKI2xozIU4y01kfv/cBegUBEI3vddd0npYDgzrdABgE59lLIwHyv0LZtYa19ced33/dlKhk4sQUcw/4L7HhEKeUd2gkPShjhNE0lz/6JMeZ5fgqHsbiMe2TFnqFY4oo+Bvy1x82g1OsBXQFmBRaIYY08ZgGHM8b6zUrEFzNxvcIeIT24wPrHzq1yXronP9E4AAAAAElFTkSuQmCC";
class DimensionsIcon extends React.Component<{}, {}> {
  public render() {
    return (
      <img src={"data:image/png;" + base64Active}/>
    );
  }
}

export { DimensionsIcon };
