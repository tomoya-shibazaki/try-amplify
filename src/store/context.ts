import { createContext } from 'react';
import { ContextType } from '../types/type';

export const CourseContext = createContext<ContextType>({
    option: [],
    dispatch: null
})