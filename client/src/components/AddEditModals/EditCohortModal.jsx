import React, {useContext} from "react";
import "../../styles/AddEditModals.css"
import LeftColumnContext from "../../context/LeftColumnContext";

function EditCohortModal(){
    const {closeEditCohort} = useContext(LeftColumnContext)
    return(
        <div className="addEditContainer">
            <div className="addEditHeader">
                <div className="addEditClose" onClick={closeEditCohort}>Close</div>
            </div>
            <div className="addEditContent">
                <input placeholder="Cohort Name"></input>
                <div className="dateRange">
                    Start Date:
                    <input type="date"></input>
                    End Date:
                    <input type="date"></input>
                </div>
                <input placeholder="Instructor Name"></input>
                <input placeholder="Student"></input>
            </div>
            <div className="addEditFooter">
                <div className="addEditOption">Submit</div>
                <div className="addEditOption" onClick={closeEditCohort}>Cancel</div>
            </div>
        </div>
    )
}
export default EditCohortModal;