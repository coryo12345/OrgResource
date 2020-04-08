import React, { Component } from 'react'
import { Button, Box } from '@material-ui/core';
import { PageItem } from './PageItem';

export class Section extends Component {
    /**
     * @param props.title the display title of always shown text
     * @param props.collapsedDefault when false, this group is shown by default
     * @param props.endpoint TODO change this to a module name
     * @param props.settings TODO fetch settings
     */
    constructor(props) {
        super(props)
        this.state = { collapsed: true, pages: [] } // pages = [{id, name}, {id, name}]
        this.toggle = this.toggle.bind(this);
    }

    componentDidMount() {
        if (this.props.collapsedDefault === false) {
            this.setState({ collapsed: false })
        }

        fetch(this.props.endpoint, this.props.settings)
            .then((resp) => {
                if (!resp.ok)
                    throw Error('')
                return resp.json()
            })
            .then((resp) => {
                this.setState({ pages: resp })
            })
            .catch((err) => { console.error(err) })
        // ^^ Here could show connection error ^^
    }

    toggle() {
        this.setState({ collapsed: !this.state.collapsed })
    }

    render() {
        const hiddenStyle = this.state.collapsed ? {} : { maxHeight: window.innerHeight + "px" }
        const hiddenIcon = this.state.collapsed ? '+' : '-'
        return (
            <div>
                <Button color="primary" onClick={this.toggle} style={headerStyle}>
                    <div style={splitStyle}>
                        <span>{this.props.title}</span>
                        <span>{hiddenIcon}</span>
                    </div>
                </Button>
                <div style={Object.assign({}, childStyle, hiddenStyle)}>
                    {this.state.pages && this.state.pages.map((val, i) => {
                        return <PageItem updatePage={this.props.updatePage} val={val}/>
                    })}
                </div>
            </div>
        )
    }
}

const headerStyle = {
    width: '100%'
}

const splitStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between'
}

const childStyle = {
    display: 'block',
    maxHeight: '0',
    transition: 'max-height .2s ease-out',
    overflow: 'hidden',
    paddingLeft: '1rem'
}