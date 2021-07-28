import React, {useEffect} from 'react';
import Amplify from "aws-amplify";
import {AmplifyAuthenticator, AmplifySignOut} from '@aws-amplify/ui-react';
import {AuthState, onAuthUIStateChange} from '@aws-amplify/ui-components';
import awsmobile from './aws-exports';
import EducationPlans from './EducationPlans'
import Form from './Form'


Amplify.configure(awsmobile);

const App = () => {
  const [authState, setAuthState] = React.useState<AuthState>();

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
    });
  }, [])

  return authState === AuthState.SignedIn ? (
    <div className="App">
      <EducationPlans />
      <br />
      <hr />
      <br />
      <Form />
      <AmplifySignOut/>
    </div>
  ) : (
    <AmplifyAuthenticator/>
  )
}

export default App