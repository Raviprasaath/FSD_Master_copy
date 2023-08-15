import { useEffect, useState } from "react";
import "./App.css"

const userId = "admin";

function UserGreeting(props) {
  useEffect(() => {
    console.log("user greeting render");
    return () => {
      console.log("unmount");
    };
  }, []);

  const greetText = props.greetText;
  if (props.greetText) {
    return <h1>Welcome back {greetText}!</h1>;
  }
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  const userId = props.userId;

  if (isLoggedIn) {
    return <UserGreeting greetText={userId} />;
  }
  return <GuestGreeting />;
}

function App() {
  const [togg, setTogg] = useState(true);
  function togglerBtn() {
    setTogg(!togg);
  }
  return (
    <div className="App" style={{display:"flex", flexDirection:"column", }}>
      <Greeting isLoggedIn={togg} userId={userId} />
      <button onClick={() => {togglerBtn()}} >
        Click
      </button>
    </div>
  );
}

export default App;
