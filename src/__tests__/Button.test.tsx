import * as React from "react"
import { create } from "react-test-renderer"
import { EB_Button } from "../Button/eb_button"


describe("Test Empty Button", () => {
  it("renders correctly", () => {
    const tree = create(
      <EB_Button />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

