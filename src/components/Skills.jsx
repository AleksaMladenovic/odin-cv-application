import { useState } from "react";
import { CVInformation } from "../data/CVInformation";
import TextInput from "./TextInput";
import "../stylesheets/skills.css";
import PlusSVG from "./SVGs/PlusSVG";
import CancelSVG from "./SVGs/CancelSVG";
import DeleteSVG from "./SVGs/DeleteSVG";

export default function Skills() {
    const [openedSkillsForm, setOpenedSkillsForm] = useState(false);
    const [skills, setSkills] = useState(CVInformation.skills);

    CVInformation.skills = skills;

    function addSkill(skill) {
        const newSkills = [...skills];
        newSkills.push(skill);
        setSkills(newSkills);
        setOpenedSkillsForm(false);
    }
    function cancleAddingSkill() {
        setOpenedSkillsForm(false);
    }

    function removeSkill(index) {
        const newSkills = [...skills];
        newSkills.splice(index, 1);
        setSkills(newSkills);
    }
    return (
        <section className="form skills">
            <h1>Skills</h1>
            <ul className="skillsList">
                {skills.map((skill, index) => {
                    return (
                        <SkillLi skill={skill}>
                            <button onClick={() => removeSkill(index)}
                                className="svgBtn noRotate">
                                <DeleteSVG/>
                            </button>
                        </SkillLi>
                    );
                })}
            </ul>
            {openedSkillsForm ? (
                <SkillForm
                    onAddButton={addSkill}
                    onCancelButton={cancleAddingSkill}
                />
            ) : (
                <button
                    className="addSkill"
                    onClick={() => setOpenedSkillsForm(true)}
                >
                    + Add Skill
                </button>
            )}
        </section>
    );
}

function SkillForm({ onAddButton, onCancelButton }) {
    const [skill, setSkill] = useState("");

    return (
        <div className="skillForm">
            <h3>Add Skill</h3>
            <TextInput
                type="text"
                id="skill"
                onChange={(e) => setSkill(e.target.value)}
                value={skill}
            >
                Skill
            </TextInput>
            <div className="buttons">
                <button
                    onClick={() => {
                        if (skill !== "") onAddButton(skill);
                    }}
                    className="svgBtn"
                >
                    <PlusSVG />
                </button>
                <button onClick={() => onCancelButton()}
                    className="svgBtn">
                    <CancelSVG />
                </button>
            </div>
        </div>
    );
}

function SkillLi({ skill, children }) {
    return (
        <li>
            {skill} {children}
        </li>
    );
}
