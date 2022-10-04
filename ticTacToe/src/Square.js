import React from "react";
import "./styles.css";
export default function Square({ val, chooseSquare }) {
  return (
    <div className="cell" onClick={chooseSquare}>
      {val}
    </div>
  );
}
