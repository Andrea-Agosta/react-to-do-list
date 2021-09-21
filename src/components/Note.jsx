import React from "react";

function Note(props) {
  
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={() => props.delete(props.id)}><i className="fas fa-trash-alt fa-2x"></i></button>
    </div>
  );
}

export default Note;
