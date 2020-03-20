import React,{useState} from 'react';
import  { quotes } from './Data';

export default function RandomQuote() {

    const [quote, setQuote] = useState("Please click random button to generate quote");
    const [author, setauthor] = useState("")

  const myStyles = {
    background: "rgb(131,58,180)",
    fontFamily: "Arial",
    textAlign: "center",
    height: "100vh",
    width:"100%",
    display:"flex"
  }

   
   const randomGenerator = () => {
    const random = Math.floor(Math.random() * quotes.length)
     setQuote(quotes[random].quote);
     setauthor(quotes[random].author);
   }

  return (
    <>
      <div className="container" style={myStyles}>
      <div className="card-container" >
        <h3 className="quote">{quote}</h3>
        <h1 className="author">{author}</h1>
      <button type="button" className="button"onClick={randomGenerator}><span style={{fontSize:"24px"}}>Random Quote</span></button>
      </div>
    </div>
      
    </>
  )
}
