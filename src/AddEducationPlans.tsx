import React, {FC, useState} from 'react'
import Amplify, {API, graphqlOperation} from "aws-amplify"
import {createEducationPlan} from "./graphql/mutations"
import awsmobile from './aws-exports'
import CourseOption from './CourseOption'
import UseContext from './UseContext'

Amplify.configure(awsmobile)


const AddEducationPlan: FC = () => {
  const [ state, setState ] = useState({
    courseID: '',
  })

  const handleSelectChange = (e: React.FormEvent<HTMLSelectElement>) => {
    let name: string = e.currentTarget.name;
    let value: string = e.currentTarget.value;

    setState({
      ...state, [name]: value
    })
  }

  const addEducationPlan = async () => {
    try {
      // mutation
      await API.graphql(
        graphqlOperation(createEducationPlan, {
          input: {
            ...state
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

    if(state.courseID === '選択してください') {
      alert('未入力項目があります')
    } else {
      alert('送信します')
      console.log(state)
      addEducationPlan()
      console.log('送信しました')
    }

  }

  return (
    <>
      <button onClick={handleSubmit}>新規割当追加</button>
      <form>
        <div className="ui form">
          <div className="two fields">
            <div className="field">
              <label>講座名</label>
              <select
                name="courseID" 
                value={state.courseID} 
                onChange={e => handleSelectChange(e)} 
              >
              <CourseOption />
              </select>
            </div>
          </div>
        </div>
      </form>
      <UseContext />
   </>
  )
}

export default AddEducationPlan;