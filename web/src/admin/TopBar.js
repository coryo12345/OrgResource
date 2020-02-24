import React, { Component } from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import { MenuRounded } from '@material-ui/icons'

export class TopBar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={this.props.toggleMenu}>
                        <MenuRounded />
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        {this.props.name}
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}
