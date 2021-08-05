import React from 'react';
import uuid from 'react-uuid';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import Sidebar from './components/Side';
import './index.css'


const App = () => {
  const [notes, setNotes] = React.useState( localStorage.notes ? JSON.parse(localStorage.notes) : []);
  const [activeNote, setActiveNote] = React.useState(false)

  React.useEffect(() => {localStorage.setItem('notes', JSON.stringify(notes))}, [notes]);

  const onAddNote = () =>{
    const newNote = {
      id: uuid(),
      title: '',
      body: '',
      lastModified: Date.now()
    };

    setNotes([newNote, ...notes]);
  }

  const onUpdateNote = (updateNote) => {
    const updatedNoteArray = notes.map((note) => {
      if(note.id === activeNote) {
        return updateNote;
      }

      return note;

    })
    setNotes(updatedNoteArray)
  }
  
  const onDeleteNote = (idtoDelete) =>{
    setNotes(notes.filter((note) => note.id !== idtoDelete))
  };

  const getActiveNote =() =>{
    return notes.find((note) => note.id === activeNote);
  }

  return(
    <div className="App">
    <Sidebar 
    notes={notes} 
    onAddNote={onAddNote}
    onDeleteNote={onDeleteNote} 
    activeNote={activeNote}
    setActiveNote={setActiveNote}
    />
    <Main 
    activeNote={getActiveNote()} 
    onUpdateNote={onUpdateNote} />
  </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
