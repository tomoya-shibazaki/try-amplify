/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEducationPlan = /* GraphQL */ `
  query GetEducationPlan($id: ID!) {
    getEducationPlan(id: $id) {
      id
      courseCategory
      courseName
      times
      educationType
      years
      workType
      trainigType
      chargeType
      wageType
      createdAt
      updatedAt
    }
  }
`;
export const listEducationPlans = /* GraphQL */ `
  query ListEducationPlans(
    $filter: ModelEducationPlanFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEducationPlans(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        courseCategory
        courseName
        times
        educationType
        years
        workType
        trainigType
        chargeType
        wageType
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
