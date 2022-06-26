import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css"

function CreateCase() {
    const [Case, setCase] = useState({
        defendantName: '',
        defendantAddr: '',
        crimeType: '',
        crimeDate: new Date(),
        crimeLoc: '',
        officerName: '',
        arrestDate: new Date(),
        judgeName: '',
        lawyerName: '',
        startDate: new Date(),
        endDate: new Date(),
        status: '',
        summary: ''
    });

    const onChangeDefendantName = (e) => {
        setCase({
            defendantName: e.target.value,
            defendantAddr: Case.defendantAddr,
            crimeType: Case.crimeType,
            crimeDate: Case.crimeDate,
            crimeLoc: Case.crimeLoc,
            officerName: Case.officerName,
            arrestDate: Case.arrestDate,
            judgeName: Case.judgeName,
            lawyerName: Case.lawyerName,
            startDate: Case.startDate,
            endDate: Case.endDate,
            status: Case.status,
            summary: Case.summary
        })
    }

    const onChangeDefendantAddr = (e) => {
        setCase({
            defendantName: Case.defendantName,
            defendantAddr: e.target.value,
            crimeType: Case.crimeType,
            crimeDate: Case.crimeDate,
            crimeLoc: Case.crimeLoc,
            officerName: Case.officerName,
            arrestDate: Case.arrestDate,
            judgeName: Case.judgeName,
            lawyerName: Case.lawyerName,
            startDate: Case.startDate,
            endDate: Case.endDate,
            status: Case.status,
            summary: Case.summary
        })
    }

    const onChangeCrimeType = (e) => {
        setCase({
            defendantName: Case.defendantName,
            defendantAddr: Case.defendantAddr,
            crimeType: e.target.value,
            crimeDate: Case.crimeDate,
            crimeLoc: Case.crimeLoc,
            officerName: Case.officerName,
            arrestDate: Case.arrestDate,
            judgeName: Case.judgeName,
            lawyerName: Case.lawyerName,
            startDate: Case.startDate,
            endDate: Case.endDate,
            status: Case.status,
            summary: Case.summary
        })
    }

    const onChangeCrimeDate = (date) => {
        setCase({
            defendantName: Case.defendantName,
            defendantAddr: Case.defendantAddr,
            crimeType: Case.crimeType,
            crimeDate: date,
            crimeLoc: Case.crimeLoc,
            officerName: Case.officerName,
            arrestDate: Case.arrestDate,
            judgeName: Case.judgeName,
            lawyerName: Case.lawyerName,
            startDate: Case.startDate,
            endDate: Case.endDate,
            status: Case.status,
            summary: Case.summary
        })
    }
    
    const onChangeCrimeLoc = (e) => {
        setCase({
            defendantName: Case.defendantName,
            defendantAddr: Case.defendantAddr,
            crimeType: Case.crimeType,
            crimeDate: Case.crimeDate,
            crimeLoc: e.target.value,
            officerName: Case.officerName,
            arrestDate: Case.arrestDate,
            judgeName: Case.judgeName,
            lawyerName: Case.lawyerName,
            startDate: Case.startDate,
            endDate: Case.endDate,
            status: Case.status,
            summary: Case.summary
        })
    }

    const onChangeOfficerName = (e) => {
        setCase({
            defendantName: Case.defendantName,
            defendantAddr: Case.defendantAddr,
            crimeType: Case.crimeType,
            crimeDate: Case.crimeDate,
            crimeLoc: Case.crimeLoc,
            officerName: e.target.value,
            arrestDate: Case.arrestDate,
            judgeName: Case.judgeName,
            lawyerName: Case.lawyerName,
            startDate: Case.startDate,
            endDate: Case.endDate,
            status: Case.status,
            summary: Case.summary
        })
    }

    const onChangeArrestDate = (date) => {
        setCase({
            defendantName: Case.defendantName,
            defendantAddr: Case.defendantAddr,
            crimeType: Case.crimeType,
            crimeDate: Case.crimeDate,
            crimeLoc: Case.crimeLoc,
            officerName: Case.officerName,
            arrestDate: date,
            judgeName: Case.judgeName,
            lawyerName: Case.lawyerName,
            startDate: Case.startDate,
            endDate: Case.endDate,
            status: Case.status,
            summary: Case.summary
        })
    }

    const onChangeJudgeName = (e) => {
        setCase({
            defendantName: Case.defendantName,
            defendantAddr: Case.defendantAddr,
            crimeType: Case.crimeType,
            crimeDate: Case.crimeDate,
            crimeLoc: Case.crimeLoc,
            officerName: Case.officerName,
            arrestDate: Case.arrestDate,
            judgeName: e.target.value,
            lawyerName: Case.lawyerName,
            startDate: Case.startDate,
            endDate: Case.endDate,
            status: Case.status,
            summary: Case.summary
        })
    }

    const onChangeLawyerName = (e) => {
        setCase({
            defendantName: Case.defendantName,
            defendantAddr: Case.defendantAddr,
            crimeType: Case.crimeType,
            crimeDate: Case.crimeDate,
            crimeLoc: Case.crimeLoc,
            officerName: Case.officerName,
            arrestDate: Case.arrestDate,
            judgeName: Case.judgeName,
            lawyerName: e.target.value,
            startDate: Case.startDate,
            endDate: Case.endDate,
            status: Case.status,
            summary: Case.summary
        })
    }

    const onChangeStartDate = (date) => {
        setCase({
            defendantName: Case.defendantName,
            defendantAddr: Case.defendantAddr,
            crimeType: Case.crimeType,
            crimeDate: Case.crimeDate,
            crimeLoc: Case.crimeLoc,
            officerName: Case.officerName,
            arrestDate: Case.arrestDate,
            judgeName: Case.judgeName,
            lawyerName: Case.lawyerName,
            startDate: date,
            endDate: Case.endDate,
            status: Case.status,
            summary: Case.summary
        })
    }

    const onChangeEndDate = (date) => {
        setCase({
            defendantName: Case.defendantName,
            defendantAddr: Case.defendantAddr,
            crimeType: Case.crimeType,
            crimeDate: Case.crimeDate,
            crimeLoc: Case.crimeLoc,
            officerName: Case.officerName,
            arrestDate: Case.arrestDate,
            judgeName: Case.judgeName,
            lawyerName: Case.lawyerName,
            startDate: Case.startDate,
            endDate: date,
            status: Case.status,
            summary: Case.summary
        })
    }

    const onChangeStatus = (e) => {
        setCase({
            defendantName: Case.defendantName,
            defendantAddr: Case.defendantAddr,
            crimeType: Case.crimeType,
            crimeLoc: Case.crimeLoc,
            officerName: Case.officerName,
            arrestDate: Case.arrestDate,
            judgeName: Case.judgeName,
            lawyerName: Case.lawyerName,
            startDate: Case.startDate,
            endDate: Case.endDate,
            status: e.target.value,
            summary: Case.summary
        })
    }

    const onChangeSummary = (e) => {
        setCase({
            defendantName: Case.defendantName,
            defendantAddr: Case.defendantAddr,
            crimeType: Case.crimeType,
            crimeDate: Case.crimeDate,
            crimeLoc: Case.crimeLoc,
            officerName: Case.officerName,
            arrestDate: Case.arrestDate,
            judgeName: Case.judgeName,
            lawyerName: Case.lawyerName,
            startDate: Case.startDate,
            endDate: Case.endDate,
            status: Case.status,
            summary: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const newCase = {
            defendantName: Case.defendantName,
            defendantAddr: Case.defendantAddr,
            crimeType: Case.crimeType,
            crimeDate: Case.crimeDate,
            crimeLoc: Case.crimeLoc,
            officerName: Case.officerName,
            arrestDate: Case.arrestDate,
            judgeName: Case.judgeName,
            lawyerName: Case.lawyerName,
            startDate: Case.startDate,
            endDate: Case.endDate,
            status: Case.status,
            summary: Case.summary
        }

        console.log(newCase);

        axios.post('http://localhost/cases/add', newCase)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
        
        setCase({
            defendantName: '',
            defendantAddr: '',
            crimeType: '',
            crimeDate: new Date(),
            crimeLoc: '',
            officerName: '',
            arrestDate: new Date(),
            judgeName: '',
            lawyerName: '',
            startDate: new Date(),
            endDate: new Date(),
            status: '',
            summary: ''
        })
    }

    return (
        <div>
            <h3>Create Case</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Defendant's name: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={Case.defendantName}
                        onChange={onChangeDefendantName}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Defendant's Address: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={Case.defendantAddr}
                        onChange={onChangeDefendantAddr}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Crime Type: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={Case.crimeType}
                        onChange={onChangeCrimeType}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Crime Date: </label>
                    <ReactDatePicker
                        selected={Case.crimeDate}
                        onChange={onChangeCrimeDate}
                    />
                </div>
                <div className="form-group">
                    <label>Crime Location: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={Case.crimeLocation}
                        onChange={onChangeCrimeLoc}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Arresting Officer's name: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={Case.officerName}
                        onChange={onChangeOfficerName}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Arrest Date: </label>
                    <ReactDatePicker
                        selected={Case.arrestDate}
                        onChange={onChangeArrestDate}
                    />
                </div>
                <div className="form-group">
                    <label>Judge's Name: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={Case.judgeName}
                        onChange={onChangeJudgeName}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Lawyer's name: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={Case.lawyerName}
                        onChange={onChangeLawyerName}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Start Date: </label>
                    <ReactDatePicker
                        selected={Case.startDate}
                        onChange={onChangeStartDate}
                    />
                </div>
                <div className="form-group">
                    <label>End Date: </label>
                    <ReactDatePicker
                        selected={Case.endDate}
                        onChange={onChangeEndDate}
                    />
                </div>
                <div className="form-group">
                    <label>Status: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={Case.status}
                        onChange={onChangeStatus}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Summary: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={Case.summary}
                        onChange={onChangeSummary}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="submit"
                        className="btn"
                        value="Create Case"
                        onSubmit={onSubmit}
                    />
                </div>
            </form>
        </div>
    )
}

export default CreateCase;