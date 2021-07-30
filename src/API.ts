/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateEducationPlanInput = {
  id?: string | null,
  courseID: string,
};

export type ModelEducationPlanConditionInput = {
  courseID?: ModelIDInput | null,
  and?: Array< ModelEducationPlanConditionInput | null > | null,
  or?: Array< ModelEducationPlanConditionInput | null > | null,
  not?: ModelEducationPlanConditionInput | null,
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

export type EducationPlan = {
  __typename: "EducationPlan",
  id: string,
  courseID: string,
  courseName: Course,
  createdAt: string,
  updatedAt: string,
};

export type Course = {
  __typename: "Course",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateEducationPlanInput = {
  id: string,
  courseID?: string | null,
};

export type DeleteEducationPlanInput = {
  id: string,
};

export type CreateCourseInput = {
  id?: string | null,
  name: string,
};

export type ModelCourseConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelCourseConditionInput | null > | null,
  or?: Array< ModelCourseConditionInput | null > | null,
  not?: ModelCourseConditionInput | null,
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

export type UpdateCourseInput = {
  id: string,
  name?: string | null,
};

export type DeleteCourseInput = {
  id: string,
};

export type ModelEducationPlanFilterInput = {
  id?: ModelIDInput | null,
  courseID?: ModelIDInput | null,
  and?: Array< ModelEducationPlanFilterInput | null > | null,
  or?: Array< ModelEducationPlanFilterInput | null > | null,
  not?: ModelEducationPlanFilterInput | null,
};

export type ModelEducationPlanConnection = {
  __typename: "ModelEducationPlanConnection",
  items?:  Array<EducationPlan | null > | null,
  nextToken?: string | null,
};

export type ModelCourseFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelCourseFilterInput | null > | null,
  or?: Array< ModelCourseFilterInput | null > | null,
  not?: ModelCourseFilterInput | null,
};

export type ModelCourseConnection = {
  __typename: "ModelCourseConnection",
  items?:  Array<Course | null > | null,
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
    courseID: string,
    courseName:  {
      __typename: "Course",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
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
    courseID: string,
    courseName:  {
      __typename: "Course",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
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
    courseID: string,
    courseName:  {
      __typename: "Course",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCourseMutationVariables = {
  input: CreateCourseInput,
  condition?: ModelCourseConditionInput | null,
};

export type CreateCourseMutation = {
  createCourse?:  {
    __typename: "Course",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCourseMutationVariables = {
  input: UpdateCourseInput,
  condition?: ModelCourseConditionInput | null,
};

export type UpdateCourseMutation = {
  updateCourse?:  {
    __typename: "Course",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCourseMutationVariables = {
  input: DeleteCourseInput,
  condition?: ModelCourseConditionInput | null,
};

export type DeleteCourseMutation = {
  deleteCourse?:  {
    __typename: "Course",
    id: string,
    name: string,
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
    courseID: string,
    courseName:  {
      __typename: "Course",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
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
      courseID: string,
      courseName:  {
        __typename: "Course",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetCourseQueryVariables = {
  id: string,
};

export type GetCourseQuery = {
  getCourse?:  {
    __typename: "Course",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCoursesQueryVariables = {
  filter?: ModelCourseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCoursesQuery = {
  listCourses?:  {
    __typename: "ModelCourseConnection",
    items?:  Array< {
      __typename: "Course",
      id: string,
      name: string,
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
    courseID: string,
    courseName:  {
      __typename: "Course",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEducationPlanSubscription = {
  onUpdateEducationPlan?:  {
    __typename: "EducationPlan",
    id: string,
    courseID: string,
    courseName:  {
      __typename: "Course",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEducationPlanSubscription = {
  onDeleteEducationPlan?:  {
    __typename: "EducationPlan",
    id: string,
    courseID: string,
    courseName:  {
      __typename: "Course",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCourseSubscription = {
  onCreateCourse?:  {
    __typename: "Course",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCourseSubscription = {
  onUpdateCourse?:  {
    __typename: "Course",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCourseSubscription = {
  onDeleteCourse?:  {
    __typename: "Course",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
