import React from 'react'
import {Email, Item, A, Box, Image, Span} from 'react-html-email'

const headerText = {
  fontFamily: 'Calibri, sans-serif',
  fontSize: 10,
  fontWeight: 300,
  color: '#757575',
}

const Header = () => (

  <Item>
    <Box title="Header" cellSpacing={10} align="center">
      <Item align="center">
        <Span {...headerText}>Stop everything! Your weekly update of all things Nicopure is here.<br/>
        <A color="#757575" textDecoration="none;" class="mktNoTrack" href="{{system.viewAsWebpageLink}}">View as web page</A></Span>
      </Item>
    </Box>
    <Box cellSpacing={20} width="100%" style={{borderTop: '2px solid black'}}>
      <Item align="center">
        <Image data-mc-bar="bar" data-mc-baz="baz" alt="logo" src="https://halocigs.com/media/media/emails/nicopure-logo-180px.png" width={180} height={94}/>
      </Item>
    </Box>
  </Item>

);

export default Header;