/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEducationPlan = /* GraphQL */ `
  query GetEducationPlan($id: ID!) {
    getEducationPlan(id: $id) {
      id
      courseID
      courseName {
        id
        
        name
        createdAt
        updatedAt
      }
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
        courseID
        courseName {
          id
          
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCourse = /* GraphQL */ `
  query GetCourse($id: ID!) {
    getCourse(id: $id) {
      id
      
      name
      createdAt
      updatedAt
    }
  }
`;
export const listCourses = /* GraphQL */ `
  query ListCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
