import { CVInformation } from "../data/CVInformation.jsx";
import { useEffect, useRef, useState } from "react";
import TextInput from "./TextInput.jsx";
import CustomForm from "./CustomForm.jsx";

export default function ProfessionalSummary() {
    const [role, setRole] = useState(CVInformation.professionalSummary.role);
    const [summary, setSummary] = useState(
        CVInformation.professionalSummary.summary
    );
    const inputRef = useRef(null);
    CVInformation.professionalSummary = {
        role,
        summary,
    };
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.innerText = summary;
        }
    },[]);

    return (
        <CustomForm id="professionalSummary" name='Professional Summary'>
            <TextInput
                type="text"
                id="role"
                onChange={(event) => {
                    setRole(event.target.value);
                }}
                value={role}
            >
                Role
            </TextInput>

            <div className="textInput">
                <label
                    htmlFor="summary"
                    className={summary !== ""&&summary!=='\n' ? "move" : undefined}
                    onClick={() => inputRef.current?.focus()}
                >
                    Summary
                </label>
                <div
                    contentEditable="true"
                    className="editable"
                    id="summary"
                    ref={inputRef}
                    onInput={(event) => {
                        setSummary(event.target.innerText);
                    }}
                >
                </div>
            </div>
        </CustomForm>
    );
}
