import { useState } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const DATA = [
  {
    id: 1,
    name: "Iron Man"
  },
  {
    id: 2,
    name: "Super Man"
  },
  {
    id: 3,
    name: "Spider-Man"
  },
  {
    id: 4,
    name: "Batman"
  }
];

export default function App() {
  const [activeCardId, setActiveCardId] = useState(null);

  const handleClick = (event) => {
    const clickedCardId = Number(event.target.id);

    setActiveCardId(clickedCardId === activeCardId ? null : clickedCardId);
  };
  return (
    <div className="App">
      <section>
        {DATA.map((superHero) => (
          <div 
          className={superHero.id === activeCardId ? "active" : ""} 
          onClick={handleClick}
            id={superHero.id}
          >
            {superHero.name}
          </div>
        ))}
      </section>
      <h1>{activeCardId}</h1>
    </div>
  );
}

