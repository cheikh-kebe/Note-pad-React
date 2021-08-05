import React from 'react';
import ReactMarkdown from 'react-markdown';

const Main = ({ activeNote, onUpdateNote }) =>{
  const onEditField = (key, value) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
      lastModified: Date.now(),
    });
  };
  //if no note selected
  if(!activeNote)
  return <div className="no-active-note">Pas de note selectionné</div>


  return(
   <div className="app-main">
     <div className="app-main-note-edit">
      <input type="text" id="title" value={activeNote.title} placeholder="Titre" onChange={(e) => onEditField('title', e.target.value)} autoFocus />

      <textarea id="body" placeholder="Note à rédiger" value={activeNote.body} onChange={(e) => onEditField('body', e.target.value)}></textarea>

     </div>
     <div className="app-main-note-preview">
      <h1 className="preview-title">{activeNote.title}</h1>
        <ReactMarkdown className="markdown-preview">
          {activeNote.body}
        </ReactMarkdown>
     </div>
   </div> 
  )

}

export default Main;