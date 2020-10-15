// Import the React and ReactDOM Libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a react component
const App = () => {
  const buttonText = { text: "Click" };
  return (
    <div>
      <label className="lable" htmlFor="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundcdColor: "blue", color: "white" }}>
        {buttonText.text}
      </button>
    </div>
  );
};

// Take the react compionent and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
