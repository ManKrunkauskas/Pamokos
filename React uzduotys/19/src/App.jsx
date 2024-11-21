import React, { useState } from "react";
import CounterDisplay from "./components/CounterDisplay";
import CounterButton from "./components/CounterButton";

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Counter Page</h1>
      <CounterDisplay count={count} />
      <CounterButton increment={incrementCount} />
    </div>
  );
}

export default App;
