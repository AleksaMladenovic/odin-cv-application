import { useState } from "react";
import { CVInformation } from "../data/CVInformation";
import TextInput from "./TextInput";
export default function PersonalInformation() {
    const [firstName, setFirstName] = useState(
        CVInformation.personalInformation.firstName
    );
    const [lastName, setLastName] = useState(
        CVInformation.personalInformation.lastName
    );
    const [phoneNumber, setPhoneNumber] = useState(
        CVInformation.personalInformation.phoneNumber
    );
    const [email, setEmail] = useState(CVInformation.personalInformation.email);
    const [address, setAddress] = useState(
        CVInformation.personalInformation.address
    );

    CVInformation.personalInformation = {
        firstName,
        lastName,
        phoneNumber,
        email,
        address,
    };
    return (
        <section className="form personalInformation">
            <h1>Personal Information</h1>
            <TextInput
                type="text"
                id="firstName"
                onChange={(event) => {
                    setFirstName(event.target.value);
                }}
                value={firstName}
            >First Name</TextInput>

            <TextInput
                type="text"
                id="lastName"
                onChange={(event) => {
                    setLastName(event.target.value);
                }}
                value={lastName}
            >Last Name</TextInput>

            <TextInput
                type="tel"
                id="phoneNumber"
                pattern="[0-9]+"
                onChange={(event) => {
                    const onlyNums = event.target.value.replace(/[^0-9+]/g, "");
                    setPhoneNumber(onlyNums);
                }}
                value={phoneNumber}
            >Phone Number</TextInput>

            <TextInput
                type="email"
                id="email"
                onChange={(event) => {
                    setEmail(event.target.value);
                }}
                value={email}
            >Email</TextInput>

            <TextInput
                type="text"
                id="address"
                onChange={(event) => {
                    setAddress(event.target.value);
                }}
                value={address}
            >Address</TextInput>
        </section>
    );
}
