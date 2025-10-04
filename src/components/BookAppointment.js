import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./appointment.css";

const BookAppointment = () => {
    const location = useLocation();
    const doctor = location.state?.doctor;

    const [appointmentDate, setAppointmentDate] = useState("");
    const [appointmentTime, setAppointmentTime] = useState("");

    const handleBooking = () => {
        if (appointmentDate && appointmentTime) {
            alert(`Appointment booked with ${doctor.name} on ${appointmentDate} at ${appointmentTime}!`);
        } else {
            alert("Please select both a date and time for your appointment.");
        }
    };

    if (!doctor) {
        return <div>Error: Doctor details not found.</div>;
    }

    return (
        <div className="appointment-container">
            <h1>Book an Appointment</h1>
            <div className="doctor-details">
                <img className="doctor-image" src={doctor.image} alt={doctor.name} />
                <h2>{doctor.name}</h2>
                <p>Specialization: {doctor.specialization}</p>
            </div>
            <div className="appointment-form">
                <label>
                    Select Date:
                    <input
                        type="date"
                        value={appointmentDate}
                        onChange={(e) => setAppointmentDate(e.target.value)}
                    />
                </label>
                <label>
                    Select Time:
                    <input
                        type="time"
                        value={appointmentTime}
                        onChange={(e) => setAppointmentTime(e.target.value)}
                    />
                </label>
                <button className="book-appointment-btn" onClick={handleBooking}>
                    Book Appointment
                </button>
            </div>
        </div>
    );
};

export default BookAppointment;