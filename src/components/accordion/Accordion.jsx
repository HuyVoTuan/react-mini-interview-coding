import { useState } from "react";
import PropTypes from "prop-types";

const accordions = [
  {
    id: 1,
    title: "Construction",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, quisquam.",
  },
  {
    id: 2,
    title: "Internal Gain",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, quisquam.",
  },
  {
    id: 3,
    title: "Air Flow",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, quisquam.",
  },
  {
    id: 4,
    title: "Heating and Cooling",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, quisquam.",
  },
  {
    id: 5,
    title: "Location, Climate & Weather",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, quisquam.",
  },
];

function Acordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        style={{
          padding: "1.2rem",
          cursor: "pointer",
          backgroundColor: "#eee",
          borderBottom: "1px solid black",
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3>{title.toUpperCase()}</h3>
        {isOpen ? <p style={{ marginTop: "1rem" }}>{content}</p> : ""}
      </div>
    </>
  );
}

export default function Acordions() {
  return (
    <div
      style={{
        width: "100%",
        margin: "2rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {accordions.map((a) => {
        return <Acordion key={a.id} title={a.title} content={a.content} />;
      })}
    </div>
  );
}

Acordion.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
