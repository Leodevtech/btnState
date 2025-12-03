import React from "react";

export default function ColorSwitch({ onChangeColor }) {
  return (
    <button
      onClick={() => {
        const randomColor =
          "#" + Math.floor(Math.random() * 16777215).toString(16);
        onChangeColor(randomColor);
      }}
    >
      Change la couleur
    </button>
  );
}
