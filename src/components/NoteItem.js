import React from 'react'
import NoteTitle from './NoteTitle'
import NoteDate from './NoteDate'
import NoteContent from './NoteContent'
import NoteButton from './NoteButton'

function NoteItem({title, body, date, id, archived, onDelete, onArchive}) {
    return (
        <div className='note-item'>
            <div className='note-item__content'>
                <NoteTitle title={title}/>
                <NoteDate date={date} />
                <NoteContent body={body} />
            </div>
            <NoteButton id={id} archived={archived} onDelete={onDelete} onArchive={onArchive}/>
        </div>
    )
}

export default NoteItem
