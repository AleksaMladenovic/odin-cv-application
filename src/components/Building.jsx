import { useState } from "react";
import { cvSections } from "../data/sections";
import SectionMenu from "./SectionMenu";
import PersonalInformation from "./PersonalInformation";
import ProfessionalSummary from "./ProfessionalSummary";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Skills from "./Skills";
import '../stylesheets/building.css'
import PreviousSVG from "./SVGs/PreviousSVG";
import NextSVG from "./SVGs/NextSVG";

export default function Building() {
    const [sectionIndex, setSectionIndex] = useState(0);

    const hasNext = sectionIndex !== cvSections.length - 1;
    const hasPrevious = sectionIndex !== 0;
    return (
        <div className="building">
            <SectionMenu
                selectedIndex={sectionIndex}
                onChangeLi={setSectionIndex}
            />

            {cvSections[sectionIndex] === "Personal Information" && (
                <PersonalInformation />
            )}
            {cvSections[sectionIndex] === "Professional Summary" && (
                <ProfessionalSummary />
            )}
            {cvSections[sectionIndex] === "Work Experience" && (
                <WorkExperience />
            )}
            {cvSections[sectionIndex] === "Education" && <Education />}
            {cvSections[sectionIndex] === "Skills" && <Skills />}

            <div className="prevNextBtns">
                <button
                    className={"previousBtn svgBtn noRotate"}
                    disabled={!hasPrevious}
                    onClick={() =>
                        hasPrevious ? setSectionIndex(sectionIndex - 1) : null
                    }
                >
                    <PreviousSVG/>
                </button>
                <button
                    className="nextBtn svgBtn noRotate"
                    disabled={!hasNext}
                    onClick={() =>
                        hasNext ? setSectionIndex(sectionIndex + 1) : null
                    }
                >
                    <NextSVG/>
                </button>
            </div>
        </div>
    );
}
