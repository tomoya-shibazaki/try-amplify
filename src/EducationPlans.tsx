import React, {useEffect, useState} from 'react';
import Amplify, {API, graphqlOperation} from "aws-amplify";
import {GraphQLResult} from '@aws-amplify/api/lib/types'
import {listEducationPlans} from './graphql/queries'
import { ListEducationPlansQuery } from './API';
import awsmobile from './aws-exports';


Amplify.configure(awsmobile);

type CourseName = {
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string
}

type EducationPlan = {
    id: string,
    courseID: string,
    courseName: CourseName,
    createdAt: string,
    updatedAt: string
}



const EducationPlans: React.FC = () => {
  const [state, setState] = useState<EducationPlan[]>([])
  const [check, setCheck] = useState(false);
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

  const handleUpdate = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCheck(prevCheck => !prevCheck)
  }

  const renderList = state.map((item) => {
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
                <select name="example">
                  <option value="3b23bf44-46b8-4807-94bf-12050cf67308">【事務】情報セキュリティ②（２時間コース）</option>
                  <option value="d31b45c9-e311-485e-b9f8-d255ca202a11">【事務】PowerPoint基礎（４時間コース）</option>
                  <option value="22f45dfa-8787-4301-a7a2-a33a77b05881">【事務】情報セキュリティ①（２時間コース）</option>
                </select>
              </td>
          </tr>
      )
      } else {
        return (
          <tr key={id}>
              <td>{id}</td>
              <td>{courseID}</td>
              <td>{courseName.name}</td>
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