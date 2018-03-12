import React from 'react'
import {Email, Item, A, Box, Image} from 'react-html-email'

const ImageOne = () => (

  <Item title="Image One">
    <Box cellSpacing={15} >
      <Image data-mc-bar="bar" data-mc-baz="baz" alt="Image One" src="./img/header_fusion.jpg" />
    </Box>
  </Item>

);

export default ImageOne;