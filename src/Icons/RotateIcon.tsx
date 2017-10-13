import * as React from "react";

const base64Active = "base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAcdJREFUOBG9kztLA1EQhb2buCZ/IQloG1A7LQWJYKEgWAmKoORFII3YJeIKsRObQEgCKoiCjZhCC0FBLCzsfICtQpLKPjGv9ZvFLCFKtHLg7p05M+fcnbuzqq/LotHoULPZXAMOmKY5qJRq4L/iX+m6vpfJZF46KaodGIahF4vFdQhJit1tvGs3iXfdbncinU5/SM4SgKDC4fAZ+xyYiciBpmknLpfrEf+jUqn4W63WMvlV8jrYpdfrnS2Xy0lLAHKCghSJd4fDMZPNZu9FvdtCodAYIgVwD7VP+COKnofp+QGwyalTuVzutpvYGYsI8R1kp+Aa5AiBxjr6jSwETp5pky0BHpPi8OrHsvcyWjVodbNXzf/nVDAYlG9rGxe5lc/nDRv4wYlEIgHu7orUs9aZ/wtZ6iEvys6F3tgCBA1u90ISvYzTJ6hdYrW4+JwlQCBD4WQVvr7zjxrMzDhf4ZS6ftYGA/csI2x4PJ5UqVQ6B5yGWUNwn3YOmfkXsIFqtToKcQF/hTxpVeCe5tlNa5TluHg8PsDMb+PKn2jjkmsbhAoiKZ/Pt8PPVxP8W2EsFvPX6/UguQBrCIIT4hv+NT3v8tqv+LZ9AprR1zQs2kZ4AAAAAElFTkSuQmCC";
class RotateIcon extends React.Component<{}, {}> {
  public render() {
    return (
      <img src={"data:image/png;" + base64Active}/>
    );
  }
}

export { RotateIcon };
