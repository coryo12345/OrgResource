import React, { Component } from 'react'
import axios from 'axios'

export class Uploader extends Component {
    constructor(props) {
        super(props)
        this.fileChange = this.fileChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = { file: null, formId: 'uploaderForm' }
    }

    fileChange(ev) {
        this.setState({ file: ev.target.files[0] })
    }

    handleSubmit(ev) {
        ev.preventDefault()
        // var form = document.getElementById(this.state.formId)
        var data = new FormData()
        data.append('file', this.state.file)
        axios.post('/api/web/file/upload', data, {

        })
        .then((res) => {
            console.log(res.statusText)
        })
        // fetch('/api/web/file/upload', {
        //     method: 'post',
        //     // headers: { 'content-type': 'application/json' },
        //     body: data
        // })
        //     .then((resp) => {
        //         if (!resp.ok)
        //             throw Error('')
        //         return resp.json()
        //     })
        //     .then((resp) => {
        //         console.log(resp)
        //     })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} id={this.state.formId}>
                <input type="file" name="filename" onChange={this.fileChange} />
                <input type="submit" value="Upload" />
            </form>
        )
    }
}

