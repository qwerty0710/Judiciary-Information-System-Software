import React from "react";
import { Link } from "react-router-dom";

function Case(props) {
    return (
        <tr>
            <td>{props.currentCase._id}</td>
            <td>{props.currentCase.defendantName}</td>
            <td>{props.currentCase.defendantAddr}</td>
            <td>{props.currentCase.crimeType}</td>
            <td>{props.currentCase.crimeDate}</td>
            <td>{props.currentCase.crimeLoc}</td>
            <td>{props.currentCase.officerName}</td>
            <td>{props.currentCase.arrestDate}</td>
            <td>{props.currentCase.judgeName}</td>
            <td>{props.currentCase.lawyerName}</td>
            <td>{props.currentCase.startDate}</td>
            <td>{props.currentCase.endDate}</td>
            <td>{props.currentCase.status}</td>
            <td>{props.currentCase.summary}</td>
            <td>
                <Link
                    className="bg-link"
                    to={'/update/'+props.currentCase._id}
                >
                </Link>
            </td>
        </tr>
    )
}

export default Case;