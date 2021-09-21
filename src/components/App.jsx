import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

function App() {
    const [savedNote, setSavedNote] = useState([]);

    function addNote(note) {
        setSavedNote((prevNote) => [...prevNote, note]);
    }

    function deleteNote(id) {
        setSavedNote((prevNote) =>{ return prevNote.filter((note, index) => {return (id !== index);});})
    }

    return (
        <div>
            <Header />
            <CreateArea note={addNote} />
            { savedNote.map( (notes, index) => {
                return (
                    <Note key={index} id={index} title={notes.title} content={notes.content} delete={deleteNote} />
                );}
            )}
            <Footer />
        </div>
    );
}

export default App;