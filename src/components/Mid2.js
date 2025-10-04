import React from "react";
import doctorImage from "../images/doctor2.png"; 

const InfoSection = () => {
  return (
    <div style={styles.container}>
      
      <div style={styles.imageContainer}>
        <img 
          src={doctorImage}  
          alt="Doctor"
          style={styles.image}
        />
      </div>

   
      <div style={styles.textContainer}>
        <h2 style={styles.title}>Welcome to Our Platform</h2>
        <p style={styles.description}>
        Website helps patients book, reschedule, or cancel appointments online, making healthcare more accessible and convenient. It reduces wait times, minimizes administrative workload for healthcare providers.
        </p>
      </div>
    </div>
  );
};


const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px",
    maxWidth: "1000px",
    margin: "0px 250px 0px 0px",
    gap: "40px",
    flexWrap: "wrap", 
  },
  imageContainer: {
    flex: 1,
    minWidth: "300px",
    textAlign: "center",
  },
  image: {
    width: "80%",
    maxWidth: "500px",
    borderRadius: "10px",
  },
  textContainer: {
    flex: 1,
    minWidth: "300px",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "15px",
  },
  description: {
    fontSize: "18px",
    color: "#555",
    lineHeight: "1.6",
    marginBottom: "20px",
  },
};

export default InfoSection;
