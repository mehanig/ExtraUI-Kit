import * as React from "react";
import { create } from "react-test-renderer";
import Button from "../Button/Button";

describe("Test Empty Button", () => {
  it("renders correctly", () => {
    const tree = create(
      <Button />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Test disabled Button", () => {
    it("renders correctly", () => {
        const tree = create(
            <Button disabled={true}/>,
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe("Test Button with custom text", () => {
    it("renders correctly", () => {
        const tree = create(
            <Button text="Text"/>,
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe("Test Button with AE style", () => {
    it("renders correctly", () => {
        const tree = create(
            <Button
                text="Text"
                UIType={"AE"}
            />,
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
