import React, {createContext, useReducer, useEffect} from 'react';
import Amplify from "aws-amplify";
import {AmplifyAuthenticator, AmplifySignOut} from '@aws-amplify/ui-react';
import {AuthState, onAuthUIStateChange} from '@aws-amplify/ui-components';
import awsmobile from './aws-exports';
import EducationList from './screen/EducationList'

type ContextType = {
  option: [];
  dispatch: any;
};

export const CourseContext = createContext<ContextType>({
  option: [],
  dispatch: null
})

Amplify.configure(awsmobile);

const App = () => {
  type Action = {
    type: 'SET',
    payload: []
  }
  const initialState: [] = []
  const reducer = (option: [], action: Action) => {
    switch (action.type) {
      case 'SET':
        return action.payload
      default:
        return action.payload
    }
  }
  const [option, dispatch] = useReducer(reducer, initialState)
  const [authState, setAuthState] = React.useState<AuthState>();

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
    });
  }, [])

  return authState === AuthState.SignedIn ? (
    <CourseContext.Provider value={{ option, dispatch}}>
      <div className="App">
      <AmplifySignOut/>
      <EducationList />
      </div>
    </CourseContext.Provider>
  ) : (
    <AmplifyAuthenticator/>
  )
}

export default App