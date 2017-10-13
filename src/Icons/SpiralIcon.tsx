import * as React from "react";

const base64 = "base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAcNJREFUOBHFkr1KA1EQhZPNJqRQH8CoD6CIhbZWC4KPoFjpJgFjqSIWIZBKBBtJID82IlgrgiCIWtrZ2CmIkZhGGy3yR9bvLLshGK0svDB77p6ZM3fmzg0E/nsFfyvAtu1ZfBvBYHAGHMTusYNisViGc9i768cEiLcJyjqOY/iBPXgZiUSW8vl8TVxfgE72xG1wyzCMYRmxi/y/gFaz2TwiuXu4qSzf1oZOJjhdKpV2enzHqVTqAvEdfiuRSNj4Sn0VIFTPAfDQF8fj8Qo2n8vl3hBvevyK0MTxATlAX4P09emLOp1OyN/jHyFhkf/RaDR6U6/X5ZrQRy08Y+PtdlvELXaNLUjAfSTof4pkUIFuQv2Q1J2Eer3wCLckeJX4Ds6DFcRn8rPclhqNht/io0iDQM21A9rJZNIql8u66Sm4Y+zVs51YLJbOZDK6s3UJ4U9c1Id72CfBGttaKBRaKhQKl+J7l8TVajVLRXojT+FweFJ35s6SkYRxnCOwMIcAVXVgmuY9dzDUarWm8Wu8ep0OnMWLvNIB3ZeoJATswa2CKrVv6WRs2RcroJvAj6adCYJskszBjXn8A3hK2bu9o/Y1f8IvEgTG09A9TxkAAAAASUVORK5CYII=";
class SpiralIcon extends React.Component<{}, {}> {
  public render() {
    return (
      <img src={"data:image/png;" + base64}/>
    );
  }
}

export { SpiralIcon };
