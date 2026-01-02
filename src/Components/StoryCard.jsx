"use client"; // Required for Framer Motion animations
import Image from "next/image";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import Link from "next/link";

const StoryCard = ({ story, index }) => {
  const {
    name,
    designation,
    company,
    experience,
    skills,
    story: devStory,
    img,
  } = story;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-slate-900 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 p-8 flex flex-col border border-gray-100 dark:border-slate-800 relative overflow-hidden group"
    >
      {/* Subtle Background Decoration */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-50 dark:bg-purple-900/10 rounded-full blur-3xl group-hover:bg-purple-100 transition-colors duration-500" />

      {/* Profile Header */}
      <div className="flex items-center gap-5 z-10">
        <div className="relative w-16 h-16 rounded-2xl overflow-hidden ring-4 ring-purple-50 dark:ring-slate-800 shadow-inner">
          <Image
            src={img}
            alt={name}
            fill
            sizes="64px"
            className="object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        <div className="flex flex-col">
          <h3 className="text-xl font-black text-[#3e4b5b] dark:text-white tracking-tight">
            {name}
          </h3>
          <p className="text-sm font-bold text-[#b66dff] uppercase tracking-wider">
            {designation}
          </p>
          <span className="text-[11px] text-gray-400 font-medium italic">
            @{company}
          </span>
        </div>
      </div>

      {/* Story Content with Quote Icon */}
      <div className="relative mt-6">
        <FaQuoteLeft className="absolute -top-2 -left-2 text-purple-100 dark:text-slate-800 text-4xl -z-0" />
        <p className="text-gray-600 dark:text-slate-400 text-[15px] leading-relaxed line-clamp-4 relative z-10 pl-4 border-l-2 border-purple-100 dark:border-slate-800">
          {devStory}
        </p>
      </div>

      {/* Skills Tags */}
      <div className="flex flex-wrap gap-2 mt-6">
        {skills.slice(0, 4).map((skill, i) => (
          <span
            key={i}
            className="text-[10px] font-black uppercase tracking-widest bg-gray-50 dark:bg-slate-800 text-gray-500 dark:text-slate-400 px-3 py-1.5 rounded-lg group-hover:bg-[#b66dff] group-hover:text-white transition-colors duration-300"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Footer Area */}
      <div className="mt-auto pt-8 flex items-center justify-between border-t border-gray-50 dark:border-slate-800">
        <div className="flex flex-col">
          <span className="text-[10px] text-gray-400 uppercase font-bold tracking-tighter">
            Experience
          </span>
          <span className="text-sm font-black text-[#3e4b5b] dark:text-slate-200">
            {experience}
          </span>
        </div>

        <Link
          href={`/stories/${story.id}`}
          className="relative overflow-hidden px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#da8eff] to-[#9a55ff] text-white text-xs font-bold shadow-lg shadow-purple-200 dark:shadow-none hover:shadow-purple-400 transition-all active:scale-95"
        >
          Full Story
        </Link>
      </div>
    </motion.div>
  );
};

export default StoryCard;
