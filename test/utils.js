import checkPropTypes from "check-prop-types";

/**
 * Returns node(s) with given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme shallowWrapper
 * @param {String} val - Value of data-test attribute to search.
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};

export const checkProps = (component, conformingProps) => {
  return checkPropTypes(component.propTypes, conformingProps, "prop", component.name);
};
