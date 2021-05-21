import React from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  incrementActionCreator,
  decrementActionCreator,
  resetActionCreator,
} from "./redux/actions/constants";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="Counter">
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={() => dispatch(incrementActionCreator())}>
          Increment
        </button>
        <button onClick={() => dispatch(decrementActionCreator())}>
          Decrement
        </button>
        <button onClick={() => dispatch(resetActionCreator())}>Reset</button>
      </section>
    </div>
  );
};

export default Counter;
