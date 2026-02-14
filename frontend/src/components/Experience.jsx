import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Freelance Full Stack Developer',
      company: 'Self Employed',
      period: '2024 - Present',
      desc: 'Developing custom solutions for clients including E-commerce platforms and Agritech systems.',
      color: 'bg-primary',
      shadow: 'shadow-[0_0_10px_#00f2ea]'
    },
    {
      id: 2,
      role: 'Software Engineer',
      company: 'Waycool Foods Pvt Ltd',
      period: '2021 - 2024',
      desc: 'Worked on Digital CFO and Van Sales logistics ecosystem. Managed complex state across multiple apps.',
      color: 'bg-secondary',
      shadow: 'shadow-[0_0_10px_#ff0055]'
    },
    {
      id: 3,
      role: 'B.Tech in Computer Science',
      company: 'BPUT, Odisha',
      period: 'Graduated 2015',
      desc: 'Foundation in Computer Science and Engineering principles.',
      color: 'bg-gray-500',
      shadow: 'shadow-none'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-dark/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center text-white" data-aos="fade-up">
          My <span className="text-gradient">Journey</span>
        </h2>
        
        <div className="relative border-l-2 border-gray-700 ml-4 md:ml-auto md:mr-auto md:w-2/3 space-y-12">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative pl-4 md:pl-4" data-aos="fade-left" data-aos-delay={index * 100}>
              <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full ${exp.color} ${exp.shadow}`}></div>
              <div className="md:flex justify-between items-start glass p-6 rounded-xl hover:border-gray-500 transition duration-300">
                <div>
                  <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                  <p className="text-gray-400 mt-1">{exp.company}</p>
                  <p className="mt-4 text-gray-300 text-sm">{exp.desc}</p>
                </div>
                <span className={`font-mono text-sm px-3 py-1 rounded mt-4 md:mt-0 inline-block text-white bg-white/10`}>
                  {exp.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;