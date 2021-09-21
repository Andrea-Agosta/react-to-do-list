import React, { useState } from "react";

function CreateArea(props) {
    const [note, setNote] = useState({
        title:"",
        content:""
    });

    function handleChange(event) {
      const {name, value} = event.target;
      setNote((prev) => {
        if (name === "title") {
          return { title: value, content: prev.content};
        }
        if (name === "content") {
          return {title: prev.title, content: value};
        }
      });
    }

    function buttonClick(event) {
      event.preventDefault();
      return props.note(note);
    }

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" value={note.title} onChange={(handleChange)} />
        <textarea name="content" placeholder="Take a note..." rows="3" value={note.content} onChange={handleChange}/>
        <button onClick={buttonClick}><i className="fas fa-plus"></i></button>
      </form>
    </div>
  );
}

export default CreateArea;
