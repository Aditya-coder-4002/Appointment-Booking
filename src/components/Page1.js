import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserMd, faUserInjured, faUser, faEnvelope, faIdCard, faLock, faPhone } from "@fortawesome/free-solid-svg-icons";
import { auth } from "../firebase"; 
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"; 

const formTemplates = {
    doctor: {
        signup: [
            { icon: faUser, type: "text", placeholder: "Full Name", required: true },
            { icon: faEnvelope, type: "email", placeholder: "Professional Email", required: true },
            { icon: faIdCard, type: "text", placeholder: "License Number", required: true },
            { icon: faLock, type: "password", placeholder: "Create Password", required: true },
        ],
        signin: [
            { icon: faEnvelope, type: "email", placeholder: "Professional Email", required: true },
            { icon: faLock, type: "password", placeholder: "Password", required: true },
        ],
    },
    patient: {
        signup: [
            { icon: faUser, type: "text", placeholder: "Full Name", required: true },
            { icon: faEnvelope, type: "email", placeholder: "Personal Email", required: true },
            { icon: faPhone, type: "tel", placeholder: "Phone Number", required: true },
            { icon: faLock, type: "password", placeholder: "Create Password", required: true },
        ],
        signin: [
            { icon: faEnvelope, type: "email", placeholder: "Email Address", required: true },
            { icon: faLock, type: "password", placeholder: "Password", required: true },
        ],
    },
};

const MedicalAccessPortal = () => {
    const [currentRole, setCurrentRole] = useState("doctor");
    const [currentAuthType, setCurrentAuthType] = useState("signup");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        const email = data.email;
        const password = data.password;

        try {
            if (currentAuthType === "signup") {
                await createUserWithEmailAndPassword(auth, email, password);
                alert("Sign-up successful!");
            } else {
                await signInWithEmailAndPassword(auth, email, password);
                alert("Sign-in successful!");
            }

            if (currentRole === "patient" && currentAuthType === "signup") {
                navigate("/doctor");
            } else if(currentRole === "patient" && currentAuthType === "signin"){
                navigate("/doctor"); 
            } else{
                navigate("/patient");
            }

            if (currentRole === "doctor" && currentAuthType === "signup") {
                navigate("/patient");
            } else if(currentRole === "doctor" && currentAuthType === "signin"){
                navigate("/patient"); 
            } else{
                navigate("/doctor");
            }       

        } catch (error) {
            console.error("Firebase error:", error.message);
            alert("Authentication failed: " + error.message);
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.authCard}>
                <h1 style={styles.logo}>JIVAN</h1>

                <div style={styles.authToggle}>
                    <button 
                        style={{ ...styles.toggleBtn, ...(currentAuthType === "signup" ? styles.activeBtn : {}) }}
                        onClick={() => setCurrentAuthType("signup")}
                    >
                        Sign Up
                    </button>
                    <button 
                        style={{ ...styles.toggleBtn, ...(currentAuthType === "signin" ? styles.activeBtn : {}) }}
                        onClick={() => setCurrentAuthType("signin")}
                    >
                        Sign In
                    </button>
                </div>

                <div style={styles.roleSelector}>
                    <div 
                        style={{ ...styles.roleCard, ...(currentRole === "doctor" ? styles.activeRole : {}) }}
                        onClick={() => setCurrentRole("doctor")}
                    >
                        <FontAwesomeIcon icon={faUserMd} />
                        <span>Doctor</span>
                    </div>
                    <div 
                        style={{ ...styles.roleCard, ...(currentRole === "patient" ? styles.activeRole : {}) }}
                        onClick={() => setCurrentRole("patient")}
                    >
                        <FontAwesomeIcon icon={faUserInjured} />
                        <span>Patient</span>
                    </div>
                </div>

                <form onSubmit={handleSubmit} style={styles.authForm}>
                    {formTemplates[currentRole][currentAuthType].map((field, index) => (
                        <div style={styles.inputGroup} key={index}>
                            <FontAwesomeIcon icon={field.icon} style={styles.inputIcon} />
                            <input 
                                type={field.type} 
                                placeholder={field.placeholder} 
                                name={field.type === "email" ? "email" : field.type === "password" ? "password" : `field${index}`}
                                required={field.required}
                                style={styles.input}
                            />
                        </div>
                    ))}
                    <button type="submit" style={styles.submitBtn}>
                        {currentAuthType === "signup" ? "Create Account" : "Sign In"}
                    </button>
                </form>
            </div>
        </div>
    );
};



const styles = {
    container: {
        width: "100%",
        maxWidth: "500px",
        padding: "20px",
        margin: "0 auto",
    },
    authCard: {
        background: "#fff",
        padding: "2rem",
        borderRadius: "15px",
        boxShadow: "0 10px 30px rgba(25, 118, 210, 0.1)",
    },
    logo: {
        textAlign: "center",
        color: "#1976D2",
        marginBottom: "2rem",
        fontSize: "2.5rem",
    },
    authToggle: {
        display: "flex",
        gap: "1rem",
        marginBottom: "1.5rem",
    },
    toggleBtn: {
        flex: 1,
        padding: "0.8rem",
        border: "none",
        background: "#f5f9ff",
        color: "#1976D2",
        borderRadius: "8px",
        fontSize: "1rem",
        cursor: "pointer",
        transition: "all 0.3s ease",
    },
    activeBtn: {
        background: "#1976D2",
        color: "white",
    },
    roleSelector: {
        display: "flex",
        gap: "1rem",
        margin: "2rem 0",
        justifyContent: "center",
    },
    roleCard: {
        padding: "1rem 1.5rem",
        border: "2px solid #e3f2fd",
        borderRadius: "10px",
        cursor: "pointer",
        transition: "all 0.3s ease",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
    },
    activeRole: {
        borderColor: "#1976D2",
        background: "#e3f2fd",
    },
    inputGroup: {
        position: "relative",
        marginBottom: "1rem",
    },
    inputIcon: {
        position: "absolute",
        left: "15px",
        top: "50%",
        transform: "translateY(-50%)",
        color: "#1976D2",
    },
    input: {
        width: "100%",
        padding: "12px 15px 12px 40px",
        border: "2px solid #e3f2fd",
        borderRadius: "8px",
        fontSize: "1rem",
        transition: "all 0.3s ease",
    },
    submitBtn: {
        width: "100%",
        padding: "12px",
        background: "#1976D2",
        color: "white",
        border: "none",
        borderRadius: "8px",
        fontSize: "1rem",
        cursor: "pointer",
        marginTop: "1rem",
    },
};

export default MedicalAccessPortal;


