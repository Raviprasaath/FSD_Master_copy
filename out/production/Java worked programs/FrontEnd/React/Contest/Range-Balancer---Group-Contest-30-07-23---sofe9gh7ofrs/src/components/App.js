import React, { useState } from 'react';
import '../styles/App.css';

const App = () => {
  const [maxSum, setMaxSum] = useState(50);
  const [rangeA, setRangeA] = useState(0);
  const [rangeB, setRangeB] = useState(50);

  const handleMaxSumChange = (event) => {
    setMaxSum(parseInt(event.target.value));
  };

  const handleRangeAChange = (event) => {
    const newValue = parseInt(event.target.value);
    setRangeA(Math.min(newValue, maxSum - rangeB));
  };

  const handleRangeBChange = (event) => {
    const newValue = parseInt(event.target.value);
    setRangeB(Math.min(newValue, maxSum - rangeA));
  };

  return (
    <div>
      <div id="max-sum-holder">
        <label for="max-sum">Input max sum:-</label>
        <input id="max-sum" type="number" value={maxSum} onChange={handleMaxSumChange}/>
      </div>

      <div id="range-a-holder">
        <input id="range-a" type="range" value={rangeA} max={maxSum - rangeB} onChange={handleRangeAChange}/>
        <div id="range-a-value">{rangeA}</div>
      </div>

      <div id="range-b-holder">
        <label htmlFor="range-b">Range B:</label>
        <input id="range-b" type="range" value={rangeB} max={maxSum - rangeA} onChange={handleRangeBChange}/>
        <div id="range-b-value">{rangeB}</div>
      </div>

      <div id="sum">
        Sum: {rangeA + rangeB}
      </div>
    </div>
  );
};

export default App;
