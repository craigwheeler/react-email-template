import React from 'react'
import {Email, Item, A, Box, Image, Span} from 'react-html-email'

const sectionText = {
  fontFamily: 'Calibri, sans-serif',
  fontSize: 16,
  fontWeight: 300,
  color: '#757575',
  lineHeight: 26,
}

const TextBlockTwo = () => (

  <Item>
    <Box title="TextBlockTwo" cellSpacing={20} align="center">
      <Item align="center">
        <Span {...sectionText}>
          <h2>Free Display with Purchase!</h2>
          <p>Every 12 bottles of Fusion you buy comes with a pre-packaged, easy-to-use display. Contact your account manager for more information today!</p>
        </Span>
      </Item>
    </Box>
  </Item>

);

export default TextBlockTwo;