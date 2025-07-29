import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiPython,
  SiGithub,
  SiFigma,
  SiAngular,
  SiLinux,
  SiMysql,
  SiOpenjdk,
  SiSymfony,
} from "react-icons/si";

function Avatar(props) {
  return (
    <div className="avatar">
      <img src={props.imageUrl} alt={props.altText} />
    </div>
  );
}

function Intro(props) {
  return (
    <div className="intro">
      <p>{props.text}</p>
    </div>
  );
}

function Skill(props) {
  return (
    <span className="skill" style={{ backgroundColor: props.color }}>
      <span className="icon">{props.icon}</span>
      {props.name}
    </span>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill name="HTML5" color="#e34c26" icon={<SiHtml5 />} />
      <Skill name="CSS3" color="#2965f1" icon={<SiCss3 />} />
      <Skill name="JavaScript" color="#f0db4f" icon={<SiJavascript />} />
      <Skill name="React" color="#61dafb" icon={<SiReact />} />
      <Skill name="Python" color="#ff9900" icon={<SiPython />} />
      <Skill name="GitHub" color="#24292e" icon={<SiGithub />} />
      <Skill name="Figma" color="#20c997" icon={<SiFigma />} />
      <Skill name="Angular" color="#dd0031" icon={<SiAngular />} />
      <Skill name="Linux" color="#000000" icon={<SiLinux />} />
      <Skill name="MySQL" color="#00758f" icon={<SiMysql />} />
      <Skill name="Symfony" color="#000000" icon={<SiSymfony />} />
      <Skill name="Java" color="#f89820" icon={<SiOpenjdk />} />
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <Avatar imageUrl="/image.png" altText="Mohamed Youssef Dhib" />
      <Intro text="Hello! I'm Mohamed Youssef Dhib, a passionate DSI (Développement Système Informatique) student based in Rades, Ben Arous. I'm currently studying at ISET Rades and have over three years of experience in software development. My strengths lie in Java, HTML, CSS, and Python, with practical skills in frameworks like React and Symfony. I’m deeply interested in backend and full-stack development, and I enjoy building real-world applications that solve meaningful problems. I'm open to internships and new opportunities to grow in the tech field. Feel free to reach out to me at youssefdhib28@gmail.com!" />
      <SkillList />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
