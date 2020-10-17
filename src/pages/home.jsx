import React from 'react'
import JumbotronContainer from '../containers/jumbotron'
import HeaderContainer from '../containers/header'
import FooterContainer from '../containers/footer'
import FaqsContainer from '../containers/faqs'
import { OptForm,Feature } from '../components'
const Home = () => {
    return (
        <>
            <HeaderContainer >
                <Feature >
                    <Feature.Title>Unlimited films ,TV programmes and More </Feature.Title>
                    <Feature.SubTitle>Watch anywhere .Cancel anytime  </Feature.SubTitle>
                
                <OptForm>
                    <OptForm.Input placeholder="email id " />
                    <OptForm.Button  >try it now </OptForm.Button>
                    <OptForm.Text  >Ready to watch ? Enter your email to create or restart a memberShip</OptForm.Text>
                </OptForm>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}

export default Home
