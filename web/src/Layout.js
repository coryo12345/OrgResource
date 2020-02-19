import React, { Component } from 'react'
import { Container, Grid } from '@material-ui/core'

export class Layout extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Container style={containerStyle}>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    style={gridStyle}>
                    {this.props.children}
                </Grid>
            </Container>
        )
    }
}

const containerStyle = {
    height: "100%"
}

const gridStyle = {
    height: "100%"
}