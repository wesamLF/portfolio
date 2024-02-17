import { FunctionSquare } from 'lucide-react'
import FunctionalityContent from './FunctionalityContent'
import { functionalitiesType } from '../../../../public/projectsData'

const Functionalities = ({functionalities}:{functionalities:functionalitiesType}) => {
    return (
        <div className="">
            <h3 className="text-2xl md:text-3xl font-medium leading-tight text-primary">
                <FunctionSquare className="inline" /> Functionalities <FunctionSquare className="inline" />
                <FunctionalityContent sectionTitle={"Front-End"} data={functionalities.front_end}/>
                <FunctionalityContent sectionTitle={"Back-End"} data={functionalities.back_end}/>

            </h3>
            

        </div >
    )
}

export default Functionalities