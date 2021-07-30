/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEducationPlan = /* GraphQL */ `
  mutation CreateEducationPlan(
    $input: CreateEducationPlanInput!
    $condition: ModelEducationPlanConditionInput
  ) {
    createEducationPlan(input: $input, condition: $condition) {
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
export const updateEducationPlan = /* GraphQL */ `
  mutation UpdateEducationPlan(
    $input: UpdateEducationPlanInput!
    $condition: ModelEducationPlanConditionInput
  ) {
    updateEducationPlan(input: $input, condition: $condition) {
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
export const deleteEducationPlan = /* GraphQL */ `
  mutation DeleteEducationPlan(
    $input: DeleteEducationPlanInput!
    $condition: ModelEducationPlanConditionInput
  ) {
    deleteEducationPlan(input: $input, condition: $condition) {
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
export const createCourse = /* GraphQL */ `
  mutation CreateCourse(
    $input: CreateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    createCourse(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const updateCourse = /* GraphQL */ `
  mutation UpdateCourse(
    $input: UpdateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    updateCourse(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const deleteCourse = /* GraphQL */ `
  mutation DeleteCourse(
    $input: DeleteCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    deleteCourse(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
