import "../../index.css";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

// const lights = [
//   { id: 1, color: "red", duration: 4000 },
//   { id: 2, color: "yellow", duration: 500 },
//   { id: 3, color: "green", duration: 3000 },
// ];

const lights = {
  red: {
    id: 1,
    color: "red",
    duration: 4000,
    next: "yellow",
  },
  yellow: {
    id: 2,
    color: "yellow",
    duration: 500,
    next: "green",
  },
  green: {
    id: 3,
    color: "green",
    duration: 3000,
    next: "red",
  },
};

// function Light({ id, currentLight }) {
//   const isActive = id === currentLight?.id;

//   return (
//     <>
//       <span
//         className={`light-circle ${
//           isActive ? `light-circle__${currentLight.color}` : ""
//         }`}
//       ></span>
//     </>
//   );
// }

function Light({ color, baseColor }) {
  const isActive = color === baseColor;

  return (
    <>
      <span
        className={`light-circle ${isActive ? `light-circle__${color}` : ""}`}
      ></span>
    </>
  );
}

export default function TrafficLight() {
  // const [index, setIndex] = useState(0);
  const [color, setColor] = useState("red");

  useEffect(() => {
    // const interval = setInterval(() => {
    //   setIndex((prevIndex) => {
    //     if (prevIndex + 1 === lights.length) {
    //       return 0;
    //     }
    //     return prevIndex + 1;
    //   });
    // }, lights[index].duration);

    const item = { ...lights[color] };

    const interval = setInterval(() => {
      setColor(item.next);
    }, item.duration);

    // Clear interval when interval is done triggered
    return () => clearInterval(interval);
  }, [color]);

  return (
    <div className="light-box">
      {/* {lights.map((l) => {
        return <Light key={l.id} id={l.id} currentLight={lights[index]} />;
      })} */}

      {Object.keys(lights).map((light) => {
        return (
          // <Light
          //   key={lights[light].id}
          //   id={lights[light].id}
          //   currentLight={lights[light].color}
          // />

          <Light key={lights[light].id} baseColor={light} color={color} />
        );
      })}
    </div>
  );
}

// Light.propTypes = {
//   id: PropTypes.number.isRequired,
//   currentLight: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     color: PropTypes.string.isRequired,
//   }),
// };

Light.propTypes = {
  color: PropTypes.string.isRequired,
  baseColor: PropTypes.string.isRequired,
};
