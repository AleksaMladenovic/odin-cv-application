import React from "react";
import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    PDFDownloadLink,
    Svg,
    Path,
    Font,
} from "@react-pdf/renderer";
import { CVInformation } from "../data/CVInformation";
import formatDate from "../functions/formatDate";

Font.register({
    family:'Roboto',
    fonts:[{
        src:'/fonts/Roboto/Roboto-Regular.ttf',
        fontWeight:'normal'
    },
    {
        src:'/fonts/Roboto/Roboto-Bold.ttf',
        fontWeight:'bold'
    },],
})

// 1. Stilovi
const styles = StyleSheet.create({
    page: {
        padding: 30,
        fontSize: 12,
        fontFamily: "Roboto",
    },
    name: {
        fontSize: "30px",
        fontWeight: "bold",
    },
    role: {
        fontSize: "20px",
        color: "#0000ff",
        marginTop: "-6px",
        marginBottom: "-5px",
    },
    otherInfos: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "20px",
        rowGap: "3px",
        marginTop: "5px",
    },
    info: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "5px",
        padding: "2px 5px",
        borderRadius: "10px",
    },
    svg: {
        width: "14px",
        height: "14px",
        color: "#0000ff",
    },
    title: {
        fontSize: "20px",
        fontWeight: "bold",
        borderBottom: "3px solid black",
        lineHeight: "22px",
        marginBottom: "5px",
        marginTop: "5px",
    },
    skills: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "20px",
        rowGap: "5px",
    },
    skill: {
        borderBottom: "1px solid gray",
        fontWeight: "bold",
    },
    topBorder: {
        borderTop: "1px dashed gray",
        marginTop: "15px",
    },
    sectionTitle: {
        fontSize: "20px",
        fontWeight: "bold",
    },
    sectionAfterTitle: {
        color: "#0000ff",
        fontSize: "16px",
        marginTop: "-2px",
    },
    otherInfosSmaller: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "20px",
        rowGap: "3px",
        // marginTop: "-3px",
    },
    list: {
        paddingLeft: "20px",
    },
});

// 2. SVG ikonice (ručno napisane - kao primer)
function DateSVG() {
    return (
        <Svg
            viewBox="0 0 16 16"
            fill="#0000ff"
            xmlns="http://www.w3.org/2000/svg"
            style={styles.svg}
        >
            <Path d="M6 0H3V2H1V5H15V2H13V0H10V2H6V0Z" fill="#0000ff" />
            <Path d="M15 7H1V15H15V7Z" fill="#0000ff" />
        </Svg>
    );
}

function LocationSVG() {
    return (
        <Svg
            viewBox="0 0 16 16"
            fill="#0000ff"
            xmlns="http://www.w3.org/2000/svg"
            style={styles.svg}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.37892 10.2236L8 16L12.6211 10.2236C13.5137 9.10788 14 7.72154 14 6.29266V6C14 2.68629 11.3137 0 8 0C4.68629 0 2 2.68629 2 6V6.29266C2 7.72154 2.4863 9.10788 3.37892 10.2236ZM8 8C9.10457 8 10 7.10457 10 6C10 4.89543 9.10457 4 8 4C6.89543 4 6 4.89543 6 6C6 7.10457 6.89543 8 8 8Z"
                fill="#0000ff"
            />
        </Svg>
    );
}

function MailSVG() {
    return (
        <Svg
            viewBox="0 0 16 16"
            fill="#0000ff"
            xmlns="http://www.w3.org/2000/svg"
            style={styles.svg}
        >
            <Path
                d="M0 5.3585V14H16V5.35849L8 10.3585L0 5.3585Z"
                fill="#0000ff"
            />
            <Path d="M16 3V2H0V3L8 8L16 3Z" fill="#0000ff" />
        </Svg>
    );
}

function PhoneSVG() {
    return (
        <Svg
            viewBox="0 0 16 16"
            fill="#0000ff"
            xmlns="http://www.w3.org/2000/svg"
            style={styles.svg}
        >
            <Path
                d="M1 5V1H7V5L4.5 7.5L8.5 11.5L11 9H15V15H11C5.47715 15 1 10.5228 1 5Z"
                fill="#0000ff"
            />
        </Svg>
    );
}

// 3. PDF komponenta
function MyPdfDocument() {
    const personalInformation = CVInformation.personalInformation;
    const proffesionalSummary = CVInformation.professionalSummary;
    return (
        <Document>
            <Page style={styles.page}>
                <View className="finalPreview">
                    <Text style={styles.name}>
                        {personalInformation.firstName +
                            " " +
                            personalInformation.lastName}
                    </Text>
                    {proffesionalSummary.role && (
                        <Text style={styles.role}>
                            {proffesionalSummary.role}
                        </Text>
                    )}
                    <View style={styles.otherInfos}>
                        <View style={styles.info}>
                            <PhoneSVG />
                            <Text>{personalInformation.phoneNumber}</Text>
                        </View>
                        <View style={styles.info}>
                            <MailSVG />
                            <Text>{personalInformation.email}</Text>
                        </View>
                        <View style={styles.info}>
                            <LocationSVG />
                            <Text>{personalInformation.address}</Text>
                        </View>
                    </View>
                    <Text style={styles.title}>SUMMARY</Text>
                    <Text>{proffesionalSummary.summary}</Text>
                    <Text style={styles.title}>SKILLS</Text>
                    <View style={styles.skills}>
                        {CVInformation.skills.map((skill) => {
                            return (
                                <View style={styles.skill}>
                                    <Text>{skill}</Text>
                                </View>
                            );
                        })}
                    </View>
                    <Text style={styles.title}>EXPERIENCE</Text>
                    <View className="allExperience">
                        {CVInformation.workExperience.map(
                            (experience, index) => {
                                return (
                                    <View
                                        style={
                                            index !== 0 ? styles.topBorder : ""
                                        }
                                    >
                                        <Text style={styles.sectionTitle}>
                                            {experience.position}
                                        </Text>
                                        <Text style={styles.sectionAfterTitle}>
                                            {experience.organization}
                                        </Text>
                                        <View style={styles.otherInfosSmaller}>
                                            <View style={styles.info}>
                                                <DateSVG />
                                                <Text>
                                                    {formatDate(
                                                        experience.fromTenure
                                                    ) +
                                                        " - " +
                                                        (experience.toTenure ===
                                                        ""
                                                            ? "Present"
                                                            : formatDate(
                                                                  experience.toTenure
                                                              ))}
                                                </Text>
                                            </View>
                                            <View style={styles.info}>
                                                <LocationSVG />
                                                <Text>
                                                    {experience.location === ""
                                                        ? "Remote"
                                                        : experience.location}
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={styles.list}>
                                            {experience.accomplishments.map(
                                                (accomp) => {
                                                    return (
                                                        <View className="listElement">
                                                            <Text>
                                                                {"•  " + accomp}
                                                            </Text>
                                                        </View>
                                                    );
                                                }
                                            )}
                                        </View>
                                    </View>
                                );
                            }
                        )}
                    </View>
                    <Text style={styles.title}>EDUCATION</Text>
                    <View className="allEducations">
                        {CVInformation.education.map((education, index) => {
                            return (
                                <View
                                    style={index !== 0 ? styles.topBorder : ""}
                                >
                                    <Text style={styles.sectionTitle}>
                                        {education.degree}
                                    </Text>
                                    <Text style={styles.sectionAfterTitle}>
                                        {education.institution}
                                    </Text>
                                    <View style={styles.otherInfosSmaller}>
                                        <View style={styles.info}>
                                            <DateSVG />
                                            <Text>
                                                {formatDate(
                                                    education.fromTenure
                                                ) +
                                                    " - " +
                                                    (education.toTenure === ""
                                                        ? "Present"
                                                        : formatDate(
                                                              education.toTenure
                                                          ))}
                                            </Text>
                                        </View>
                                        <View style={styles.info}>
                                            <LocationSVG />
                                            <Text>
                                                {education.location === ""
                                                    ? "Remote"
                                                    : education.location}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            );
                        })}
                    </View>
                </View>
            </Page>
        </Document>
    );
}

// 4. Komponenta sa dugmetom za preuzimanje
const PDFDownloadButton = () => {
    return (
        <div>
            {/* <h2>Preuzmi PDF sa podacima</h2> */}
            <PDFDownloadLink document={<MyPdfDocument />} fileName="profil.pdf">
                {({ loading }) =>
                    loading ? "Generate PDF..." : "Download PDF"
                }
            </PDFDownloadLink>
        </div>
    );
};

export default PDFDownloadButton;
