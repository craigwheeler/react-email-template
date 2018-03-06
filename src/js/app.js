import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Email, Item, Image, Box, Span, A, renderEmail} from 'react-html-email';
import styled from 'styled-components';

const HeaderText = styled.div`
  font-size: 10px;
  color: #757575;
  font-weight: 300;
  margin-bottom: 10px;
  font-family: Calibri, sans-serif;
  a {
    color: #999999;
  }
`;

const HeaderLogo = styled.div`
  // border: 1px solid red;
`;

const sourceURL = 'https://raw.githubusercontent.com/chromakode/react-html-email/master/examples/kitchenSink.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
  }

  render() {
    return (
      <Email title="Test Email" style={{backgroundColor: '#fff'}}>
        <Item align="center">
          <HeaderText>
            <p>Stop everything! Your weekly update of all things Nicopure is here.</p>
            <A class="mktNoTrack" href="{{system.viewAsWebpageLink}}">View as web page</A>
          </HeaderText>
        </Item>
        <Item>
          <Box cellSpacing={20} width="100%" style={{borderTop: '2px solid black'}}>
            <Item align="center">
              <HeaderLogo>
                <Image data-mc-bar="bar" data-mc-baz="baz" alt="logo" src="https://halocigs.com/media/media/emails/nicopure-logo-180px.png" width={180} height={94}/>
              </HeaderLogo>
            </Item>
          </Box>
        </Item>
      </Email>
    );
  }
}

export default App;

ReactDOM.render(<App/>, document.getElementById("root"));