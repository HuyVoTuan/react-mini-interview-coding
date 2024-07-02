import "../../index.css";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const lights = [
  { id: 1, color: "red", duration: 4000 },
  { id: 2, color: "yellow", duration: 500 },
  { id: 3, color: "green", duration: 3000 },
];

function Light({ id, currentLight }) {
  const isActive = id === currentLight?.id;

  return (
    <>
      <span
        className={`light-circle ${
          isActive ? `light-circle__${currentLight.color}` : ""
        }`}
      ></span>
    </>
  );
}

export default function TrafficLight() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        if (prevIndex + 1 === lights.length) {
          return 0;
        }
        return prevIndex + 1;
      });
    }, lights[index].duration);

    // Clear interval when interval is done triggered
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="light-box">
      {lights.map((l) => {
        return <Light key={l.id} id={l.id} currentLight={lights[index]} />;
      })}
    </div>
  );
}

Light.propTypes = {
  id: PropTypes.number.isRequired,
  currentLight: PropTypes.shape({
    id: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
  }),
};
