import StoryCard from "@/Components/StoryCard";
import Title from "@/Components/Title";
import React from "react";
const devStory = [
  {
    id: 1,
    name: "Rahim Uddin",
    designation: "Frontend Developer",
    company: "TechNova Ltd",
    experience: "2+ Years",
    skills: ["HTML", "CSS", "Tailwind", "JavaScript", "React"],
    story:
      "I began my journey with simple HTML pages and gradually moved into React. Building real projects and learning from mistakes helped me become confident as a frontend developer.",
    img: "https://i.pravatar.cc/150?u=rahim",
  },
  {
    id: 2,
    name: "Nusrat Jahan",
    designation: "Full Stack Developer",
    company: "CloudSoft",
    experience: "3+ Years",
    skills: ["React", "Node.js", "Express", "MongoDB", "Firebase"],
    story:
      "I started as a frontend learner, but curiosity pushed me into backend development. Full-stack skills allowed me to build complete and scalable applications.",
    img: "https://i.pravatar.cc/150?u=nusrat",
  },
  {
    id: 3,
    name: "Tanvir Hasan",
    designation: "Backend Developer",
    company: "DataWave Solutions",
    experience: "4+ Years",
    skills: ["Node.js", "Express", "MongoDB", "JWT", "REST API"],
    story:
      "I enjoy working with logic and databases. Designing secure APIs and handling data efficiently is what motivates me every day.",
    img: "https://i.pravatar.cc/150?u=tanvir",
  },
  {
    id: 4,
    name: "Sadia Akter",
    designation: "UI/UX Designer",
    company: "Creative Hub",
    experience: "2.5+ Years",
    skills: ["Figma", "Adobe XD", "UX Research", "Prototyping"],
    story:
      "I believe good design solves real problems. My goal is to create user-friendly and visually appealing digital experiences.",
    img: "https://i.pravatar.cc/150?u=sadia",
  },
  {
    id: 5,
    name: "Arif Mahmud",
    designation: "Software Engineer",
    company: "Global IT",
    experience: "5+ Years",
    skills: ["Java", "Spring Boot", "MySQL", "System Design"],
    story:
      "Writing clean, scalable code and designing robust systems has been my focus throughout my software engineering career.",
    img: "https://i.pravatar.cc/150?u=arif",
  },
  {
    id: 6,
    name: "Mehedi Hasan",
    designation: "MERN Stack Developer",
    company: "CodeSpark",
    experience: "2+ Years",
    skills: ["MongoDB", "Express", "React", "Node.js"],
    story:
      "Learning MERN stack opened the door to full-stack development for me. I love creating dynamic and data-driven web apps.",
    img: "https://i.pravatar.cc/150?u=mehedi",
  },
  {
    id: 7,
    name: "Farhana Islam",
    designation: "Frontend Engineer",
    company: "PixelCraft",
    experience: "3+ Years",
    skills: ["React", "Next.js", "Tailwind", "Framer Motion"],
    story:
      "I enjoy building smooth, animated user interfaces. Attention to detail and performance matters most in frontend development.",
    img: "https://i.pravatar.cc/150?u=farhana",
  },
  {
    id: 8,
    name: "Sabbir Ahmed",
    designation: "DevOps Engineer",
    company: "InfraTech",
    experience: "4+ Years",
    skills: ["Docker", "AWS", "CI/CD", "Linux"],
    story:
      "Automation and scalability are my passions. I help teams deploy applications faster and more reliably.",
    img: "https://i.pravatar.cc/150?u=sabbir",
  },
  {
    id: 9,
    name: "Ayesha Rahman",
    designation: "Mobile App Developer",
    company: "Appify",
    experience: "3+ Years",
    skills: ["Flutter", "Dart", "Firebase", "REST API"],
    story:
      "Mobile development allows me to reach users directly. I enjoy building fast and user-friendly applications.",
    img: "https://i.pravatar.cc/150?u=ayesha",
  },
  {
    id: 10,
    name: "Imran Hossain",
    designation: "QA Engineer",
    company: "TestLab",
    experience: "2+ Years",
    skills: ["Manual Testing", "Automation", "Selenium", "Jest"],
    story:
      "Quality matters. My role is to ensure software is reliable, bug-free, and ready for real users.",
    img: "https://i.pravatar.cc/150?u=imran",
  },
  {
    id: 11,
    name: "Rifat Karim",
    designation: "Data Analyst",
    company: "InsightX",
    experience: "3+ Years",
    skills: ["Python", "SQL", "Power BI", "Data Visualization"],
    story:
      "Turning raw data into meaningful insights helps businesses make better decisions.",
    img: "https://i.pravatar.cc/150?u=rifat",
  },
  {
    id: 12,
    name: "Jannatul Ferdous",
    designation: "Junior Web Developer",
    company: "StartupLab",
    experience: "1+ Year",
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    story:
      "I am at the beginning of my developer journey. Every project I build helps me learn something new and grow.",
    img: "https://i.pravatar.cc/150?u=jannat",
  },
];

const Story = () => {
  return (
    <div>
      <Title>Explore Dev Story</Title>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
        {devStory.map((story) => (
          <StoryCard story={story} key={story.id} />
        ))}
      </div>
    </div>
  );
};

export default Story;
