import React,{useState} from 'react';
import './App.css';

function App() {

  const [color, setcolor] = useState("purple");
  const [text, settext] = useState("purple")

  const myStyles = {
    color: "white",
    backgroundColor: color,
    padding: "10px",
    fontFamily: "Arial"
  }
  const changeHandler = (e)=>{
    setcolor(e.target.value);
    settext(e.target.value);
  }
  return (
    <div className="App">
      <div className="container" style={myStyles}>
  <p > color:{text}</p>
        <input type="text"
               
               onChange={changeHandler}/>
      </div>
    </div>
  );
}

export default App;
