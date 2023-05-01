import { useState } from "react";

export default function Board() {
  const [squares, setSquares] = useState(new Array(9).fill(null));
  return (
    <div>
      <Square />
    </div>
  );
}

function Square() {
  return <button className="square">X</button>;
}
