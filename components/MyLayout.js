import React from 'react'


import Header from './Header'



const layoutStyle = {
   // margin: 20,
 //   padding: 20,
   // border: '1px solid #DDD'
    //background: '#391f67'
}

const Layout = (props) => (
	<div>
		<Header/>
	    <div style={layoutStyle}>
	        
	        {props.children}
	    </div>
	</div>
)

export default Layout