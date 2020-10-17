import React from 'react';
import * as Routes from './constants/routes'
import { Switch,  } from "react-router-dom"
import {Home,Browse,SignUp,SignIn} from './pages';
import {IsUserRedirect, ProtectedRoute} from './helpers/routes'
import {useAuthListener} from './hooks'
function App() {
const  {user}=useAuthListener();

  return (
    <>
      <Switch>
        <IsUserRedirect user={user} loggedInPath={Routes.BROWSE} exact path={Routes.SIGN_IN} >
          <SignIn/>
        </IsUserRedirect>
        <ProtectedRoute exact user={user} path={Routes.BROWSE} >
          <Browse/>
        </ProtectedRoute>
        <IsUserRedirect user={user} loggedInPath={Routes.BROWSE} exact path={Routes.SIGN_UP} >
          <SignUp/>
        </IsUserRedirect>
        <IsUserRedirect user={user} loggedInPath={Routes.BROWSE} exact path={Routes.HOME} >
          <Home/>
        </IsUserRedirect>
      </Switch>

    </>
  );
}

export default App;
