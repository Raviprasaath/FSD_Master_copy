import { useState } from "react";
import "../styles/App.css";

function App() {
  const [shape, setShape] = useState("square");
  const [shapes, setShapesStore] = useState([]);

  function shapeHandler() {
    setShapesStore(prev=>[...prev, shape]);
  }

  function shapeSelector(e) {
    console.log(e.target.value)
    setShape(e.target.value);
  }

  return (
    <div id="main">
      <div id="shape-creator">
        <select onChange={(event)=>{shapeSelector(event)}}>
          <option value="square">Square</option>
          <option value="circle">Circle</option>
        </select>
        <button onClick = {()=>{shapeHandler()}}>Add shape</button>
      </div>
      <div id="shapes-holder">
        {shapes.map((selectedShape, index) => (
          <div key={index} className={selectedShape}>
            {index}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
