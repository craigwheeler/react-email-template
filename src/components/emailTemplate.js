import React from 'react'
import {Email, Item, A, Box, Image} from 'react-html-email'
import Header from './header'
import ImageOne from './image'

const EmailTemplate = () => (
<Email title="Header" style={{backgroundColor: '#fff'}}>
  <Header />
  <ImageOne />
</Email>
);

export default EmailTemplate;