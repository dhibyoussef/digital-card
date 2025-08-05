import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skillsData = [
  { skill: "HTML+CSS", level: "advanced", color: "#2662EA" },
  { skill: "javaScript", level: "advanced", color: "#EFD81D" },
  { skill: "web Design", level: "advanced", color: "#C3DCAF" },
  { skill: "Git and Github", level: "intermediate", color: "#E84F33" },
  { skill: "React", level: "advanced", color: "#60DAFB" },
  { skill: "Python", level: "beginner", color: "#FF3B00" },
];

function Avatar({ imageUrl, altText }) {
  return <img className="avatar" src={imageUrl} alt={altText} />;
}

function Intro({ text }) {
  return <p className="intro">{text}</p>;
}

function Skill({ skill, level, color }) {
  const emojis = {
    advanced: "💪",
    intermediate: "👍",
    beginner: "👶",
  };
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      {skill} <span>{emojis[level]}</span>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skills">
      {skillsData.map((item) => (
        <Skill
          key={item.skill}
          skill={item.skill}
          level={item.level}
          color={item.color}
        />
      ))}
    </div>
  );
}

function Profile() {
  return (
    <div className="profile-card">
      <Avatar imageUrl="/image.png" altText="Mohamed Youssef Dhib" />
      <Intro text="Hello! I'm Mohamed Youssef Dhib, a student in DSI at ISET Rades, Tunisia. I have 3 years of experience in development and love working with React, HTML, CSS, and Python." />
      <SkillList />
    </div>
  );
}

function App() {
  return (
    <div className="wrapper">
      <Profile />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
