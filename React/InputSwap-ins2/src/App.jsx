import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// rendering list of items

export default function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState({
    first: "",
    second: ""
  });

  const handleSubmit = () => {
    const { first } = output;

    setOutput((prevOutput) => ({
      second: first === "" ? "" : prevOutput.first,
      first: input
    }));
    // setOutput((prevOutput) => ({
    //   second: first === "" ? prevOutput.second : prevOutput.first,
    //   first: input
    // }));
  };

  return (
    <main>
      <input
        value={input}
        onChange={(event) => {
          setInput(event.target.value);
        }}
      />
      <button onClick={handleSubmit}> Submit </button>

      <p>Output 1 : {output.first} </p>
      <p>Output 2 : {output.second} </p>
      <button>Reset</button>
    </main>
  );
}

