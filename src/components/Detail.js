import React from "react";
import doctorImage from "../images/doctor3.png"; 

const AppointmentBanner = () => {
  return (
    <div style={styles.container}>

      <div style={styles.textContainer}>
        <h2 style={styles.title}>Book Appointment</h2>
        <h2 style={styles.title}>With 100+ Trusted Doctors</h2>
    </div>

     
      <div style={styles.imageContainer}>
        <img 
          src={doctorImage}  
          alt="Doctor"
          style={styles.image}
        />
      </div>
    </div>
  );
};


const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#5A65EA", 
    padding: "50px",
    borderRadius: "20px",
    maxWidth: "1200px",
    margin: "100px 100px 100px 160px",
    color: "#fff",
    flexWrap: "wrap-reverse", 
  },
  textContainer: {
    flex: 1,
    minWidth: "300px",
    padding: "20px",
  },
  title: {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "15px",
  },
  button: {
    padding: "12px 25px",
    fontSize: "18px",
    backgroundColor: "#fff",
    color: "#000",
    border: "none",
    borderRadius: "30px",
    cursor: "pointer",
    marginTop: "20px",
  },
  imageContainer: {
    flex: 1,
    minWidth: "300px",
    textAlign: "center",
  },
  image: {
    width: "100%",
    maxWidth: "400px",
  },
};

export default AppointmentBanner;
