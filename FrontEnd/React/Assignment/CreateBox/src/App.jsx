import { useState } from 'react'


const App = () => {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  const [boxes, setBoxes] = useState("");

  const btnHandler = () => {
    const newBox = (
      <div
        style={{
          width: `${width}px`,
          height: `${height}px`,
          backgroundColor: backgroundColor,
        }}
        key={boxes.length}
      >
        
      </div>
    );

    setBoxes([...boxes, newBox]);
    setWidth("")
    setHeight("")
    setBackgroundColor("")
  };

  // function btnHandler () {
  //   let box = document.getElementById('box-container');
  //   box.innerHTML += `
  //   <div 
  //     style="width:${width}px; 
  //     height:${height}px; 
  //     background-color:${backgroundColor};">        
  //   </div>
  //   `
  //   setWidth("")
  //   setHeight("")
  //   setBackgroundColor("")
  // }

  return (
    <div id="main">
      <h1>Box Creator</h1>
      <div>
        <label htmlFor="width">Width:</label>
        <input 
          id="width"
          type="number"
          onChange={(e)=>(setWidth(e.target.value))}
          value = {width}
        />
      </div>
      <div>
        <label htmlFor="height">Height:</label>
        <input
          id="height"
          type="number"
          onChange={(e)=>(setHeight(e.target.value))}
          value = {height}
        />
      </div>
      <div>
        <label htmlFor="backgroundColor">Background Color:</label>
        <input
          id="backgroundColor"
          type="text"
          onChange={(e)=>(setBackgroundColor(e.target.value))}
          value = {backgroundColor}
        />
      </div>
      <button className='create-btn' onClick = {btnHandler} >Create Box</button>
      <div id="box-container">{boxes}</div>
    </div>
  );
};


export default App;
