/**
 * 型定義ファイル
 */

export type Course = {
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string
}

export type EducationPlan = {
    id: string,
    courseID: string,
    courseName: Course,
    createdAt: string,
    updatedAt: string
}

export type ContextType = {
    option: [];
    dispatch: any;
}

export type Action = {
    type: 'SET',
    payload: []
}