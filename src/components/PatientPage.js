import React, { useEffect, useState } from "react";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { auth, db } from "../firebase";

const DoctorPage = () => {
  const [bookings, setBookings] = useState([]);
  const [doctorName, setDoctorName] = useState("");

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      // Extract name from email before "@" or customize as needed
      const name = user.email.split("@")[0].replace(/\./g, " ");
      setDoctorName(name.charAt(0).toUpperCase() + name.slice(1));

      const q = query(
        collection(db, "appointments"),
        where("doctorEmail", "==", user.email)
      );

      const unsubscribe = onSnapshot(q, (snapshot) => {
        const results = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBookings(results);
      });

      return () => unsubscribe();
    }
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Welcome, Dr. {doctorName}</h2>
      <div style={styles.grid}>
        {bookings.map((booking) => (
          <div key={booking.id} style={styles.card}>
            <h3>{booking.patientName}</h3>
            <p><strong>Date:</strong> {booking.date}</p>
            <p><strong>Time:</strong> {booking.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    marginTop: "80px", // Push down to avoid navbar overlap
  },
  heading: {
    fontSize: "2rem",
    color: "#1976D2",
    marginBottom: "1.5rem",
    paddingLeft: "10px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "1.5rem",
  },
  card: {
    padding: "1.5rem",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
    border: "1px solid #e0e0e0",
  },
};

export default DoctorPage;
