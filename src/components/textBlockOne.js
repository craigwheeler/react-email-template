import React from 'react'
import {Email, Item, A, Box, Image, Span} from 'react-html-email'

const sectionText = {
  fontFamily: 'Calibri, sans-serif',
  fontSize: 16,
  fontWeight: 300,
  color: '#757575',
  lineHeight: 26,
}

const TextBlockOne = () => (

  <Item>
    <Box title="TextBlockOne" cellSpacing={25} align="center">
      <Item align="center">
        <Span {...sectionText}>
          <h2>Quality Base. Value Price.</h2>
          <p>Fusion nic shots are the perfect complement for Shake N Vapes. Available in TPD-registered and compliant 10ml bottles, Fusion nic shots are made to meet rigorous quality standards and provide a great value. Here are just a few of Fusion’s features:</p>
          <ul style={{textAlign: 'left'}}>
            <li>Flavourless nicotine shot (20mg/ml) that can be added to Shake N Vape-style e-liquids</li>
            <li>TPD-Registered and compliant labels</li>
            <li>American-Made quality nicotine shot perfected in state-of-the-art labs</li>
            <li>Pharmaceutical-style peel back label</li>
            <li>Available in 25 countries</li>
            <li>Minimal packaging results in less environmental impact</li>
          </ul>
        </Span>
      </Item>
    </Box>
  </Item>

);

export default TextBlockOne;