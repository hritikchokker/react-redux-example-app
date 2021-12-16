import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/counter";
import React from "react";
import UserForm from "./components/UserForm";
import CounterSimple from "./components/CounterSimple";
function App() {
  const [countToggle, setCountToggle] = React.useState(true);
  const [goBack, setGoBack] = React.useState(true);
  return (
    <div className="App">
      <h1>
        Counter With Redux example
        <br></br>
        <button
          onClick={() => {
            setCountToggle(!countToggle);
          }}
        >
          Toggle Counter Component
        </button>
        <br />
        <button
          onClick={() => {
            setGoBack(!goBack);
          }}
        >
          Go back From User Form
        </button>
      </h1>
      {countToggle ? (
        <Counter />
      ) : (
        <h2>there is no count component available</h2>
      )}
      {goBack ? <UserForm /> : <h2>User have exited the form</h2>}

      <br></br>
      {countToggle ? <CounterSimple /> : <h2>Still has a lot to learn</h2>}
    </div>
  );
}

export default App;
