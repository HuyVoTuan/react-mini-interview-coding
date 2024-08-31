// import React from "react";
import PropTypes from "prop-types";

export default function Button({ onClick, children }) {
  console.log(`Rendering button - `, children);
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
}

// HOC
/* 
  export const MemoizedButton = React.memo(Button, (prevProps, nextProps) => {
    return prevProps.children === nextProps.children;
  });
*/

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
