import React from 'react'


import Link from 'next/link'



const linkStyle = {
    marginRight: '15px',
    float: 'right',
    paddingTop: '15px',
    color: '#ffffff'
}

const headerStyle = {
    background: '#ffbd4a',
    height: '50px',
    paddingLeft: '20px',
    paddingRight: '20px'

}

const imageStyle = {
    padding: '5px'
}

const Header = () => (
  <div style={headerStyle}>
    <div>
        <Link href="/about">
            <a style={linkStyle}>About</a>
        </Link>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <style jsx>{`
      h1, a {
        font-family: "Arial";
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
    </div>
    <div style={imageStyle}>
        <Link href="/">
            <img src="/static/LPwhite.png" alt="LP Freelance" height="40px"/>
        </Link>
    </div>
  </div>
)

export default Header