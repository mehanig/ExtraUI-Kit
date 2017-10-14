"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_test_renderer_1 = require("react-test-renderer");
var Button_1 = require("../Button/Button");
describe("Test Empty Button", function () {
    it("renders correctly", function () {
        var tree = react_test_renderer_1.create(<Button_1.default />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
describe("Test disabled Button", function () {
    it("renders correctly", function () {
        var tree = react_test_renderer_1.create(<Button_1.default disabled={true}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
describe("Test Button with custom text", function () {
    it("renders correctly", function () {
        var tree = react_test_renderer_1.create(<Button_1.default text="Text"/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
describe("Test Button with AE style", function () {
    it("renders correctly", function () {
        var tree = react_test_renderer_1.create(<Button_1.default text="Text" UIType={"AE"}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
