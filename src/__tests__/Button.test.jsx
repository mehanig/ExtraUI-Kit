"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_test_renderer_1 = require("react-test-renderer");
var eb_button_1 = require("../Button/eb_button");
describe("Test Empty Button", function () {
    it("renders correctly", function () {
        var tree = react_test_renderer_1.create(<eb_button_1.Button />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
