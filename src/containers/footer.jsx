import React from 'react'
import {Footer} from '../components/'
const FooterContainer =() => {
    return (
        <Footer>
            <Footer.Title>Questions ? Contact Us</Footer.Title>
            <Footer.Break />
            <Footer.Row>
                <Footer.Column>
                    <Footer.Link href="#" >FAQ</Footer.Link>
                    <Footer.Link href="#" >Investor Relations</Footer.Link>
                    <Footer.Link href="#" >Ways To Watch</Footer.Link>
                    <Footer.Link href="#" >Corprate Information</Footer.Link>
                    <Footer.Link href="#" >Netflix Original</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Link href="#" >Help Center</Footer.Link>
                    <Footer.Link href="#" >Jobs</Footer.Link>
                    <Footer.Link href="#" >Terms Of Use</Footer.Link>
                    <Footer.Link href="#" >Contact us </Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Link href="#" >Accounts</Footer.Link>
                    <Footer.Link href="#" >Redeem Gift Card</Footer.Link>
                    <Footer.Link href="#" >Privacy Policy</Footer.Link>
                    <Footer.Link href="https://fast.com/" >Speed test </Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Link href="#" >Media center</Footer.Link>
                    <Footer.Link href="#" >Buy Gift Card</Footer.Link>
                    <Footer.Link href="#" >Cookie Prefrences</Footer.Link>
                    <Footer.Link href="#" >Legal Notices </Footer.Link>
                </Footer.Column>
            </Footer.Row>
            <Footer.Break />
            <Footer.Text>Netflix India </Footer.Text>
        </Footer>
    )
}

export default FooterContainer 
