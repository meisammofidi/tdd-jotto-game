import React from "react";
import PropTypes from 'prop-types'

/**
 * Functional react component for congratulatory message.
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component (or null if 'success' prop is false)
 */

const Congrats = ({ success }) => {
  if (!success) return <div data-test="congrats-component" />;
  return (
    <div data-test="congrats-component">
      <span data-test="congrats-message">Congratulations! You guessed the word!</span>
    </div>
  );
};

Congrats.propTypes = {
    success: PropTypes.bool.isRequired,
}

export default Congrats;
