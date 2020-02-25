import React, { Component } from 'react'
import { AppBar, Toolbar, IconButton, Typography, Grid } from '@material-ui/core'
import { MenuRounded } from '@material-ui/icons'
import { Logout } from '../home/Logout'

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
                    <Typography variant="h6" color="inherit" style={{ flex: 1 }}>
                        {this.props.name}
                    </Typography>
                    <Logout />
                </Toolbar>
            </AppBar>
        )
    }
}
