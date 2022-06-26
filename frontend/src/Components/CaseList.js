import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Case from "./Case.component";

function CaseList() {

    const [Cases, setCases] = useState({
        data: []
    });

    useEffect(() => {
        axios.get('http://localhost:3004/cases')
            .then(res => {
                setCases({
                    data: res.data
                });
            })
            .catch(err => console.log(err));
    }, []);



    const content = 
        Cases.data.map((Case, key) => {
            <Case
                key={Case._id}
                currentCase={Case}
            />
        }) 
    
    return (
        <div>
            <h3>Cases</h3>
            <div className="table w-full">
                <div className="table-header-group">
                    <div className="table-row">
                        <div className="table-cell text-left">CIN</div>
                        <div className="table-cell text-left">Defendant Name</div>
                        <div className="table-cell text-left">Defendant Address</div>
                        <div className="table-cell text-left">Crime Type</div>
                        <div className="table-cell text-left">Crime Date</div>
                        <div className="table-cell text-left">Crime Location</div>
                        <div className="table-cell text-left">Arresting Officer</div>
                        <div className="table-cell text-left">Arrest Date</div>
                        <div className="table-cell text-left">Judge Name</div>
                        <div className="table-cell text-left">Lawyer Name</div>
                        <div className="table-cell text-left">Start Date</div>
                        <div className="table-cell text-left">End Date</div>
                        <div className="table-cell text-left">Status</div>
                        <div className="table-cell text-left">Summary</div>
                    </div>
                </div>
                <div className="table-row-group">
                    { content }
                </div>
            </div>
        </div>
    )
}

export default CaseList;