import React from 'react'
import { getInitialData } from '../utils/index.js'
import NoteList from './NoteList.js'

class NoteBody extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            notes: getInitialData(),
            title: '',
            body: '',
            isValid: true,
        }
        
        this.onDelete = this.onDelete.bind(this)
        this.onArchive = this.onArchive.bind(this)
        this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this)
        this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this)
        this.onSubmitHandler = this.onSubmitHandler.bind(this)
    }

    onTitleChangeHandler(e) {
        this.setState((prevState) => {
            return {
                ...prevState,
                title: e.target.value.slice(0, 25)
            }
        })
    }

    onBodyChangeHandler(e) {
        this.setState((prevState) => {
            return {
                ...prevState,
                body: e.target.value
            }
        })
    }

    onAddNote({title, body}) {
        if(title && body) {
            this.setState((prevState) => {
                return {
                    isValid: true,
                    title: '',
                    body: '', 
                    notes: [ 
                        ...prevState.notes,
                        {
                            id: +new Date(),
                            title,
                            body,
                            createdAt: +new Date(),
                            archived: false,
                    }],
                }
            })
        }
        else {
            this.setState((prevState) => {
                return {
                    ...prevState,
                    isValid: false
                }
            })
        }
    }

    onSubmitHandler(e) {
        e.preventDefault()
        this.onAddNote(this.state)
    }
    
    onDelete(id) {
        const notes = this.state.notes.filter(note => note.id !== id)
        this.setState({notes})
    }

    onArchive(id) {
        const currentNotes = this.state.notes.filter(note => note.id !== id)
        const archivedNote = this.state.notes.filter(note => note.id === id)
        archivedNote[0].archived = !archivedNote[0].archived
        this.setState({currentNotes, archivedNote})
    }

    render() {
       const maxLength = 25
       let charTyped = this.state.title.length
       let remainingChar = maxLength - charTyped >= 0 ? maxLength - charTyped : 0

        return (
            <div className='note-app__body'>
                <div className='note-input'>
                    <h2>Buat Catatan</h2>
                    <form onSubmit={this.onSubmitHandler}>
                        {this.state.isValid ? <p className='note-input__title__char-limit'>Sisa karakter: {remainingChar}</p> : <p style={{color: 'red'}}>Please enter a value.</p>}
                        <input className='note-input__title' spellCheck='false' type='text' placeholder='Ini adalah judul....' value={this.state.title} onChange={this.onTitleChangeHandler}/>
                        <textarea className='note-input__body' spellCheck='false' placeholder='Tuliskan catatanmu di sini....' value={this.state.body} onChange={this.onBodyChangeHandler} />
                        <button type='submit'>Buat</button>
                    </form>
                </div>
                <NoteList notes={this.state.notes} keyword={this.props.keyword} onDelete={this.onDelete} onArchive={this.onArchive}/>
            </div>
        )
    }
}

export default NoteBody