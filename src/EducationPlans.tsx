import React, {useEffect, useState} from 'react'
import Amplify, {API, graphqlOperation} from "aws-amplify"
import {GraphQLResult} from '@aws-amplify/api/lib/types'
import {listEducationPlans} from "./graphql/queries"
import awsmobile from './aws-exports'
import {ListEducationPlansQuery} from './API'

Amplify.configure(awsmobile)

type EducationPlan = {
  id: string,
  courseCategory: string,
  courseName: string,
  times: number,
  educationType: string,
  years: number,
  workType: string,
  trainigType: string,
  chargeType: string,
  wageType: string,
  createdAt: string,
  updatedAt: string,
}


const EducationPlans: React.FC = () => {
  const [state, setState] = useState<EducationPlan[]>([])
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
  useEffect(() => {
    fetchEducationPlans()
  }, [])

  const renderList = state.map((item) => {
    const { 
      id,
      courseCategory,
      courseName,
      times,
      educationType,
      years,
      workType,
      trainigType,
      chargeType,
      wageType
    } = item

    return(
      <tr key={id}>
        <td>{courseCategory}</td>
        <td>{courseName}</td>
        <td>{times}</td>
        <td>{educationType}</td>
        <td>{years}</td>
        <td>{workType}</td>
        <td>{trainigType}</td>
        <td>{chargeType}</td>
        <td>{wageType}</td>
      </tr>
    )
})
  return (
    <div>
    　　<table className='ui celled table'>
          <thead>
            <tr>
              <th>講座カテゴリ</th>
              <th>コース名</th>
              <th>時間</th>
              <th>教育区分</th>
              <th>年度</th>
              <th>派遣労働者の種別</th>
              <th>訓練方法の種別</th>
              <th>訓練費負担の種別</th>
              <th>賃金支給の種別</th>
            </tr>
          </thead>
        <tbody>
          <>{renderList}</>
        </tbody>
      </table>
  </div>
  )
}
export default EducationPlans