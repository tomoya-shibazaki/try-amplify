import React, {useEffect, useState} from 'react';
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

const CourseOption: React.FC = () => {
  const [state, setState] = useState<Course[]>([])
  const fetchCourses = async () => {
    // query
    const response = (await API.graphql(
      graphqlOperation(listCourses)
    )) as GraphQLResult
    const Courses = response.data as ListCoursesQuery
    if (Courses.listCourses != null) {
      setState(Courses.listCourses.items as Course[])
    }
  }
  useEffect(() => {
      fetchCourses()
  }, [])

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
    <>
    <option value={'選択してください'}>選択してください</option>
    {renderList}
    </>
  )
}

export default CourseOption