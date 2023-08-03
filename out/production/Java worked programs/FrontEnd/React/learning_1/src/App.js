import MyHeader from "./components/MyHeader/MyHeader";
import { useState } from "react";

function App() {
  const [showComp, setShowComp] = useState(false);

  // let buttonstatus = false;

  // function btnHandler() {
  //   buttonstatus = !(buttonstatus);
  //   console.log('buttonstatus:', buttonstatus);
  // }
  function btnHandler() {
      setShowComp((showComp)=>{
      return !showComp;
    });
    
  }
  return (
    <div id="myBodyConatiner">
      <div> Hello! This is App</div>
      <button onClick={btnHandler}>Toggle Switch {`${showComp}`}</button>
      {showComp ? <MyHeader /> : ""}
    </div>
  );
}

export default App;

//
// (buttonstatus)?(<MyHeader/>):"";
// buttonstatus && (<MyHeader/>)

// js - {}
// html - ()

{
  /* <button onClick={btnHandler}>Hide</button> */
}
{
  /* <button onClick="btnHandler()">Hide</button> */
}
