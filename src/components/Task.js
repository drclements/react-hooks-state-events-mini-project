import React from "react";



function Task( {text, category, onRemove } ) {
 console.log(text)

 function handleRemove() {
  onRemove(text)
 }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={handleRemove} className="delete">X</button>
    </div>
  );
}

export default Task;
