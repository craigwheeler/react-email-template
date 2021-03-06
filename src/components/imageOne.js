import React from 'react'
import {Email, Item, A, Box, Image} from 'react-html-email'

const ImageOne = () => (

  <Item>
    <Box title="Image One" class="mktEditable" id="image_1">
      <Item>
        <Image style={{ marginBottom: '10px' }} data-mc-bar="bar" data-mc-baz="baz" alt="Image One" src="https://www.halocigs.com/blog/wp-content/uploads/2018/03/2018_Wholesale-header-Fusion_610x165.jpg" />
      </Item>
    </Box>
  </Item>

);

export default ImageOne;