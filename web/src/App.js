import React, { Component } from 'react'
import { Home } from './home/Home'
import { Admin } from './admin/Admin'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"

export class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Router style={pageStyle}>
                <Switch>
                    <Route path="/admin">
                        <Admin s={pageStyle}></Admin>
                    </Route>
                    <Route path="/">
                        <Home s={pageStyle}></Home>
                    </Route>
                </Switch>
            </Router>
        )
    }
}

const pageStyle = {
    minHeight: "100vh",
    width: "100vw"
}