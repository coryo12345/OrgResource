import React, { Component } from 'react'
import { Box } from '@material-ui/core'
import { Uploader } from './Uploader'

export class Page extends Component {
    constructor(props) {
        super(props)
        this.update = this.update.bind(this)
        this.state = { pageContent: [] }
    }

    componentDidMount() {
        this.update()
    }

    componentDidUpdate(prevProps) {
        if(prevProps.page !== this.props.page)
            this.update()
    }

    update() {
        console.log('update: ', this.props.page)
        if (this.props.page !== null) {
            fetch(`/api/web/entity/page/${this.props.page}`, { method: 'get' })
                .then((resp) => {
                    if (!resp.ok)
                        throw Error('')
                    return resp.json()
                })
                .then((resp) => {
                    this.setState({ pageContent: resp })
                })
                .catch((err) => { console.log(err) })
            // ^^ Here could show connection error ^^
        }
    }

    render() {
        console.log('page: ', this.props.page)
        return (
            <Box m={2}>
                {this.state.pageContent && this.state.pageContent.map((val, i) => {
                    return <Box key={i}>{val.content}</Box>
                })}
                <Uploader />
            </Box>
        )
    }
}
