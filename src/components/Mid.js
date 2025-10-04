import React from "react";
import doctorImage from "../images/doctor1.png"; 

const InfoSection = () => {
  return (
    <div style={styles.container}>
      
      <div style={styles.textContainer}>
        <h2 style={styles.title}>Welcome to Our Platform</h2>
        <p style={styles.description}>
          We offer the best services to help you achieve your goals. Our platform is designed to provide seamless experiences, 
          powerful tools, and outstanding support. Join us today and make the most of our amazing features.
        </p>
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
    justifyContent: "center",
    padding: "40px",
    maxWidth: "1000px",
    margin: "0px 0px 0px 250px",
    gap: "40px",
    flexWrap: "wrap", 
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
};

export default InfoSection;
