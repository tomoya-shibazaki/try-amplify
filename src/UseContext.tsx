import React, { useContext, useEffect, useState } from 'react';
import { CourseContext } from './App';
import Amplify, {API, graphqlOperation} from "aws-amplify";
import {GraphQLResult} from '@aws-amplify/api/lib/types'
import {listCourses} from './graphql/queries'
import { ListCoursesQuery } from './API';
import awsmobile from './aws-exports';


Amplify.configure(awsmobile);

type Course = {
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string
}

const UseContext: React.FC = () => {
  const { state, dispatch } = useContext(CourseContext);

  const fetchCourses = async () => {
    // query
    const response = (await API.graphql(
      graphqlOperation(listCourses)
    )) as GraphQLResult
    const Courses = response.data as ListCoursesQuery
    if (Courses.listCourses != null) {
        dispatch({
            type: 'SET',
            payload: Courses.listCourses.items as Course[]
        })
    }
  }

  useEffect(() => {
    fetchCourses()
  }, []);
  console.log(state)
  const renderList = state.map((item, i) => {
    const {
        id,
        name
    } = item

    return (
        <option key={i} value={id}>{name}</option>
    )
})

  return (
    <div>
      <h2>UseContext</h2>
      <select>
        <>{renderList}</>
      </select>
    </div>
  );
};

export default UseContext;