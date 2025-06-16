import { Children, useState } from "react";
import { CVInformation } from "../data/CVInformation";
import "../stylesheets/education.css";
import TextInput from "./TextInput";
import CancelSVG from "./SVGs/CancelSVG";
import CheckMarkSVG from "./SVGs/CheckmarkSVG";
import PlusSVG from "./SVGs/PlusSVG";
import DeleteSVG from "./SVGs/DeleteSVG";
import EditSVG from "./SVGs/EditSVG";
import formatDate from "../functions/formatDate";
import DateSVG from "./SVGs/DateSVG";
import LocationSVG from "./SVGs/LocationSVG";
import CustomForm from "./CustomForm";

export default function Education() {
    const [openedEducationForm, setOpenedEducationForm] = useState(false);
    const [educationList, setEducationList] = useState(CVInformation.education);

    CVInformation.education = educationList;

    function addEducation(education) {
        const newEducationList = [...educationList];
        newEducationList.push(education);
        setEducationList(newEducationList);
        setOpenedEducationForm(false);
    }

    function cancelAddingEducation() {
        setOpenedEducationForm(false);
    }

    function removeFromList(index) {
        const newEducationList = [...educationList];
        newEducationList.splice(index, 1);
        setEducationList(newEducationList);
    }

    function changeEducation(education) {
        const newEducationList = [...educationList];
        newEducationList[openedEducationForm] = education;
        setEducationList(newEducationList);
        setOpenedEducationForm(false);
    }
    return (
        <CustomForm name='Education' id='education'>
            <ul className="educationList">
                 {educationList.map((education, index) => {
                    return (
                        <EducationLi education={education}>
                            <div className="buttons">
                                <button
                                    onClick={() => {
                                        removeFromList(index);
                                    }}
                                    className="svgBtn noRotate"
                                >
                                    <DeleteSVG />
                                </button>
                                <button
                                    onClick={() => {
                                        setOpenedEducationForm(index);
                                    }}
                                    className="svgBtn noRotate"
                                >
                                    <EditSVG />
                                </button>
                            </div>
                        </EducationLi>
                    );
                })}
            </ul>

            {openedEducationForm === false && (
                <button
                    onClick={() => setOpenedEducationForm(true)}
                    className="addEducation"
                >
                    + Add Education
                </button>
            )}
            {openedEducationForm === true && (
                <EducationForm
                    onAddFunction={addEducation}
                    onCancelFunction={cancelAddingEducation}
                ></EducationForm>
            )}
            {typeof openedEducationForm === "number" && (
                <EducationForm
                    onAddFunction={changeEducation}
                    onCancelFunction={cancelAddingEducation}
                    educationForChange={educationList[openedEducationForm]}
                ></EducationForm>
            )}
        </CustomForm>
    );
}

function EducationForm({
    onAddFunction,
    onCancelFunction,
    educationForChange = "",
}) {
    const [degree, setDegree] = useState("");
    const [institution, setInstitution] = useState("");
    const [tenure, setTenure] = useState("completed");
    const [fromTenure, setFromTenure] = useState("");
    const [toTenure, setToTenure] = useState("");
    const [location, setLocation] = useState("");

    const [forChange, setForChange] = useState(false);

    if (educationForChange !== "" && forChange === false) {
        setDegree(educationForChange.degree);
        setInstitution(educationForChange.institution);
        setTenure(educationForChange.tenure);
        setFromTenure(educationForChange.fromTenure);
        setToTenure(educationForChange.toTenure);
        setLocation(educationForChange.location);
        setForChange(true);
    }
    const education = {
        degree,
        institution,
        tenure,
        fromTenure,
        toTenure,
        location,
    };

    function validateAll() {
        if (degree === "") return false;
        if (institution === "") return false;
        if (tenure === "completed" && toTenure === "") return false;
        if (fromTenure === "") return false;
        if (location === "") return false;
        return true;
    }
    return (
        <div className="educationForm">
            <h3>Add Degree</h3>
            <TextInput
                type="text"
                id="degree"
                onChange={(e) => setDegree(e.target.value)}
                value={degree}
            >
                Degree
            </TextInput>

            <TextInput
                type="text"
                id="institution"
                onChange={(e) => setInstitution(e.target.value)}
                value={institution}
            >
                Institution
            </TextInput>

            <TextInput
                type="text"
                id="location"
                onChange={(e) => setLocation(e.target.value)}
                value={location}
            >
                Location
            </TextInput>
            <div className="tenure">
                <h4>Tenure:</h4>
                <select
                    name="tenure"
                    id="tenure"
                    onChange={(event) => {
                        const newTenure = event.target.value;
                        if (newTenure === "ongoing") setToTenure("");
                        setTenure(newTenure);
                    }}
                    value={tenure}
                >
                    <option value="completed">Completed</option>
                    <option value="ongoing">Ongoing</option>
                </select>
                <label for="from">From:</label>
                <input
                    required
                    type="date"
                    id="from"
                    onChange={(event) => {
                        setFromTenure(event.target.value);
                    }}
                    value={fromTenure}
                ></input>
                {tenure === "completed" && (
                    <>
                        <label for="to">To:</label>
                        <input
                            required
                            type="date"
                            id="to"
                            onChange={(event) => {
                                setToTenure(event.target.value);
                            }}
                            value={toTenure}
                        ></input>
                    </>
                )}
            </div>
            <div className="buttons">
                <button
                    onClick={() => {
                        if (validateAll()) onAddFunction(education);
                    }}
                    className="svgBtn"
                >
                    {forChange ? <CheckMarkSVG /> : <PlusSVG />}
                </button>
                <button className="svgBtn" onClick={() => onCancelFunction()}>
                    <CancelSVG />
                </button>
            </div>
        </div>
    );
}

function EducationLi({ education, children }) {
    return (
        <li>
            <div className="title">
                <h4>{education.degree}</h4>
                {children}
            </div>
            <p className="institution">{education.institution}</p>
            <div className="tenure">
                <DateSVG />
                {education.tenure === "completed" ? (
                    <p>
                        {formatDate(education.fromTenure)} -{" "}
                        {formatDate(education.toTenure)}
                    </p>
                ) : (
                    <p>{formatDate(education.fromTenure)} - Present</p>
                )}
            </div>
            <div className="location">
                <LocationSVG/>
                <p>{education.location}</p>
            </div>
        </li>
    );
}
