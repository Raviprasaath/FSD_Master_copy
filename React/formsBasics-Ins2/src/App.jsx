import { useState } from 'react'
import './App.css'

export default function App() {
  const [formDetails, setFormDetails] = useState({
    firstName: "",
    secondName: "",
    email: ""
  });

  const handleFormDetails = (event) => {
    setFormDetails((prevFormDetails) => ({
      ...prevFormDetails,
      [event.target.id]: event.target.value
    }));
  };

  return (
    <div className="App" onChange={handleFormDetails}>
      <label htmlFor="firstName">First Name</label>
      <input id="firstName" type="text" value={formDetails.firstName} />

      <br />
      <br />
      <label htmlFor="secondName">Second Name</label>
      <input id="secondName" type="text" value={formDetails.secondName} />
      <br />
      <br />
      <label htmlFor="email">Email</label>
      <input id="email" type="email" value={formDetails.email} />
    </div>
  );
}

