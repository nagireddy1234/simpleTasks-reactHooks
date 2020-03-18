import React,{useState} from 'react';
import './App.css';

function App() {

  const [color, setcolor] = useState("purple");
  const [text, settext] = useState("purple")

  const myStyles = {
    color: "#000",
    backgroundColor: color,
    padding: "10px",
    fontFamily: "Arial"
  }

  const changeHandler = (e)=> {
    setcolor(e.target.value);
    settext(e.target.value);
  }

  return (
    <div className="App container" style={myStyles}>
    <div className="card">
    <div className="content">
      <div className="header"> <h1>color:{text}</h1>
      </div>
      <div className="description">
      <input type="text" 
            onChange={changeHandler}/>
      </div>
    </div>
  </div>
      </div>
  );
}

export default App;
