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
export const updateEducationPlan = /* GraphQL */ `
  mutation UpdateEducationPlan(
    $input: UpdateEducationPlanInput!
    $condition: ModelEducationPlanConditionInput
  ) {
    updateEducationPlan(input: $input, condition: $condition) {
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
export const deleteEducationPlan = /* GraphQL */ `
  mutation DeleteEducationPlan(
    $input: DeleteEducationPlanInput!
    $condition: ModelEducationPlanConditionInput
  ) {
    deleteEducationPlan(input: $input, condition: $condition) {
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
