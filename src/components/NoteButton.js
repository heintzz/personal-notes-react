import React from 'react'

function NoteButton({id, archived, onDelete, onArchive}) {
    return (
        <div className='note-item__action'>
            <button className='note-item__delete-button' type='text' onClick={() => onDelete(id)}>Delete</button>
            <button className='note-item__archive-button' type='text' onClick={() => onArchive(id)}>{archived ? "Unarchive" : "Archive"}</button>
        </div>
    )
}

export default NoteButton
