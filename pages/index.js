import React from 'react'

import Fullpage, { FullpageSection } from '@ap.cx/react-fullpage'

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
    top: '30%',
    fontSize: '-webkit-xxx-large',
    textAlign: 'center',
    width: '100%',
    color: 'white',
    paddingLeft: '20px',
    paddingRight: '20px',
    fontFamily: 'sans-serif'
}
/*
export default class App extends Component {
    render () {
        return (
            <Fullpage>
                <FullpageSection style={{
                    backgroundColor: 'lime',
                    height: '80vh',
                    padding: '1em',
                }}>1</FullpageSection>
                <FullpageSection style={{
                    backgroundColor: 'coral',
                    padding: '1em',
                }}>2</FullpageSection>
                <FullpageSection style={{
                    backgroundColor: 'firebrick',
                    padding: '1em',
                }}>3</FullpageSection>
            </Fullpage>
        )
    }
}
*/
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

/*
import ReactDOM from 'react-dom';
import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
import ReactFullpage from '@fullpage/react-fullpage';


const FullpageWrapper = () => (
    <ReactFullpage
        render={({ state, fullpageApi }) => {
            return (
                <div>
                    <div className="section">
                        <p>Section 1 (welcome to fullpage.js)</p>
                        <button onClick={() => fullpageApi.moveSectionDown()}>Click me to move down</button>
                    </div>
                    <div className="section">
                        <p>Section 2</p>
                    </div>
                </div>
            );
        }}
    />
);

ReactDOM.render(<FullpageWrapper />, document.getElementById('react-root'));
*/