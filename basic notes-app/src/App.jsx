import { useState } from "react";
import NoteForm from "./components/NoteForm";
import NoteCard from "./components/NoteCard";
import "./App.css";

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const deleteNote = (noteId) => {
    const remainingNotes = notes.filter((note) => note.id !== noteId);
    setNotes(remainingNotes);
  };

  return (
    <main className="app">
      <h1>My Notes</h1>

      <NoteForm addNote={addNote} />

      <section className="notes-container">
        {notes.length === 0 ? (
          <p className="empty-message">No notes added yet.</p>
        ) : (
          notes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              deleteNote={deleteNote}
            />
          ))
        )}
      </section>
    </main>
  );
};

export default App;