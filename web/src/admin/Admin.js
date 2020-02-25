import React, { Component } from 'react'
import { TopBar } from './TopBar'
import { SideBar } from './SideBar'
import { Page } from './Page'

export class Admin extends Component {
    constructor(props) {
        super(props)
        this.toggleMenu = this.toggleMenu.bind(this)
        this.updatePage = this.updatePage.bind(this)
        this.state = { entity: null, entityDisplayName: null, menuShown: true, pageContent: null }
    }

    componentDidMount() {
        fetch('/api/web/entity/info', { method: 'get' })
            .then((resp) => {
                if (!resp.ok)
                    throw Error('')
                return resp.json()
            })
            .then((resp) => {
                this.setState({ entity: resp.domain, entityDisplayName: resp.display_name })
            })
            .catch((err) => {
                window.location = '/'
            })
        // ^^ Here could show connection error ^^
    }

    toggleMenu() {
        this.setState({ menuShown: !this.state.menuShown })
    }

    updatePage(pageId) {
        console.log(pageId)
        this.setState({ pageContent: pageId })
    }

    render() {
        console.log(this.state.pageContent);
        let innerComponent = <Page page={this.state.pageContent} />
        let gridShow = (this.state.menuShown === true) ? { gridTemplateColumns: '260px 1fr' } : { gridTemplateColumns: '0 1fr' }
        let sidebarShow = (this.state.menuShown === true) ? { display: 'block' } : { display: 'none' }
        return (
            <div>
                <TopBar name={this.state.entityDisplayName} toggleMenu={this.toggleMenu} />
                <div style={Object.assign({}, gridStyle, gridShow)}>
                    <SideBar style={sidebarShow} updatePage={this.updatePage}/>
                    {innerComponent}
                </div>
            </div>
        )
    }
}

const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '260px 1fr',
    width: '100%',
    height: '100vh'
}