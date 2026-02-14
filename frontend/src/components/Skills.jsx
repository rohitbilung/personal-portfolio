import React from 'react';
import { 
  SiReact, SiNodedotjs, SiJavascript, 
  SiPostgresql, SiMongodb, SiHtml5, 
  SiCss3, SiGit, SiTailwindcss, SiExpress 
} from 'react-icons/si';

const Skills = () => {
  const techs = [
    { name: 'JavaScript', icon: <SiJavascript />, color: 'group-hover:text-[#F0DB4F]', border: 'group-hover:border-[#F0DB4F]' },
    { name: 'Node.js', icon: <SiNodedotjs />, color: 'group-hover:text-[#3C873A]', border: 'group-hover:border-[#3C873A]' },
    { name: 'Express', icon: <SiExpress />, color: 'group-hover:text-white', border: 'group-hover:border-white' },
    { name: 'MongoDB', icon: <SiMongodb />, color: 'group-hover:text-[#4DB33D]', border: 'group-hover:border-[#4DB33D]' },
    { name: 'Git', icon: <SiGit />, color: 'group-hover:text-[#F05032]', border: 'group-hover:border-[#F05032]' },
    { name: 'React', icon: <SiReact />, color: 'group-hover:text-[#61DBFB]', border: 'group-hover:border-[#61DBFB]' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'group-hover:text-[#336791]', border: 'group-hover:border-[#336791]' },
    { name: 'Tailwind', icon: <SiTailwindcss />, color: 'group-hover:text-[#06B6D4]', border: 'group-hover:border-[#06B6D4]' },
  ];

  return (
    <section className="py-20 bg-black/30 border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <h3 
          className="text-xl font-mono text-gray-500 mb-12 tracking-[0.2em] uppercase"
          data-aos="fade-up"
        >
          Tech Stack & Tools
        </h3>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {techs.map((tech, index) => (
            <div 
              key={tech.name}
              className="group flex flex-col items-center gap-3"
              data-aos="zoom-in"
              data-aos-delay={index * 50}
            >
              {/* Rounded Icon Container */}
              <div className={`
                w-16 h-16 md:w-20 md:h-20 
                rounded-full glass border border-white/10 
                flex items-center justify-center 
                text-3xl md:text-4xl text-gray-400
                transition-all duration-500 
                group-hover:scale-110 group-hover:bg-white/5 
                ${tech.color} ${tech.border}
                group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]
              `}>
                {tech.icon}
              </div>
              
              {/* Tool Label (Appears on hover) */}
              <span className="text-[10px] font-mono text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 uppercase tracking-widest">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;