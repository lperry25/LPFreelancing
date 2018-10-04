import React, { Component } from 'react'

import ReactPageScroller from "react-page-scroller";

/*
goToPage = (pageNumber) => {
    this.reactPageScroller.goToPage(pageNumber);
}

export default class App extends Component {
    render() {
        return (
            <ReactPageScroller ref={c => this.reactPageScroller = c}>
                <h1>Hello</h1>
            </ReactPageScroller>
        )
    }
}
*/

import Fullpage, { FullpageSection } from '@ap.cx/react-fullpage'

import  Header from '../components/Header.js'
import Layout from '../components/MyLayout.js'

/*import WebFont from 'webfontloader';

WebFont.load({
    google: {
        families: ['Titillium Web:300,400,700', 'sans-serif']
    }
});
*/
import Link from 'next/link'


const textBlock = {
    position: 'absolute',
    top: '0',
    fontSize: '-webkit-xxx-large',
    textAlign: 'center',
    width: '100%',
    color: 'white',
    paddingLeft: '20px',
    paddingRight: '20px',
    fontFamily: 'sans-serif'
}


export default class App extends Component {
    render () {
        return (
            <div>
                <Header/>
                <Fullpage>
                    <FullpageSection style={{
                        padding: '1em'
                    }}>
                        <img src="/static/banner2.jpg" alt="Banner Image" width="100%"/>
                        <div style={textBlock}>
                            <h1>LP Freelancing</h1>
                            <p>Software development to meet your needs</p>
                        </div>
                    </FullpageSection>
                    <FullpageSection style={{
                        backgroundColor: 'coral',
                        padding: '1em',
                    }}>2</FullpageSection>
                    <FullpageSection style={{
                        backgroundColor: 'firebrick',
                        padding: '1em',
                    }}>3</FullpageSection>
                </Fullpage>
            </div>
        )
    }
}

/*
export default () => (
    <Layout>
        <div>
            <img src="/static/banner2.jpg" alt="Banner Image" width="100%"/>
            <div style={textBlock}>
                <h1>LP Freelancing</h1>
                <p>Software development to meet your needs</p>
            </div>
        </div>
    </Layout>
)
*/


