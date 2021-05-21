import React from "react";
import { connect } from "react-redux";
// Container - Presentation

import {
  incrementActionCreator,
  decrementActionCreator,
  resetActionCreator,
} from "./redux/actions/constants";

const Counter = ({ count, increment, decrement, reset }) => {
  console.log(count);
  return (
    <div className="Counter">
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={() => increment()}>Increment</button>
        <button onClick={() => decrement()}>Decrement</button>
        <button onClick={() => reset()}>Reset</button>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(incrementActionCreator()),
    decrement: () => dispatch(decrementActionCreator()),
    reset: () => dispatch(resetActionCreator()),
  };
};

// const mapDispatchToProps = {
//   increment: incrementActionCreator,
//   decrement: decrementActionCreator,
//   reset: resetActionCreator,
// };

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default CounterContainer;
