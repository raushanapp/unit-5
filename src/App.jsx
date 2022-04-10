import {useState} from "react";
import './App.css';

function App() {
  const [Counter, setCounter] = useState(0);
  const handleIncrement = (value)=>{
    console.log(Counter,"-Count")
    let v =(Counter+value) 
    console.log(v,"-v")
      setCounter(v*2);
   
    
  }
  const handleDcrement = (value) =>{
    if( Counter<=0){
       return;
    }
  
      // <h4 className ="evenColor">Even</h4>
      setCounter(Counter - value);
     

  }
  return (
    <div className="App">
      <h2>Counter :{Counter}</h2>
      <button onClick={()=>{ handleIncrement(2)}}>Increment</button>
      <button onClick={()=>{handleDcrement(1)}}>Dcrement</button>
      <div className={Counter %2===0? "evenColor" :"oddColor"} >Number is {Counter %2===0? "Even":"Odd"}</div> 
      {/* <div onChange={()=>{coloChange(Counter)}}></div> */}
    </div>
  );
}

export default App;
