import logo from './logo.svg';
import './App.css';
import React from 'react';
import Car from './Car';

// function App() {
//   // const[number, numberFn] = useState(0);
  
//   // let updateNumber = () => {
//   //   numberFn(number+1);
//   // }

//   return (
//     <>
//       <h1>{number}</h1>
//       <button onClick={updateNumber}>Click</button>
//     </>
//   );
// }


class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {name:"ravi"};

    console.log("constructor")
  }
  // componentDidMount() {
  //   console.log("componentDidMount")
  // }

  btnUpdate() {
    this.setState({name:"sathish"});
  }
  // componentDidUpdate() {
  //   console.log("componentDidUpdate");
  //   console.log(this.state.name);
  // }

  render() {
    console.log("render")
    return (
    <>
      <h2 onClick={()=>this.btnUpdate() }>Hi, I am a Car!</h2>
      <Car name = {"ravi"}/>
    </>
    );

  }
}
export default App;
