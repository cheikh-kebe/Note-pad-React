import React from "react";

const Sidebar = ({
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) => {
  const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);
  if(!notes)
  return <div className="app-sidebar-notes">Pas de note selectionné</div>
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Note-Pad Thp exo</h1>
        <small><a href="https://github.com/shanksthered/Note-pad-React"> Lien GitHub</a></small>

        <button onClick={onAddNote}>Ajouter</button>
      </div>

      <div className="app-sidebar-notes">
        {sortedNotes.map((note) => (
          <div className={`app-sidebar-note ${note.id === activeNote && 'active'}`} onClick={() =>setActiveNote(note.id)}>
            <div className="sidebar-note-title">
              <strong>{note.title}</strong>
              <button onClick={() => onDeleteNote(note.id)}>Supprimer</button>
            </div>

            <p>{note.body && note.body.substr(0, 100) + "..."}</p>

            <small className="note-meta">
              Dernière Modification{" "}
              {new Date(note.lastModified).toLocaleDateString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
