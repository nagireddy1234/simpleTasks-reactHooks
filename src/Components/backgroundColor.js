import React, {useState} from 'react'

 const BackgroundColor = () => {
  const [color, setcolor] = useState("purple");
  const [text, settext] = useState("purple");
  const myStyles = {
    backgroundColor: color,
    fontFamily: "Arial",
    textAlign: "center",
    height: "100vh",
    width:"100%",
    display:"flex"
  }
  const changeHandler = (e)=> {
    if(e.target.value==="")
    {
      setcolor("purple");
      settext("");
    }else{
      setcolor(e.target.value);
      settext(e.target.value);
    }
  }

  return (
    <div className="container" style={myStyles}>
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
  )
}

export default BackgroundColor;
