import React from 'react'

function NoteDate({date}) {
    return (
        <div className='note-item__date'>
            {new Date(date).toLocaleDateString()}
        </div>
    )
}

export default NoteDate