import React from 'react'
import NoteItem from './NoteItem'

function NoteList({ notes, keyword, onDelete, onArchive }) {
    const activeNotes = notes.filter(
        (note) =>
            note.archived === false &&
            note.title.toLowerCase().includes(keyword.toLowerCase())
    )
    const archivedNotes = notes.filter(
        (note) =>
            note.archived === true &&
            note.title.toLowerCase().includes(keyword.toLowerCase())
    )

    return (
        <>
            <h2>Catatan Aktif</h2>
            {notes.filter((note) => note.archived === false).length > 0 ? (
                activeNotes.length ? (
                    <div className="notes-list">
                        {activeNotes.map((note) => (
                            <NoteItem
                                {...note}
                                key={note.id}
                                id={note.id}
                                date={note.createdAt}
                                onDelete={onDelete}
                                onArchive={onArchive}
                            />
                        ))}
                    </div>
                ) : (
                    <p className="notes-list__empty-message">
                        Tidak ada catatan
                    </p>
                )
            ) : (
                <p className="notes-list__empty-message">Tidak ada catatan</p>
            )}
            <h2>Arsip</h2>
            {notes.filter((note) => note.archived === true).length > 0 ? (
                archivedNotes.length ? (
                    <div className="notes-list">
                        {archivedNotes.map((note) => (
                            <NoteItem
                                {...note}
                                key={note.id}
                                id={note.id}
                                date={note.createdAt}
                                onDelete={onDelete}
                                onArchive={onArchive}
                            />
                        ))}
                    </div>
                ) : (
                    <p className="notes-list__empty-message">
                        Tidak ada catatan
                    </p>
                )
            ) : (
                <p className="notes-list__empty-message">Tidak ada catatan</p>
            )}
        </>
    )
}

export default NoteList
