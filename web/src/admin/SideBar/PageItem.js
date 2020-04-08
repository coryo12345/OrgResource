import React, { Component } from 'react'
import { Button, Box } from '@material-ui/core';

export class PageItem extends Component {
    render() {
        return (
            <Box key={this.props.val.id}>
                <Button style={fullStyle} onClick={() => { this.props.updatePage(this.props.val.id) }}>{this.props.val.display_name}</Button>
            </Box>
        )
    }
}

const fullStyle = {
    width: '100%',
    textAlign: 'left',
    justifyContent: 'left'
}