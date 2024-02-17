import { docsType } from "../../../../public/projectsData"
import Abstraction from "./Abstraction"
import Functionalities from "./Functionalities"
import FutrueGoals from "./FutrueGoals"
import Goals from "./Goals"
import Objectives from "./Objectives"
import TechAndLibr from "./TechAndLibr"
import Workflow from "./Workflow"

const ProjectDocsContent = ({ projectDocs }: { projectDocs: docsType }) => {
    return (
        <div className="flex flex-col gap-20">
            <Abstraction abstraction={projectDocs.abstraction}/>
            <Goals goals={projectDocs.goals}/>
            <Objectives objectives={projectDocs.objectives}/>
            <TechAndLibr tech_and_libraries={projectDocs.tech_and_libraries}/>
            <Functionalities functionalities={projectDocs.Functionalities}/>
            <Workflow workflow={projectDocs.workflow} />

            <FutrueGoals futrue_goals={projectDocs.futrue_goals}/>
        </div>
    )
}

export default ProjectDocsContent