
import { projectOneDocs } from "./projectOneData/projectOneDocs"
import { projectTwoDocs } from "./projectTwoData/projectTwoDocs"

export type functionalityType = {
    title: string;
    desc: string;
    features: string[]
    images?: string[]
}
export type functionalitiesType = {
    front_end: functionalityType[];
    back_end: functionalityType[];
}
export type workflowType = {
    title: string;
    desc: string;
}
export type techAndLibrariesType = {
    name: string;
    desc: string;
}
export type futrueGoals = {
    title: string;
    isFinished: boolean
}
export type docsType = {
    id: number;
    last_update:string;
    abstraction: string;
    github_link: string;
    live_link: string;
    project_desc: string;
    goals: string[];
    objectives: string[];
    tech_and_libraries: techAndLibrariesType[]
    Functionalities: functionalitiesType;
    workflow: workflowType[];
    futrue_goals: futrueGoals[]
}

export function getProjectData<T>(id: T) {
    const numberID = Number(id)

    const temp = [projectOneDocs, projectTwoDocs, projectTwoDocs]
    const data = temp.find((pro) => pro.id === numberID)
    return data

}