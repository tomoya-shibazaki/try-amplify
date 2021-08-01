import React, {useEffect, useState, useContext} from 'react';
import { CourseContext } from '../store/ContextProvider';
import Amplify, {API, graphqlOperation} from "aws-amplify";
import {GraphQLResult} from '@aws-amplify/api/lib/types'
import {listEducationPlans, listCourses} from '../graphql/queries'
import {createEducationPlan, updateEducationPlan, deleteEducationPlan} from "../graphql/mutations"
import { ListEducationPlansQuery, ListCoursesQuery } from '../API';
import awsmobile from '../aws-exports';
import { EducationPlan, Course } from '../types/type'



Amplify.configure(awsmobile);


const EducationList: React.FC = () => {
  let selectText = '選択してください'
  const [ course, setCourse ] = useState({
    courseID: selectText,
  })
  const [state, setState] = useState<EducationPlan[]>([])
  const [check, setCheck] = useState(false)
  const { option, dispatch } = useContext(CourseContext);


  const fetchEducationPlans = async () => {
    // query
    const response = (await API.graphql(
      graphqlOperation(listEducationPlans)
    )) as GraphQLResult
    const EducationPlans = response.data as ListEducationPlansQuery
    if (EducationPlans.listEducationPlans != null) {
      setState(EducationPlans.listEducationPlans.items as EducationPlan[])
    }
  }

  const clearEducatioinPlan = async (id: string) => {
    try {
      // mutation
      await API.graphql(
        graphqlOperation(deleteEducationPlan, {
          input: {
            id: id, 
          }
        })
      )
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchEducationPlans()

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
    fetchCourses()
  }, [dispatch])

  const handleUpdate = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCheck(prevCheck => !prevCheck)
    if (check) {
      fetchEducationPlans()
    }
  }


  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    alert(`${id}を削除しますか？`)
    clearEducatioinPlan(id)
    fetchEducationPlans()
  }
  

  const handleSelectChange = (e: React.FormEvent<HTMLSelectElement>) => {
    let name: string = e.currentTarget.name;
    let value: string = e.currentTarget.value;

    setCourse({
      ...course, [name]: value
    })
  }

  const renewEducationPlan = async (id: string, course_id: string) => {
    try {
      // mutation
      await API.graphql(
        graphqlOperation(updateEducationPlan, {
          input: {
            id: id, 
            courseID: course_id
          }
        })
      )
    } catch (err) {
      console.log(err)
    }
  }

  const handleSelectResultChange = (e: React.FormEvent<HTMLSelectElement>, i: number) => {
    let value: string = e.currentTarget.value;
    let newState = [...state]
    newState[i]['courseName']['id'] = value
    setState([
      ...newState,
    ])
    renewEducationPlan(state[i]['id'], value)
  }

  const addEducationPlan = async () => {
    try {
      // mutation
      await API.graphql(
        graphqlOperation(createEducationPlan, {
          input: {
            ...course
          }
        })
      )
    } catch (err) {
      console.log(err)
    }
  }

  const handleSubmit = (e: React.MouseEvent) => {
    e.persist();
    e.preventDefault();
    // const error = Object.values(state).some((value) => {
    //   return value.length === 0
    // });

    if(course.courseID === selectText) {
      alert(selectText)
    } else {
      alert('追加します')
      addEducationPlan()
      fetchEducationPlans()
    }

  }

  const renderOptionList = option.map((item, i) => {
    const {
        id,
        name
    } = item

    return (
        <option key={i} value={id}>{name}</option>
    )
  })

  const renderResultList = state.map((item, i) => {
      const {
          id,
          courseID,
          courseName
      } = item

      if (check) {
        return (
          <tr key={id}>
              <td>{id}</td>
              <td>{courseID}</td>
              <td>
                <select
                  name="ResultcourseID" 
                  value={courseName.id}
                  onChange={e => handleSelectResultChange(e, i)} 
                >
                  {/* <option value={selectText}>{selectText}</option> */}
                  {renderOptionList}
                </select>
              </td>
              <td></td>
          </tr>
      )
      } else {
        return (
          <tr key={id}>
              <td>{id}</td>
              <td>{courseID}</td>
              <td>{courseName.name}</td>
              <td><button onClick={e => handleDelete(e, id)}>削除</button></td>
          </tr>
      )
      }
  })


  return (
    <div>
      <h1>教育計画編集画面</h1>
      <button onClick={e => handleUpdate(e)}>{check ? '完了' : '更新'}</button>
      <table className='ui table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>講座ID</th>
            <th>講座名</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
            <>{renderResultList}</>
        </tbody>
      </table>
      <button onClick={handleSubmit}>新規割当追加</button>
      <form>
        <div className="ui form">
          <div className="four fields">
            <div className="field">
              <label>講座名</label>
              <select
                name="courseID" 
                value={course.courseID} 
                onChange={e => handleSelectChange(e)} 
              >
                <option value={selectText}>{selectText}</option>
                {renderOptionList}
              </select>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default EducationList