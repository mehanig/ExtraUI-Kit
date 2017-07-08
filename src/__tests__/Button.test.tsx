import * as React from "react";
import { create } from "react-test-renderer";
import { Button } from "../Button/eb_button";

describe("Test Empty Button", () => {
  it("renders correctly", () => {
    const tree = create(
      <Button />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
