import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple Counter App</h1>
        <div className="counter">

          <button onClick={decrement}>-</button>

          <span>{count}</span>

          <button onClick={increment}>+</button>
        </div>
      </header>
    </div>
  );
}

export default App;
