import React, {useEffect} from 'react';
import Amplify from "aws-amplify";
import {AmplifyAuthenticator, AmplifySignOut} from '@aws-amplify/ui-react';
import {AuthState, onAuthUIStateChange} from '@aws-amplify/ui-components';
import awsmobile from './aws-exports';
import EducationList from './screen/EducationList'
import ContextProvider from './store/ContextProvider'


Amplify.configure(awsmobile);

const App = () => {
  const [authState, setAuthState] = React.useState<AuthState>();

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
    });
  }, [])

  return authState === AuthState.SignedIn ? (
    <ContextProvider>
      <div className="App">
      <AmplifySignOut/>
      <EducationList />
      </div>
    </ContextProvider>
  ) : (
    <AmplifyAuthenticator/>
  )
}

export default App