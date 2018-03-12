import React from 'react'
import {Email, Item, A, Box, Image} from 'react-html-email'
import Header from './header'
import ImageOne from './imageOne'
import ImageTwo from './imageTwo'
import TextBlockOne from './textBlockOne'
import ImageThree from './imageThree'

const EmailTemplate = () => (
  <Email style={{backgroundColor: '#fff'}}>
    <Header/>
    <ImageOne/>
    <ImageTwo/>
    <TextBlockOne/>
    <ImageThree/>
  </Email>
);

export default EmailTemplate;