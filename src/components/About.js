import React, { useEffect, useState } from "react";
import "./About.css"; 

const teamMembers = [
  {
    id: 1,
    name: "Jaya Prakash Narayan Mishra",
    role: "Team Leader, Frontend Designer, Database Designer",
    image: "./pic.png",
  },
  {
    id: 2,
    name: "Aditya Biswal",
    role: "Frontend Designer",
    image: "./pic2.png",
  },
  {
    id: 3,
    name: "Ladi Nagavardhan",
    role: "Wireframe Designer",
    image: "./pic3.png",
  },
];

const AboutUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".team-section");
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {teamMembers.map((member, index) => (
        <section className="team-section" key={member.id}>
          <div className={`member-card ${index === activeIndex ? "active" : ""}`}>
            <img src={member.image} alt={member.name} className="member-image" />
            <h2 className="member-name">{member.name}</h2>
            <p className="member-role">{member.role}</p>
            <p className="member-description">{member.description}</p>
          </div>
          {index === 0 && <div className="scroll-indicator">▼ Scroll to meet the team ▼</div>}
        </section>
      ))}
    </div>
  );
};

export default AboutUs;
