import { useState } from "react";

import "./App.css";

function App() {
  const [userVal, setUserVal] = useState("");
  const [passwordVal, setPasswordVal] = useState("");
  const [emailVal, setEmailVal] = useState("");
  const [errorText, setErrorText] = useState("");

  const btnHandlerName = (e) => {
    setUserVal(e.target.value);
  };
  const btnHandlerPassword = (e) => {
    setPasswordVal(e.target.value);
  };
  const btnHandlerEmail = (e) => {
    setEmailVal(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userVal && !passwordVal && !emailVal) {
      setErrorText("All Fields must be filled");
    } else if (userVal && passwordVal && emailVal) {
      if (!emailVal.includes("" + "@")) {
        setErrorText("Email is invalid");
      } else {
        setErrorText("No Error Found Congrats the user is logged in.");
      }
    }
  };
  return (
    <div id="main">
      <input
        onChange={(e) => btnHandlerName(e)}
        value={userVal}
        placeholder="username"
      ></input>
      <br />
      <input
        onChange={(e) => btnHandlerPassword(e)}
        value={passwordVal}
        placeholder="password"
      ></input>
      <br />
      <input
        onChange={(e) => btnHandlerEmail(e)}
        value={emailVal}
        placeholder="email"
      ></input>
      <br />
      <button type="submit" onClick={(e) => handleSubmit(e)}>
        Login
      </button>
      <p className="error">{errorText}</p>
    </div>
  );
}

export default App;
