import * as React from "react";

const base64Active = "base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAXNJREFUOBGlk7FKxEAQhm+XkM4XuMLGSgVbrYNY6CvYXRIQrXyCewLbK7LXXeELiHDI1V4rWNocJL6DhMT/C9kzd0g4cWAzszP/Pzs7OzGDLUmS5NgYE9d1faHQfhteyTeXz2VZ9t6lGL8Zj8dhURQPAt1oWe/vaiWptCbD4fBe+C9iDRBynufPVVXdiiyMyay1Z2EY7rGw8REDAxYOCQI+7cmRQJ8CXavMBf6OLGUv4zh+FGYmTARHvjvDnWW8kV363Dm3TZb7R5Qk0u5FiWrpEyuDhqHF7SeTBgzYlhNbGXR7IOcUvYt4LFx60DxVEAQbz0MilfskdYndFTXSbw9+fS4f3UVTwUrrqCxLmkm316L7Xq03HSNN01NV8SrXB82bE9N9Rh1Mr+mxcGmik1FJ68rNE/WSwYBtOc4y29pMxJIys74kxMC02AncZhKZbY3noTI3Q6Lhoqqpfxn6o9iIk7U4aAGHUv/9M60TkA356+/8DUlD3achTWewAAAAAElFTkSuQmCC";
class RadiusIcon extends React.Component<{}, {}> {
  public render() {
    return (
      <img src={"data:image/png;" + base64Active}/>
    );
  }
}

export { RadiusIcon };
