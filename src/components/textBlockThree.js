import React from 'react'
import {Email, Item, A, Box, Image, Span} from 'react-html-email'

const sectionText = {
  fontFamily: 'Calibri, sans-serif',
  fontSize: 16,
  fontWeight: 300,
  color: '#757575',
  lineHeight: 26,
}

const TextBlockThree = () => (

  <Item title="TextBlockThree">
    <Box cellSpacing={75} align="center">
      <Item align="center">
        <Span {...sectionText}>
          <h2>Contact Us!</h2>
          <p>Contact your account manager for additional details and pricing on Fusion nic shots.</p>
          <button style={{ backgroundColor: 'red', color: '#fff', height: 40, width: 200, fontSize: 16 }}>Contact Us</button>
        </Span>
      </Item>
    </Box>
  </Item>

);

export default TextBlockThree;