import React, {createContext, useReducer} from 'react';
import { ContextType, Action } from '../types/type';

export const CourseContext = createContext<ContextType>({
  option: [],
  dispatch: null
})

const ContextProvider: React.FC = ({children}) => {
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

  return (
    <CourseContext.Provider value={{ option, dispatch}}>
      {children}
    </CourseContext.Provider>
  )
}

export default ContextProvider