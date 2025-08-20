import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testid="counter">{count}</h3>
        <button
          data-testid="minus-btn"
          disabled={disabled}
          onClick={() => setCount((prev) => prev - 1)}
        >
          -
        </button>
        <button
          data-testid="plus-btn"
          disabled={disabled}
          onClick={() => setCount((prev) => prev + 1)}
        >
          +
        </button>
        <button
          style={{ backgroundColor: "blue" }}
          data-testid="on/off-btn"
          onClick={() => setDisabled((prev) => !prev)}
        >
          on/off
        </button>
      </header>
    </div>
  );
}

export default App;
