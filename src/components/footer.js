import React from 'react'
import {Email, Item, A, Box, Image, Span} from 'react-html-email'

const footerText = {
  fontFamily: 'Calibri, sans-serif',
  fontSize: 10,
  fontWeight: 300,
  color: '#757575',
  textAlign: "center",
  lineHeight: 16,
}

const Footer = () => (

  <Item title="Footer">
    <Box cellSpacing={25} style={{backgroundColor: '#f7f7f7'}}>
      <Item>
        <Box cellSpacing={10} width="100%">
          <Item align="center">
            <A textDecoration="none" href="#">
              <Image style={{display: 'inline', margin: '0 5px'}} alt="icon-facebook" src="https://www.halocigs.com/media/wysiwyg/emails/icons-g/facebook.png" width="30" vspace="0" hspace="0" border="0" />
            </A>
            <A textDecoration="none" href="#">
              <Image style={{display: 'inline', margin: '0 5px'}} alt="icon-twitter" src="https://www.halocigs.com/media/wysiwyg/emails/icons-g/twitter.png" width="30" vspace="0" hspace="0" border="0" />
            </A>
            <A textDecoration="none" href="#">
              <Image style={{display: 'inline', margin: '0 5px'}} alt="icon-googleplus" src="https://www.halocigs.com/media/wysiwyg/emails/icons-g/googleplus.png" width="30" vspace="0" hspace="0" border="0" />
            </A>
            <A textDecoration="none" href="#">
              <Image style={{display: 'inline', margin: '0 5px'}} alt="icon-pinterest" src="https://www.halocigs.com/media/wysiwyg/emails/icons-g/pinterest.png" width="30" vspace="0" hspace="0" border="0" />
            </A>
            <A textDecoration="none" href="#">
              <Image style={{display: 'inline', margin: '0 5px'}} alt="icon-instagram" src="https://www.halocigs.com/media/wysiwyg/emails/icons-g/instagram.png" width="30" vspace="0" hspace="0" border="0" />
            </A>
          </Item>
          <Item align="center">
            <Image data-mc-bar="bar" data-mc-baz="baz" alt="footer-logo" src="./img/nicopure-dark.png" width={120}/>
          </Item>
        </Box>
      </Item>
      <Item align="center">
        <Span {...footerText}><p>7916 Evolutions Way Suite 200, Trinity, Florida 34655 United States</p>
        <A textDecoration="none" class="mktNoTrack" href="{{system.viewAsWebpageLink}}" style={{color: '#757575'}}>Forward email to friend</A>
        <br/>
        <A textDecoration="none" class="mktNoTrack" href="{{system.viewAsWebpageLink}}" style={{color: '#757575'}}>Unsubscribe</A></Span>
      </Item>
      <Item align="center">
        <Box align="center">
          <Item>
            <Span {...footerText}><p style={{textAlign: 'center'}}>Terms and conditions apply. Promotions vary and may not always require a coupon code. If a coupon code is provided, it must be entered at the point-of-sale for discount to be applied. Not applicable to clearance items. Coupons cannot be retroactively applied to existing orders. Offer cannot be used with other discounts or coupons. NOT FOR SALE TO MINORS. Our products are intended for sale to adults of legal smoking and vaping age in their relevant jurisdiction. CALIFORNIA PROPOSITION 65 - Warning: This product contains nicotine, a chemical known to the state of California to cause birth defects or other reproductive harm.</p></Span>
          </Item>
        </Box>
      </Item>
    </Box>
  </Item>

);

export default Footer;