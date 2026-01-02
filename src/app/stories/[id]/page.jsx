import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineBriefcase,
  HiOutlineBadgeCheck,
} from "react-icons/hi";
import { FaQuoteLeft, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

// 1. Move data outside to prevent re-creation on every render
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

const StoryDetailsPage = async ({ params }) => {
  const { id } = await params;

  // FIX: Convert id to Number for comparison
  const singleStory = devStory.find((story) => story.id === parseInt(id));

  if (!singleStory) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f2edf3]">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Story not found</h2>
          <Link
            href="/dashboard"
            className="text-[#b66dff] underline mt-4 block"
          >
            Return to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  const { name, designation, company, experience, skills, story, img } =
    singleStory;

  return (
    <div className="min-h-screen bg-[#f2edf3] dark:bg-slate-950 py-10 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* --- BACK BUTTON --- */}
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-[#b66dff] font-bold mb-8 transition-all group"
        >
          <HiOutlineArrowNarrowLeft className="group-hover:-translate-x-2 transition-transform" />
          Back to Dashboard
        </Link>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* --- LEFT SIDE: PROFILE CARD --- */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 shadow-2xl shadow-purple-200/50 dark:shadow-none border border-white relative overflow-hidden lg:sticky lg:top-24 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#b66dff]/10 blur-3xl rounded-full" />

              <div className="flex flex-col items-center text-center">
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-[2rem] overflow-hidden rotate-3 shadow-2xl border-4 border-white">
                  <Image
                    src={img}
                    alt={name}
                    fill
                    className="object-cover -rotate-3 scale-110"
                  />
                </div>

                <h1 className="text-3xl font-black text-[#3e4b5b] dark:text-white mt-6 tracking-tighter">
                  {name}
                </h1>
                <p className="text-[#b66dff] font-bold uppercase tracking-widest text-sm mt-2">
                  {designation}
                </p>

                <div className="flex items-center gap-2 mt-4 px-4 py-2 bg-purple-50 dark:bg-slate-800 rounded-2xl text-purple-600 dark:text-purple-300 text-sm font-bold">
                  <HiOutlineBriefcase />
                  {company}
                </div>

                <div className="flex gap-4 mt-8">
                  {[FaLinkedin, FaGithub, FaTwitter].map((Icon, i) => (
                    <button
                      key={i}
                      className="p-3 bg-gray-50 dark:bg-slate-800 rounded-xl text-gray-400 hover:text-[#b66dff] hover:bg-white transition-all shadow-sm border border-gray-100 dark:border-slate-700"
                    >
                      <Icon size={20} />
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-100 dark:border-slate-800 grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-[10px] text-gray-400 uppercase font-black">
                    Experience
                  </p>
                  <p className="text-lg font-bold text-[#3e4b5b] dark:text-white">
                    {experience}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-[10px] text-gray-400 uppercase font-black">
                    Success Rate
                  </p>
                  <p className="text-lg font-bold text-[#07cdae]">98%</p>
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: THE STORY --- */}
          <div className="flex-1">
            <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-6 md:p-10 shadow-xl border border-white min-h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-[#b66dff] rounded-xl flex items-center justify-center text-white shadow-lg shadow-purple-200">
                  <FaQuoteLeft />
                </div>
                <h2 className="text-2xl font-black text-[#3e4b5b] dark:text-white tracking-tight">
                  The Developer Journey
                </h2>
              </div>

              <div className="prose prose-purple max-w-none">
                <p className="text-gray-600 dark:text-slate-400 text-lg leading-relaxed first-letter:text-5xl first-letter:font-black first-letter:text-[#b66dff] first-letter:mr-3 first-letter:float-left">
                  {story}
                </p>
                <p className="text-gray-600 dark:text-slate-400 text-lg leading-relaxed mt-6">
                  Beyond just writing code, {name.split(" ")[0]} has
                  consistently pushed for excellence in every project.
                  Collaborating with teams at {company} has provided deep
                  insights into scalable architecture and user-centric design.
                </p>
              </div>

              <div className="mt-12">
                <h3 className="text-lg font-black text-[#3e4b5b] dark:text-white flex items-center gap-2 mb-6">
                  <HiOutlineBadgeCheck className="text-[#07cdae]" size={24} />
                  Core Competencies
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-6 py-3 bg-gradient-to-r from-gray-50 to-white dark:from-slate-800 dark:to-slate-900 border border-gray-100 dark:border-slate-700 text-[#3e4b5b] dark:text-slate-300 font-bold rounded-2xl shadow-sm hover:shadow-md hover:border-[#b66dff] transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-16 p-8 bg-gradient-to-br from-[#b66dff] to-[#6a00f4] rounded-[2rem] text-white flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
                <div className="z-10 text-center md:text-left">
                  <h4 className="text-2xl font-black">
                    Inspired by this story?
                  </h4>
                  <p className="opacity-80">
                    Collaborate with {name.split(" ")[0]} on your next big
                    project.
                  </p>
                </div>
                <button className="z-10 bg-white text-[#b66dff] px-8 py-4 rounded-2xl font-black hover:scale-105 transition-transform shadow-xl">
                  Connect Now
                </button>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryDetailsPage;
