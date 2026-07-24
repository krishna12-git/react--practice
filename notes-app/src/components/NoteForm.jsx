import { useState } from "react";

const NoteForm = ({ addNote }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    if (title.trim() === "" || description.trim() === "") {
      alert("Please enter both title and description.");
      return;
    }

    const newNote = {
      id: Date.now(),
      title: title,
      description: description,
    };

    addNote(newNote);

    setTitle("");
    setDescription("");
  };

  return (
    <form className="note-form" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Enter note title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <textarea
        placeholder="Enter note description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;