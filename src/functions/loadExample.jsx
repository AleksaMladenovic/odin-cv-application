import { changeCVInformation, CVInformation } from "../data/CVInformation";

export default function loadExample(){
    const confirmed = window.confirm("Do you want to load the example? This will erase all data from the forms.");
    if(confirmed){
        changeCVInformation(Example);
    }

    return confirmed;
}

const Example = {
    personalInformation: {
        "firstName": "Aleksa",
        "lastName": "Mladenović",
        "phoneNumber": "+381621788341",
        "email": "aleksa.mladenoviccc03@gmail.com",
        "address": "Borislava Nikolica Serjože 19, Nis"
    },
    professionalSummary: {
        "role": "Software Developer",
        "summary": "Motivated and dedicated third-year student at the Faculty of Electronic Engineering in Niš, with a GPA of 9.40. Eager to learn, work in teams, and quickly adapt to new technologies. Particularly interested in web development, artificial intelligence, and machine learning. Known for strong analytical thinking, a sense of responsibility, and a continuous drive for professional growth. Open to internships and projects that offer real-world experience and skill development."
    },
    workExperience: [
        {
            "position": "Dostavljac",
            "organization": "Glovo",
            "employmentType": "onsite",
            "location": "Nis, Serbia",
            "tenure": "completed",
            "fromTenure": "2023-05-16",
            "toTenure": "2024-11-16",
            "accomplishments": [
                "Dobra voznja",
                "Komunikacija sa ljudima"
            ]
        },
        {
            "position": "Programer",
            "organization": "Dual Soft",
            "employmentType": "remote",
            "location": "",
            "tenure": "ongoing",
            "fromTenure": "2025-01-12",
            "toTenure": "",
            "accomplishments": [
                "Naucio sam Web",
                "Naucio sam React"
            ]
        }
    ],
    education: [
        {
            "degree": "Inzenjer racunarstva i informatike",
            "institution": "Elektronski fakultet",
            "tenure": "ongoing",
            "fromTenure": "2023-10-16",
            "toTenure": "",
            "location": "Nis, Srbija"
        },
        {
            "degree": "Elektrotehnicar informacionih tehnologija",
            "institution": "Mija Stanimirovic",
            "tenure": "completed",
            "fromTenure": "2019-09-16",
            "toTenure": "2023-06-16",
            "location": "Nis, Srbija"
        }
    ],
    skills: [
        "Pametan",
        "Govorim Engleski",
        "C++",
        "C#",
        "Java",
        "JS",
        "React",
        "HTML",
        "CSS"
    ]

}

