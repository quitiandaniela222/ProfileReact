import React, { useState } from 'react';
import './EditProfile.css';
import profileImage from './profile.png';




const EditProfile = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [contactsNumber, setContactsNumber] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [country, setCountry] = useState('');
    const [password, setPassword] = useState('');

    const handleFirstNameChange = (event) => {
        const updateFirstName = event.target.value;
        if (isNaN(updateFirstName) || updateFirstName === "") {
            setFirstName(updateFirstName);
        }
    };

    const handleLastNameChange = (event) => {
        const updateLastName = event.target.value;
        if (isNaN(updateLastName) || updateLastName === "") {
            setLastName(updateLastName);
        }
    };

    const handleEmailChange = (event) => {
        const updateEmail = event.target.value;
        setEmail(updateEmail);

    };

    const handleContactsNumberChange = (event) => {
        const updatedContactsNumber = event.target.value;
        if (!isNaN(updatedContactsNumber)) {
            setContactsNumber(updatedContactsNumber);
        }
    };

    const handleAddressChange = (event) => {
        const updatedAddress = event.target.value;
        setAddress(updatedAddress);
    };


    const handleCityChange = (event) => {
        const updateCity = event.target.value;
        if (isNaN(updateCity) || updateCity === "") {
            setCity(updateCity);
        }
    };

    const handleStateChange = (event) => {
        const updateState = event.target.value;
        if (isNaN(updateState) || updateState === "") {
            setState(updateState);
        }
    };

    const handleZipCodeChange = (event) => {
        const updatedZipCode = event.target.value;
        if (!isNaN(updatedZipCode)) {
            setZipCode(updatedZipCode);
        }
    };

    const handleCountryChange = (event) => {
        const updateCountry = event.target.value;
        if (isNaN(updateCountry) || updateCountry === "") {
            setCountry(updateCountry);
        }
    };

    const handlePasswordChange = (event) => {
        const updatePassword = event.target.value;
        setPassword(updatePassword);

    };
    return (

        <div className="card">
            <div className="card-header">Edit Profile
            <img src={profileImage} alt="Profile Image" /> </div>

            <div className="FirsName">
            
            <div className="Name">
                <label>Fast Name</label>
                <input value={firstName} onChange={handleFirstNameChange} /></div>
                
                <div className="Last">
                <label>Last Name</label>
                <input value={lastName} onChange={handleLastNameChange} /></div>
            </div>


            <div className="form-row">
                <label>Email</label>
                <input value={email} onChange={handleEmailChange} />
            </div>

            <div className="form-row">
                <label>Contacts Number</label>
                <input value={contactsNumber} onChange={handleContactsNumberChange} />
            </div>

            <div className="form-row">
                <label>Address</label>
                <input value={address} onChange={handleAddressChange} />
            </div>

            <div className="City-State">
            <div className="City">
                <label>City</label>
                <input value={city} onChange={handleCityChange} />
                </div>

                <div className="State">
                <label>State</label>
                <input value={state} onChange={handleStateChange} />
                </div>
            </div>

            <div className="ZipCode">

            <div className="Zip">
                <label>Zip Code</label>
                <input value={zipCode} onChange={handleZipCodeChange} />
                </div>
                <div className="Country">
                <label>Country</label>
                <input value={country} onChange={handleCountryChange} />
                </div>
            </div>
            <div className="form-row">
    <label>Password</label>
    <input type="password" value={password} onChange={handlePasswordChange} minLength={6} />
</div>
        </div>
    );
}


export default EditProfile;