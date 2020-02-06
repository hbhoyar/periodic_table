import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function Cell(props) {
  let cls = props.type || "defaultType";
  return (
    <div className={cls}>
      <span>{props.name}</span>
      <span>{props.number}</span>
    </div>
  );
}

function Counter(props) {
  if (props.lookAndFeel === "button") {
    const [count, setCount] = useState(0);
    return (
      <button onClick={() => setCount(count + 1)}>Counter: {count}</button>
    );
  } else if (props.lookAndFeel === "label") {
    return <div> Counter: {props.name} </div>;
  }
}

function Container(props) {
  return (
    <div>
      <Counter name="c1" lookAndFeel="button" />
      <Counter name="c2" lookAndFeel="button" />
      <Cell name="Cobalt" number="30" />
      <Cell name="Zinc" number="31" type="metal" />
      <Cell name="Mercury" number="32" type="gas" />
    </div>
  );
}

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

const rootElement = document.getElementById("root"); //see index.html
ReactDOM.render(<Container />, rootElement);
