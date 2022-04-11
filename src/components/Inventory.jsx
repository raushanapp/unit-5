import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
    inkspens :15
  });
    const increaseHandler = (e) =>{ 
      setInv({...inv,[e]:inv[e]+1})
    };

    const decreaseHandler = (e) => {
       
      // {inv[e] > 0 ? setInv({...inv,[e] : inv[e] - 1}) : null};
      setInv({...inv,[e]: inv[e]-1})
    };
    let sum = inv.books + inv.notebooks +inv.pens +inv.inkspens
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button className="circlularButton" onClick = {()=>increaseHandler("books")}>+</button>
        <button className="circlularButton" onClick = {()=>decreaseHandler("books")}>-</button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton" onClick = {()=>increaseHandler("notebooks")}>+</button>
        <button className="circlularButton" onClick = {()=>decreaseHandler("notebooks")}>-</button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton" onClick = {()=>increaseHandler("pens")}>+</button>
        <button className="circlularButton" onClick = {()=>decreaseHandler("pens")}>-</button>
        <span>{inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button className="circlularButton" onClick = {()=>increaseHandler("inkspens")}>+</button>
        <button className="circlularButton" onClick = {()=>decreaseHandler("inkspens")}>-</button>
        <span>{inv.inkspens}</span>
      </div>
            {/*calculate total and show it*/}
      total: {sum}
    </div>
  );
};