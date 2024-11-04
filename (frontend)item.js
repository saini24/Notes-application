import React from 'react';

const NoteItem = ({ note, deleteNote }) => {
  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <button onClick={() => deleteNote(note._id)}>Delete</button>
    </div>
  );
};

export default NoteItem;
