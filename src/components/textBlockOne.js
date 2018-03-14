import React from 'react'
import {Email, Item, A, Box, Image, Span} from 'react-html-email'

const sectionText = {
  fontFamily: 'Calibri, sans-serif',
  fontWeight: 300,
  color: '#757575',
}

const TextBlockOne = () => (

  <Item>
    <Box title="TextBlockOne" cellSpacing={25} align="center" class="mktEditable" id="text_block_1">
      <Item align="center">
        <h2 style={{textAlign: 'center'}}><Span {...sectionText}>Quality Base. Value Price.</Span></h2>
        <p style={{textAlign: 'center'}}><Span {...sectionText}>Fusion nic shots are the perfect complement for Shake N Vapes. Available in TPD-registered and compliant 10ml bottles, Fusion nic shots are made to meet rigorous quality standards and provide a great value. Here are just a few of Fusion’s features:</Span></p>
          <ul style={{textAlign: 'left'}}>
            <li>Flavourless nicotine shot (20mg/ml) that can be added to Shake N Vape-style e-liquids</li>
            <li>TPD-Registered and compliant labels</li>
            <li>American-Made quality nicotine shot perfected in state-of-the-art labs</li>
            <li>Pharmaceutical-style peel back label</li>
            <li>Available in 25 countries</li>
            <li>Minimal packaging results in less environmental impact</li>
          </ul>
      </Item>
    </Box>
  </Item>

);

export default TextBlockOne;