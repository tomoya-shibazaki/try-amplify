/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateEducationPlanInput = {
  id?: string | null,
  courseCategory: string,
  courseName: string,
  times: number,
  educationType: string,
  years: number,
  workType: string,
  trainigType: string,
  chargeType: string,
  wageType: string,
};

export type ModelEducationPlanConditionInput = {
  courseCategory?: ModelStringInput | null,
  courseName?: ModelStringInput | null,
  times?: ModelIntInput | null,
  educationType?: ModelStringInput | null,
  years?: ModelIntInput | null,
  workType?: ModelStringInput | null,
  trainigType?: ModelStringInput | null,
  chargeType?: ModelStringInput | null,
  wageType?: ModelStringInput | null,
  and?: Array< ModelEducationPlanConditionInput | null > | null,
  or?: Array< ModelEducationPlanConditionInput | null > | null,
  not?: ModelEducationPlanConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type EducationPlan = {
  __typename: "EducationPlan",
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
};

export type UpdateEducationPlanInput = {
  id: string,
  courseCategory?: string | null,
  courseName?: string | null,
  times?: number | null,
  educationType?: string | null,
  years?: number | null,
  workType?: string | null,
  trainigType?: string | null,
  chargeType?: string | null,
  wageType?: string | null,
};

export type DeleteEducationPlanInput = {
  id: string,
};

export type ModelEducationPlanFilterInput = {
  id?: ModelIDInput | null,
  courseCategory?: ModelStringInput | null,
  courseName?: ModelStringInput | null,
  times?: ModelIntInput | null,
  educationType?: ModelStringInput | null,
  years?: ModelIntInput | null,
  workType?: ModelStringInput | null,
  trainigType?: ModelStringInput | null,
  chargeType?: ModelStringInput | null,
  wageType?: ModelStringInput | null,
  and?: Array< ModelEducationPlanFilterInput | null > | null,
  or?: Array< ModelEducationPlanFilterInput | null > | null,
  not?: ModelEducationPlanFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelEducationPlanConnection = {
  __typename: "ModelEducationPlanConnection",
  items?:  Array<EducationPlan | null > | null,
  nextToken?: string | null,
};

export type CreateEducationPlanMutationVariables = {
  input: CreateEducationPlanInput,
  condition?: ModelEducationPlanConditionInput | null,
};

export type CreateEducationPlanMutation = {
  createEducationPlan?:  {
    __typename: "EducationPlan",
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
  } | null,
};

export type UpdateEducationPlanMutationVariables = {
  input: UpdateEducationPlanInput,
  condition?: ModelEducationPlanConditionInput | null,
};

export type UpdateEducationPlanMutation = {
  updateEducationPlan?:  {
    __typename: "EducationPlan",
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
  } | null,
};

export type DeleteEducationPlanMutationVariables = {
  input: DeleteEducationPlanInput,
  condition?: ModelEducationPlanConditionInput | null,
};

export type DeleteEducationPlanMutation = {
  deleteEducationPlan?:  {
    __typename: "EducationPlan",
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
  } | null,
};

export type GetEducationPlanQueryVariables = {
  id: string,
};

export type GetEducationPlanQuery = {
  getEducationPlan?:  {
    __typename: "EducationPlan",
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
  } | null,
};

export type ListEducationPlansQueryVariables = {
  filter?: ModelEducationPlanFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEducationPlansQuery = {
  listEducationPlans?:  {
    __typename: "ModelEducationPlanConnection",
    items?:  Array< {
      __typename: "EducationPlan",
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
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateEducationPlanSubscription = {
  onCreateEducationPlan?:  {
    __typename: "EducationPlan",
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
  } | null,
};

export type OnUpdateEducationPlanSubscription = {
  onUpdateEducationPlan?:  {
    __typename: "EducationPlan",
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
  } | null,
};

export type OnDeleteEducationPlanSubscription = {
  onDeleteEducationPlan?:  {
    __typename: "EducationPlan",
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
  } | null,
};
