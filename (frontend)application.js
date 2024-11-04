import React, { useState, useEffect } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

const App = () => {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    const response = await fetch('http://localhost:5000/notes');
    const data = await response.json();
    setNotes(data);
  };

  const addNote = async (note) => {
    const response = await fetch('http://localhost:5000/notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(note),
    });
    fetchNotes(); // Refresh the notes after adding
  };

  const deleteNote = async (id) => {
    await fetch(`http://localhost:5000/notes/${id}`, { method: 'DELETE' });
    fetchNotes(); // Refresh the notes after deletion
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div>
      <h1>Notes Application</h1>
      <NoteForm addNote={addNote} />
      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
  );
};

export default App;
