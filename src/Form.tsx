import React, {FC, useState} from 'react'
import Amplify, {API, graphqlOperation} from "aws-amplify"
import {createEducationPlan} from "./graphql/mutations"
import awsmobile from './aws-exports'

Amplify.configure(awsmobile)

const Form: FC = () => {
  const [ state, setState ] = useState({
    courseCategory: '' ,
    courseName: '',
    times: '',
    educationType: '',
    years: '',
    workType: '',
    trainigType: '',
    chargeType: '',
    wageType: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    const target = e.target;
    const name = target.name;
    setState(() => {
      return {...state, [name]: target.value };
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

  const submitAlert = (e: React.MouseEvent) => {
    e.persist();
    e.preventDefault();
    const error = Object.values(state).some((value) => {
      return value.length === 0
    });

    if(error) {
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
      <button onClick={submitAlert}>新規割当追加</button>
      <form>
        <div className="ui form">
          <div className="nine fields">
            <div className="field">
              <label>講座カテゴリ</label>
              <input 
                type="text" 
                name="courseCategory" 
                value={state.courseCategory} 
                onChange={e => handleInputChange(e)} 
                placeholder="講座カテゴリ"
                required />
            </div>
            <div className="field">
              <label>コース名</label>
              <input 
                type="text" 
                name="courseName" 
                value={state.courseName} 
                onChange={e => handleInputChange(e)} 
                placeholder="コース名"
                required />
            </div>
            <div className="field">
              <label>時間</label>
              <input 
                type="nubmer" 
                name="times" 
                value={state.times} 
                onChange={e => handleInputChange(e)} 
                placeholder="時間"
                required />
            </div>
            <div className="field">
              <label>教育区分</label>
              <input 
                type="text" 
                name="educationType" 
                value={state.educationType} 
                onChange={e => handleInputChange(e)} 
                placeholder="教育区分"
                required />
            </div>
            <div className="field">
              <label>年度</label>
              <input 
                type="nubmer" 
                name="years" 
                value={state.years} 
                onChange={e => handleInputChange(e)} 
                placeholder="年度"
                required />
            </div>
            <div className="field">
              <label>派遣労働者の種別</label>
              <input 
                type="text" 
                name="workType" 
                value={state.workType} 
                onChange={e => handleInputChange(e)} 
                placeholder="派遣労働者の種別"
                required />
            </div>
            <div className="field">
              <label>訓練方法の種別</label>
              <input 
                type="text" 
                name="trainigType" 
                value={state.trainigType} 
                onChange={e => handleInputChange(e)} 
                placeholder="訓練方法の種別"
                required />
            </div>
            <div className="field">
              <label>訓練費負担の種別</label>
              <input 
                type="text" 
                name="chargeType" 
                value={state.chargeType} 
                onChange={e => handleInputChange(e)} 
                placeholder="訓練費負担の種別"
                required />
            </div>
            <div className="field">
              <label>賃金支給の種別</label>
              <input 
                type="text" 
                name="wageType" 
                value={state.wageType} 
                onChange={e => handleInputChange(e)} 
                placeholder="賃金支給の種別"
                required />
            </div>
          </div>
        </div>
      </form>
   </>
  )
}

export default Form;