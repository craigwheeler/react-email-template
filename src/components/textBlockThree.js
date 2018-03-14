import React from 'react'
import {Email, Item, A, Box, Image, Span} from 'react-html-email'

const TextBlockThree = () => (

  <Item>
    <Box title="TextBlockThree" cellSpacing={75} align="center" class="mktEditable" id="text_block_3">
      <Item align="center">
        <h2 style={{ textAlign: 'center', fontFamily: 'Calibri, sans-serif', fontWeight: 300, color: '#757575' }}>Contact Us!</h2>
        <p style={{ textAlign: 'center', fontFamily: 'Calibri, sans-serif', fontWeight: 300, color: '#757575', lineHeight: 1.5 }}>
          Contact your account manager for additional details and pricing on Fusion nic shots.
        </p>
        <p style={{ textAlign: 'center' }}>
          <button style={{ backgroundColor: 'red', color: '#fff', height: 40, width: 200, fontSize: 16 }}>Contact Us</button>
        </p>
      </Item>
    </Box>
  </Item>

);

export default TextBlockThree;