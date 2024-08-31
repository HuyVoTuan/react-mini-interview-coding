import { useState, useRef, useEffect } from "react";

export default function SkipFirstRender() {
  const hasRendered = useRef(false);
  // eslint-disable-next-line no-unused-vars
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    if (hasRendered.current) {
      console.log("useEffect called");
    }
  }, [flag]);

  const forceRender = () => {
    setFlag((prev) => !prev);
  };

  const onClickHandler = () => {
    hasRendered.current = true;
    forceRender();
  };

  return (
    <div className="App">
      <button type="button" onClick={() => onClickHandler()}>
        Submit
      </button>
    </div>
  );
}
