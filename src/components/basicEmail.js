import React from 'react'
import {Email, Item, A} from 'react-html-email'

const BasicEmail = () => (

  <Email title='Basic Email'>
    <Item>
      <A href="#" style={{paddingLeft: 10}}>Hello World!</A>
    </Item>
  </Email>

);

export default BasicEmail;