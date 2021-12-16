import React from "react";

function CounterSimple() {
  const [state, setstate] = React.useState(0);
  return (
    <div>
        <h1>In this all data is stored In component only</h1>
      <button aria-label="Increment value" onClick={() => setstate(state + 1)}>
        Increment
      </button>
      <span>{state}</span>
      <button aria-label="Decrement value" onClick={() => setstate(state - 1)}>
        Decrement
      </button>
    </div>
  );
}

export default CounterSimple;
