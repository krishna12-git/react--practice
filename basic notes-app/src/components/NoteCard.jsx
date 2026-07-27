const NoteCard = ({ note, deleteNote }) => {
  return (
    <article className="note-card">
      <h2>{note.title}</h2>

      <p>{note.description}</p>

      <button onClick={() => deleteNote(note.id)}>
        Delete
      </button>
    </article>
  );
};

export default NoteCard;