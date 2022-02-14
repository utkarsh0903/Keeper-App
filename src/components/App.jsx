import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [note, setNote] = useState([]);

  function handleClick(inputNote) {
    setNote((prevNotes) => {
      return [...prevNotes, inputNote];
    });
  }
  function deleteNote(id) {
    setNote((prevNotes) => {
      return prevNotes.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea handleNote={handleClick} />
      {note.map((noteItem, index) => {
        return (
          <Note
            id={index}
            deleteNote={deleteNote}
            title={noteItem.title}
            content={noteItem.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
