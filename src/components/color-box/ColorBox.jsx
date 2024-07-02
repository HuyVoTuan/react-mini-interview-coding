import { useState } from "react";

const colorBoxes = [
  { id: 1, color: "red", title: "Red" },
  { id: 2, color: "yellow", title: "Yellow" },
  { id: 3, color: "aqua", title: "Aqua" },
  { id: 4, color: "purple", title: "Purple" },
];

export default function ColorBox() {
  const [currentBox, setCurrentBox] = useState(null);

  const getBoxColor = (box) => {
    if (currentBox) {
      return currentBox.color;
    }
    return box.color;
  };

  const onBoxClick = (box) => {
    setCurrentBox((prevBox) => {
      if (prevBox?.id === box.id) {
        return null;
      }
      return box;
    });
  };

  return (
    <>
      <div
        style={{
          margin: "2rem",
          fontSize: "2.2rem",
        }}
      >
        Current color: {currentBox ? currentBox.title : "Default"}
      </div>

      {/* GRID SYSTEM */}
      <div
        style={{
          margin: "2rem",
          display: "grid",
          gap: "2rem",
          gridTemplateRows: "1fr 1fr",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        {colorBoxes.map((box) => {
          return (
            <div
              key={box.id}
              style={{
                backgroundColor: getBoxColor(box),
                height: "150px",
                width: "400px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={() => onBoxClick(box)}
            >
              {box.title}
            </div>
          );
        })}
      </div>
    </>
  );
}
