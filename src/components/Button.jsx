import React from "react";
import PropTypes from "prop-types";

export default function Button(props) {
  
  return (
    <button className="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600">
      Delete
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.string,
};

Button.defaultProps = {
  type: "primary",
  size: "md",
};
