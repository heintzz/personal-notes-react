import React from 'react'
import NoteBody from './NoteBody.js'

class NoteHeader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchKey: '',
        }

        this.onSearchHandler = this.onSearchHandler.bind(this)
    }

    onSearchHandler(e) {
        this.setState({searchKey: e.target.value})
    }
    
    render() {
        return (
            <>
                <div className='note-app__header'>
                    <h1>Notes</h1>
                    <div className='note-search'>
                        <input type='text' placeholder='Cari catatan....' spellCheck='false' value={this.state.searchKey} onChange={this.onSearchHandler} />
                    </div>
                </div>  
                {console.log(this.state.searchKey)}
                <NoteBody keyword={this.state.searchKey} />
            </>
        )
    }
}

export default NoteHeader