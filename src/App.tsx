import React, {createContext, useReducer, useEffect} from 'react';
import Amplify from "aws-amplify";
import {AmplifyAuthenticator, AmplifySignOut} from '@aws-amplify/ui-react';
import {AuthState, onAuthUIStateChange} from '@aws-amplify/ui-components';
import awsmobile from './aws-exports';
import EducationPlans from './EducationPlans'
import AddEducationPlan from './AddEducationPlans'

type ContextType = {
  state: [];
  dispatch: any;
};

export const CourseContext = createContext<ContextType>({
  state: [],
  dispatch: null
})

Amplify.configure(awsmobile);

const App = () => {
  type Action = {
    type: 'SET',
    payload: []
  }
  const initialState: [] = []
  const reducer = (state: [], action: Action) => {
    switch (action.type) {
      case 'SET':
        return action.payload
      default:
        return action.payload
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  const [authState, setAuthState] = React.useState<AuthState>();

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
    });
  }, [])

  return authState === AuthState.SignedIn ? (
    <CourseContext.Provider value={{ state, dispatch}}>
      <div className="App">
      <AmplifySignOut/>
      <EducationPlans />
      <AddEducationPlan />
      </div>
    </CourseContext.Provider>
  ) : (
    <AmplifyAuthenticator/>
  )
}

export default App