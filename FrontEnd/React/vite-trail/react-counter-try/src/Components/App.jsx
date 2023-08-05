import './App.css'


function Item (props) {
  return (
    <li>
       {props.name} {Boolean(1) && "😊"}
    </li>

  )
  
  
}

function App() {
  return (
    <>
      <section>
        <h1>Packing List</h1>
        <ul>
          <Item name="avsfbc" isPacked={true}/>
          <Item name="bfcsefesr" isPacked={false}/>
          <Item name="uhcsefsf" isPacked={true}/>
        </ul>
      </section>
    </>
  )
}

export default App;
