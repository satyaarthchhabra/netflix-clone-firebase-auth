import React, { useState, useContext } from 'react'
import { FirebaseContext } from '../context/firebase'
import { useHistory } from 'react-router-dom'
import { Form } from '../components'
import FooterContainer from '../containers/footer'
import * as Routes from '../constants/routes'
import HeaderContainer from '../containers/header'


const SignIn = () => {
    const {firebase} =useContext(FirebaseContext);
    const history = useHistory();
    const [emailAdress, setEmailAdress] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const isInvalid = password === "" || emailAdress === "";
    const handleSignIn = (e) => {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(emailAdress, password).then(() => {
            history.push(Routes.BROWSE)
        }).catch((e) => {
            setEmailAdress('')
            setPassword('')
            setError(e.message)
        })

    }
    return (<>
        <HeaderContainer>
            <Form>
                <Form.Title>Sign In</Form.Title>
                {error && <Form.Error >{error}</Form.Error>}
                <Form.Base onSubmit={handleSignIn} method="POST">
                    <Form.Input placeholder="Email address pls" value={emailAdress} onChange={(e) => setEmailAdress(e.target.value)} />
                    <Form.Input type="password" autoComplete="off" placeholder="password pls" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <Form.Submit disabled={isInvalid} type="submit" >
                        Sign In
                </Form.Submit>
                </Form.Base>
                <Form.Text>
                    new to netflix <Form.Link to="/signup" >sign up now </Form.Link>
                </Form.Text>
                <Form.TextSmall>this page is protected by Google reCaptcha to ensure you are not a bot .Learn more </Form.TextSmall>
            </Form>
        </HeaderContainer>
        <FooterContainer />

    </>
    )
}

export default SignIn
