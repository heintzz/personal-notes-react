import React from 'react'

function NoteContent({body}) {
    return (
        <div className='note-item__body'>
            {body}
        </div>
    )
}

export default NoteContent