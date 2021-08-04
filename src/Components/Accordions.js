import data from '../data'
import SingleAccordion from "./SingleAccordion";

const Accordions = () => {
    return(
        <div className="accordion-wrapper">
            {
                data.map((accordion)=>{
                    return(
                        <SingleAccordion key={accordion.id} {...accordion} />
                    )
                })
            }
        </div>
    )
}
export default Accordions;