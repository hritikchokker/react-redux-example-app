import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../features/counterSlice";
// import styles from './Counter.module.css'

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <h1>
          <button
            onClick={() => {
              dispatch(incrementByAmount(5));
            }}
          >
            Increment by Amount = 5;
          </button>
        </h1>
      </div>
    </div>
  );
}

export default Counter;
