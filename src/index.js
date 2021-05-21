import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Counter from "./Counter";
import { Provider } from "react-redux";
import store from "./redux/store";

const Application = () => {
  return (
    <main className="Application">
      <section className="Counters">
        <Counter />
      </section>
    </main>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById("root")
);
