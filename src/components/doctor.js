import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./doctor.css";
import p1 from "../images/p1.png";
import p2 from "../images/p2.jpg";
import p3 from "../images/p3.jpg";
import p4 from "../images/p4.jpg";
import p5 from "../images/p5.jpg";
import p6 from "../images/p6.jpg";
import p7 from "../images/p7.jpg";
import p8 from "../images/p8.jpg";
import p9 from "../images/p9.jpg";
import p10 from "../images/p10.jpg";
import p11 from "../images/p11.jpg";
import p12 from "../images/p12.jpg";
import p13 from "../images/p9.jpg";
import p14 from "../images/p14.jpg";
import p15 from "../images/p7.jpg";
import p16 from "../images/p16.jpg";
import p17 from "../images/p5.jpg";
import p18 from "../images/p18.jpg";
import p19 from "../images/p3.jpg";
import p20 from "../images/p20.jpg";


const doctors = [
    { id: 1, name: "Dr. Alice Smith", specialization: "General Physician", image: p1 },
    { id: 2, name: "Dr. John Doe", specialization: "Pediatrician", image: p2 },
    { id: 3, name: "Dr. Emily Brown", specialization: "Dentist", image: p3 },
    { id: 4, name: "Dr. Michael Green", specialization: "Dermatologist", image:p4 },
    { id: 5, name: "Dr. Sophia White", specialization: "Orthopedist", image: p5 },
    { id: 6, name: "Dr. William Jones", specialization: "Pediatrician", image: p6 },
    { id: 7, name: "Dr. Olivia Taylor", specialization: "General Physician", image: p7 },
    { id: 8, name: "Dr. James Wilson", specialization: "Dentist", image: p8 },
    { id: 9, name: "Dr. Amelia Harris", specialization: "Orthopedist", image: p9 },
    { id: 10, name: "Dr. Henry Martin", specialization: "Dermatologist", image: p10 },
    { id: 11, name: "Dr. Charlotte Clark", specialization: "Pediatrician", image:p11},
    { id: 12, name: "Dr. Daniel Lewis", specialization: "Dentist", image: p12 },
    { id: 13, name: "Dr. Grace Young", specialization: "General Physician", image: p13 },
    { id: 14, name: "Dr. Alexander Walker", specialization: "Dermatologist", image: p14 },
    { id: 15, name: "Dr. Chloe Hill", specialization: "Orthopedist", image: p15 },
    { id: 16, name: "Dr. Benjamin Scott", specialization: "Pediatrician", image: p16 },
    { id: 17, name: "Dr. Mia Adams", specialization: "General Physician", image: p17 },
    { id: 18, name: "Dr. Christopher Evans", specialization: "Dermatologist", image: p18 },
    { id: 19, name: "Dr. Lily Carter", specialization: "Orthopedist", image: p19 },
    { id: 20, name: "Dr. Jacob Turner", specialization: "Dentist", image: p20 },
];


const DoctorPage = () => {
    const [filteredSpecialization, setFilteredSpecialization] = useState("All");
    const navigate = useNavigate();

    const handleFilterClick = (specialization) => {
        setFilteredSpecialization(specialization);
    };

    const filteredDoctors =
        filteredSpecialization === "All"
            ? doctors
            : doctors.filter((doctor) => doctor.specialization === filteredSpecialization);

    const handleMoreDetailsClick = (doctor) => {
        navigate(`/book-appointment/${doctor.id}`, { state: { doctor } });
    };

    return (
        <div>
            <div className="filter-buttons">
                <button onClick={() => handleFilterClick("All")}>All</button>
                <button onClick={() => handleFilterClick("General Physician")}>General Physician</button>
                <button onClick={() => handleFilterClick("Pediatrician")}>Pediatrician</button>
                <button onClick={() => handleFilterClick("Dentist")}>Dentist</button>
                <button onClick={() => handleFilterClick("Dermatologist")}>Dermatologist</button>
                <button onClick={() => handleFilterClick("Orthopedist")}>Orthopedist</button>
            </div>
            <div className="doctor-container">
                {filteredDoctors.map((doctor) => (
                    <div className="doctor-card" key={doctor.id}>
                        <img className="doctor-image" src={doctor.image} alt={doctor.name} />
                        <h2 className="doctor-name">{doctor.name}</h2>
                        <p className="doctor-specialization">Specialization: {doctor.specialization}</p>
                        <button
                            className="more-details-btn"
                            onClick={() => handleMoreDetailsClick(doctor)}
                        >
                            More Details
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DoctorPage;