// import React from "react";
import PropTypes from "prop-types";

export default function Counter({ text, count }) {
  console.log(`Rendering Counter with: ${text} and ${count}`);
  return (
    <div>
      {text} - {count}
    </div>
  );
}

// HOC
/* 
  export const MemoizedCounter = React.memo(Counter, (prevProps, nextProps) => {
    return prevProps.count === nextProps.count && prevProps.text === nextProps.text;
  }); 
*/

Counter.propTypes = {
  text: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};
