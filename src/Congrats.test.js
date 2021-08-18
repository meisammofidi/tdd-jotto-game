import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import Congrats from "./Congrats";
import { findByTestAttr, checkProps } from "../test/utils";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const defaultProps = { success: false };

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />);
};

test("should renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "congrats-component");
  expect(component.length).toBe(1);
});

test("should display non-empty message when success is true", () => {
  const wrapper = setup({ success: true });
  const component = findByTestAttr(wrapper, "congrats-message");
  expect(component.text().length).not.toBe(0);
});

test("should renders no text when 'success' prop is false", () => {
  const wrapper = setup({ success: false });
  const message = findByTestAttr(wrapper, "congrats-component");
  expect(message.text()).toBe("");
});

test("should not throw warning with expected props", () => {
  const expectedProps = { success: false };
  const propError = checkProps(Congrats, expectedProps);
  expect(propError).toBeUndefined();
});
