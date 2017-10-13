import * as React from "react";

const base64Active = "base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAARBJREFUOBFjYCABpKam2qMrZ0YXwMUHau79////TBMTk09nz549AVPHBGPgo6Gai4BqfjEyMt5BVsuIzMHGRtbMzMwcMnPmzM3I6vAaQEgzyCCcXkDS/B9ocxa6zTBXYHUBTDPQv/+AAccEpG9wcHAYTJ48+SdMI4zGcAFMM1ABKMAigPQVoCEaP378KIdpQqZRDEDWDAqwWbNmrQYakg7U8B+IKwoKCgSQNYPYcAPQNcP8PHv27GNAQ3YDXcH55cuXYKwG4NIMUww0YBmU7Q8Tg9GMKSkpXUBOKRD/YmFhieXj49sOk4TRQP+rffv27QyQf0tISMgEJg6iQQaA/Ec2YAHq/Ax0IgPQj2QbMrAaAfP8g9jKZksbAAAAAElFTkSuQmCC";
class AngleIcon extends React.Component<{}, {}> {
  public render() {
    return (
      <img src={"data:image/png;" + base64Active}/>
    );
  }
}

export { AngleIcon };
