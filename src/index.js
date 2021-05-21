import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Counter from "./Counter";

const Application = () => {
  return (
    <main className="Application">
      <section className="Counters">
        <Counter />
      </section>
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
