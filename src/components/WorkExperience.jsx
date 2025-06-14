import { CVInformation } from "../data/CVInformation.jsx";
import { useState } from "react";
import TextInput from "./TextInput.jsx";
import "../stylesheets/workExperience.css";
import PlusSVG from "./SVGs/PlusSVG.jsx";
import CancelSVG from "./SVGs/CancelSVG.jsx";
import DeleteSVG from "./SVGs/DeleteSVG.jsx";
import EditSVG from "./SVGs/EditSVG.jsx";
import LocationSVG from "./SVGs/LocationSVG.jsx";
import DateSVG from "./SVGs/DateSVG.jsx";
import formatDate from "../functions/formatDate.jsx";
import CheckMarkSVG from "./SVGs/CheckmarkSVG.jsx";

export default function WorkExperience() {
    //true - for new work experience
    //false - if closed
    //number - if editing exiting workExperience
    const [openedAddingExperience, setOpenedAddingExperience] = useState(false);
    const [workExperienceList, setWorkExperienceList] = useState(
        CVInformation.workExperience
    );

    function buttonAddExperience(newWorkExperience) {
        const newWorkExperienceList = [...workExperienceList];
        newWorkExperienceList.push(newWorkExperience);
        CVInformation.workExperience = newWorkExperienceList;
        setWorkExperienceList(newWorkExperienceList);
        setOpenedAddingExperience(false);
    }
    function buttonChangeExperience(newWorkExperience) {
        const newWorkExperienceList = [...workExperienceList];
        newWorkExperienceList[openedAddingExperience] = newWorkExperience;
        CVInformation.workExperience = newWorkExperienceList;
        setWorkExperienceList(newWorkExperienceList);
        setOpenedAddingExperience(false);
    }
    function buttonCancleAddingExperience() {
        setOpenedAddingExperience(false);
    }

    function editWorkExperience(index) {
        setOpenedAddingExperience(index);
    }
    function deleteWorkExperience(index) {
        const newWorkExperienceList = [...workExperienceList];
        newWorkExperienceList.splice(index, 1);
        setWorkExperienceList(newWorkExperienceList);
    }
    return (
        <section className="form workExperience">
            <h1>Work Experience</h1>
            <ul className="workExperienceList">
                {workExperienceList.map((workExperience, index) => {
                    return (
                        <DisplayWorkExperience
                            workExperience={workExperience}
                            index={index}
                            onDeleteFunction={deleteWorkExperience}
                            onEditFunction={editWorkExperience}
                        ></DisplayWorkExperience>
                    );
                })}
            </ul>
            {openedAddingExperience === false && (
                <button
                    className="addWorkExperience"
                    onClick={() => setOpenedAddingExperience(true)}
                >
                    + Add Work Experience
                </button>
            )}
            {openedAddingExperience === true && (
                <AddExperience
                    addExperienceFunction={buttonAddExperience}
                    cancelAddingExperienceFunction={
                        buttonCancleAddingExperience
                    }
                />
            )}
            {typeof openedAddingExperience === "number" && (
                <AddExperience
                    addExperienceFunction={buttonChangeExperience}
                    cancelAddingExperienceFunction={
                        buttonCancleAddingExperience
                    }
                    experienceForChange={
                        workExperienceList[openedAddingExperience]
                    }
                />
            )}
        </section>
    );
}

function AddExperience({
    addExperienceFunction,
    cancelAddingExperienceFunction,
    experienceForChange = "",
}) {
    const [position, setPosition] = useState("");
    const [organization, setOrganization] = useState("");
    const [employmentType, setEmploymentType] = useState("onsite");
    const [location, setLocation] = useState("");
    const [tenure, setTenure] = useState("completed");
    const [fromTenure, setFromTenure] = useState("");
    const [toTenure, setToTenure] = useState("");

    const [accomplishments, setAccomplishments] = useState([]);
    const [allForChanging, setAllForChanging] = useState(false);

    if (experienceForChange !== "" && allForChanging === false) {
        setPosition(experienceForChange.position);
        setOrganization(experienceForChange.organization);
        setEmploymentType(experienceForChange.employmentType);
        setLocation(experienceForChange.location);
        setTenure(experienceForChange.tenure);
        setFromTenure(experienceForChange.fromTenure);
        setToTenure(experienceForChange.toTenure);
        setAccomplishments(experienceForChange.accomplishments);
        setAllForChanging(true);
    }
    const newWorkExperience = {
        position,
        organization,
        employmentType,
        location,
        tenure,
        fromTenure,
        toTenure,
        accomplishments,
    };
    return (
        <div className="addExperience">
            <h3>Add Experience</h3>
            <form className="addExperienceForm">
                <TextInput
                    required
                    type="text"
                    id="position"
                    onChange={(event) => {
                        setPosition(event.target.value);
                    }}
                    value={position}
                >
                    Position
                </TextInput>
                <TextInput
                    required
                    type="text"
                    id="organization"
                    onChange={(event) => {
                        setOrganization(event.target.value);
                    }}
                    value={organization}
                >
                    Organization
                </TextInput>
                <div className="employment">
                    <label for="employmentType">Employment Type:</label>
                    <select
                        name="employmentType"
                        id="employmentType"
                        value={employmentType}
                        onChange={(event) => {
                            const newEmploymentType = event.target.value;
                            setEmploymentType(newEmploymentType);
                            if (newEmploymentType === "remote") {
                                setLocation("");
                            }
                        }}
                    >
                        <option value="onsite">On-Site</option>
                        <option value="remote">Remote</option>
                    </select>
                </div>
                {employmentType === "onsite" && (
                    <TextInput
                        required
                        id="location"
                        onChange={(event) => {
                            setLocation(event.target.value);
                        }}
                        value={location}
                    >
                        Location
                    </TextInput>
                )}
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
                <Accomplishments
                    accomplishments={accomplishments}
                    setAccomplishments={setAccomplishments}
                ></Accomplishments>
                <div className="buttons">
                    <button
                        type="button"
                        onClick={() => {
                            if (validateAll())
                                addExperienceFunction(newWorkExperience);
                        }}
                        className={experienceForChange !== ""? 'svgBtn noRotate' : 'svgBtn'}
                    >
                        {experienceForChange === "" && <PlusSVG />}
                        {experienceForChange !== "" && <CheckMarkSVG/>}
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            cancelAddingExperienceFunction();
                        }}
                        className="svgBtn"
                    >
                        <CancelSVG />
                    </button>
                </div>
            </form>
        </div>
    );

    function validateAll() {
        if (position === "") return false;
        if (organization === "") return false;
        if (employmentType === "onsite" && location === "") return false;
        if (tenure === "completed" && toTenure === "") return false;
        if (fromTenure === "") return false;

        return true;
    }
}

function Accomplishments({ accomplishments, setAccomplishments }) {
    const [openedAddingAccomplishment, setOpenedAddingAccomplishment] =
        useState(false);
    const [newAcomplishment, setNewAcomplishment] = useState("");
    return (
        <div className="accomplishments">
            <div className="accomplishmentsTitle">
                <h4>Accomplishments</h4>
                {!openedAddingAccomplishment && (
                    <button
                        className="svgBtn"
                        onClick={() => setOpenedAddingAccomplishment(true)}
                    >
                        <PlusSVG />
                    </button>
                )}
            </div>
            {accomplishments.map((accomplishment, index) => {
                return (
                    <div key={index} className="accomplishment">
                        {accomplishment}
                        <button
                            type="button"
                            className="deleteAcomplishment svgBtn noRotate"
                            onClick={() => {
                                const newAcomplishments = [...accomplishments];
                                newAcomplishments.splice(index, 1);
                                setAccomplishments(newAcomplishments);
                            }}
                        >
                            <DeleteSVG />
                        </button>
                    </div>
                );
            })}

            {openedAddingAccomplishment && (
                <div className="addAccomplishment">
                    <div className="addAcomplishmentForm">
                        <TextInput
                            required
                            type="text"
                            id="accomplishment"
                            onChange={(e) =>
                                setNewAcomplishment(e.target.value)
                            }
                            value={newAcomplishment}
                        >
                            New Accomplishment
                        </TextInput>

                        <div className="buttons">
                            <button
                                type="button"
                                onClick={() => {
                                    if (newAcomplishment != "") {
                                        const newAcomplishments = [
                                            ...accomplishments,
                                        ];
                                        newAcomplishments.push(
                                            newAcomplishment
                                        );
                                        setAccomplishments(newAcomplishments);
                                        setNewAcomplishment("");
                                        setOpenedAddingAccomplishment(false);
                                    }
                                }}
                                className="svgBtn"
                            >
                                <PlusSVG />
                            </button>
                            <button
                                type="button"
                                onClick={() =>
                                    setOpenedAddingAccomplishment(false)
                                }
                                className="svgBtn"
                            >
                                <CancelSVG />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function DisplayWorkExperience({
    workExperience,
    index,
    onDeleteFunction,
    onEditFunction,
}) {
    return (
        <li>
            <div className="title">
                <h4>{workExperience.position}</h4>

                <div className="buttons">
                    <button
                        onClick={() => {
                            onDeleteFunction(index);
                        }}
                        className="svgBtn noRotate"
                    >
                        <DeleteSVG />
                    </button>
                    <button
                        onClick={() => onEditFunction(index)}
                        className="svgBtn noRotate"
                    >
                        <EditSVG />
                    </button>
                </div>
            </div>
            <p className="organization">{workExperience.organization}</p>
            <div className="tenure">
                <DateSVG/>
                {workExperience.tenure === "completed" ? (
                    <p>
                        {formatDate(workExperience.fromTenure)} - {formatDate(workExperience.toTenure)}
                    </p>
                ) : (
                    <p>{formatDate(workExperience.fromTenure)} - Present</p>
                )}
            </div>
            <div className="location">
                <LocationSVG/>
                {workExperience.employmentType==='onsite'?
                <p>{workExperience.location}</p>:
                <p>Remote</p>}
            </div>
            <ul className="accomplishmentsList">
                {workExperience.accomplishments.map((accomplishment) => {
                    return <li>{accomplishment}</li>;
                })}
            </ul>
        </li>
    );
}
