import React from 'react'
import {Email, Item, A, Box, Image} from 'react-html-email'

const Header = () => (

  <Email title="Header" style={{backgroundColor: '#fff'}}>
    <Item align="center">
      <p>Stop everything! Your weekly update of all things Nicopure is here.</p>
      <A class="mktNoTrack" href="{{system.viewAsWebpageLink}}">View as web page</A>
    </Item>
    <Item>
      <Box cellSpacing={20} width="100%" style={{borderTop: '2px solid black'}}>
        <Item align="center">
          <Image data-mc-bar="bar" data-mc-baz="baz" alt="logo" src="https://halocigs.com/media/media/emails/nicopure-logo-180px.png" width={180} height={94}/>
        </Item>
      </Box>
    </Item>
  </Email>

);

export default Header;