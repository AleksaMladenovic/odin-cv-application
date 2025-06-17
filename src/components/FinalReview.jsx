import CustomForm from "./CustomForm";
import { CVInformation } from "../data/CVInformation";
import PhoneSVG from "./SVGs/PDF/PhoneSVG";
import MailSVG from "./SVGs/PDF/MailSVG";
import Location1SVG from "./SVGs/PDF/Location1SVG";
import "../stylesheets/finalPreview.css";
import Date1SVG from "./SVGs/PDF/Date1SVG";
import formatDate from "../functions/formatDate";
import PDFDownloadButton from "./PDFDownloadButton";

export default function FinalReview({ onOpeningMenu }) {
    return (
        <CustomForm
            onOpeningMenu={onOpeningMenu}
            name="Final Review"
            id="finalReview"
        >
            <PDFDownloadButton></PDFDownloadButton>
            <CVDiv></CVDiv>
        </CustomForm>
    );
}

function CVDiv() {
    const personalInformation = CVInformation.personalInformation;
    const proffesionalSummary = CVInformation.professionalSummary;
    return (
        <div className="finalPreview">
            <p className="name">
                {personalInformation.firstName +
                    " " +
                    personalInformation.lastName}
            </p>
            {proffesionalSummary.role && (
                <p className="role">{proffesionalSummary.role}</p>
            )}
            <div className="otherInfos">
                <div className="info">
                    <PhoneSVG />
                    {personalInformation.phoneNumber}
                </div>
                <div className="info">
                    <MailSVG />
                    {personalInformation.email}
                </div>
                <div className="info">
                    <Location1SVG />
                    {personalInformation.address}
                </div>
            </div>
            <p className="title">SUMMARY</p>
            <p>{proffesionalSummary.summary}</p>
            <p className="title">SKILLS</p>
            <div className="skills">
                {CVInformation.skills.map((skill) => {
                    return <div className="skill">{skill}</div>;
                })}
            </div>
            <p className="title">EXPERIENCE</p>
            <div className="allExperience">
                {CVInformation.workExperience.map((experience, index) => {
                    return (
                        <div
                            className={
                                "experience" + (index !== 0 ? " topBorder" : "")
                            }
                        >
                            <p className="sectionTitle">
                                {experience.position}
                            </p>
                            <p className="sectionAfterTitle">
                                {experience.organization}
                            </p>
                            <div className="otherInfosSmaller">
                                <div className="info">
                                    <Date1SVG />
                                    {formatDate(experience.fromTenure) +
                                        " - " +
                                        (experience.toTenure === ""
                                            ? "Present"
                                            : formatDate(experience.toTenure))}
                                </div>
                                <div className="info">
                                    <Location1SVG />
                                    {experience.location === ""
                                        ? "Remote"
                                        : experience.location}
                                </div>
                            </div>
                            <div className="list">
                                {experience.accomplishments.map((accomp) => {
                                    return (
                                        <div className="listElement">
                                            {"•  " + accomp}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
            <p className="title">EDUCATION</p>
            <div className="allEducations">
                {CVInformation.education.map((education, index) => {
                    return (
                        <div
                            className={
                                "edu" + (index !== 0 ? " topBorder" : "")
                            }
                        >
                            <p className="sectionTitle">{education.degree}</p>
                            <p className="sectionAfterTitle">{education.institution}</p>
                            <div className="otherInfosSmaller">
                                <div className="info">
                                    <Date1SVG />
                                    {formatDate(education.fromTenure) +
                                        " - " +
                                        (education.toTenure === ""
                                            ? "Present"
                                            : formatDate(education.toTenure))}
                                </div>
                                <div className="info">
                                    <Location1SVG />
                                    {education.location === ""
                                        ? "Remote"
                                        : education.location}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
