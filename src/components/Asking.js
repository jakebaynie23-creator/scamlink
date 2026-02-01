import { useState } from "react";
import "../App.css";

function Asking({ onYes }) {
  const [position, setPosition] = useState({ top: "50%", left: "60%" });

  const moveButton = () => {
    const randomTop = Math.floor(Math.random() * 80) + "%";
    const randomLeft = Math.floor(Math.random() * 80) + "%";
    setPosition({ top: randomTop, left: randomLeft });
  };

  return (
    <div className="container">
      <h1>Cheekies</h1>
      <h2>Will you be my Valentine?</h2>

      <div className="buttons">
        <button className="yes" onClick={onYes}>
          Yes 💖
        </button>

        <button
          className="no"
          onMouseEnter={moveButton}
          style={{
            position: "absolute",
            top: position.top,
            left: position.left,
          }}
        >
          No 😅
        </button>
      </div>
    </div>
  );
}

export default Asking;
