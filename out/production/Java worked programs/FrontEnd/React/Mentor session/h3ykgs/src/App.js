import "./styles.css";
import { useEffect, useState } from "react";
import Movies from "./Movies";

export default function App() {
  const [count, setCount] = useState(0);
  const [reverse, setReverse] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>CHILD BUTTON</button>
      <button onClick={() => setReverse(reverse + 1)}>PARENT BUTTON</button>
      <Movies ravi={count} />
      <div>
        Parent:
        {reverse}
      </div>
    </>
  );
}
