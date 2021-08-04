import {useState} from "react";
import { HiMinus, AiOutlinePlus } from "react-icons/all";

const SingleAccordion = ({heading, body}) =>{
    const [showContent, setShowContent ] = useState(false);
    return(
        <div className="single-accordion">
            <div className="head" onClick={ ()=> setShowContent(!showContent) }>
                <div className="head-content">{heading}</div>
                <div className="head-icon">
                    {
                        showContent ? <HiMinus /> : <AiOutlinePlus />
                    }
                </div>
            </div>
            {
                showContent &&

                <div className="body">
                    { body }
                </div>
            }
        </div>
    )
}
export default SingleAccordion;