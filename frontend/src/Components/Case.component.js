import React from "react";
import { Link } from "react-router-dom";

function Case(props) {
    return (
        <div className="table-row">
            <div className="table-cell">{props.currentCase._id}</div>
            <div className="table-cell">{props.currentCase.defendantName}</div>
            <div className="table-cell">{props.currentCase.defendantAddr}</div>
            <div className="table-cell">{props.currentCase.crimeType}</div>
            <div className="table-cell">{props.currentCase.crimeDate}</div>
            <div className="table-cell">{props.currentCase.crimeLoc}</div>
            <div className="table-cell">{props.currentCase.officerName}</div>
            <div className="table-cell">{props.currentCase.arrestDate}</div>
            <div className="table-cell">{props.currentCase.judgeName}</div>
            <div className="table-cell">{props.currentCase.lawyerName}</div>
            <div className="table-cell">{props.currentCase.startDate}</div>
            <div className="table-cell">{props.currentCase.endDate}</div>
            <div className="table-cell">{props.currentCase.status}</div>
            <div className="table-cell">{props.currentCase.summary}</div>
            <div className="table-cell">
                <Link
                    to={'/update/'+props.currentCase._id}
                    className="bg-link"
                >
                </Link>
            </div>
        </div>
    )
}

export default Case;