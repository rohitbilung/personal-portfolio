import React from 'react';
import {
  FaHandHoldingUsd, FaTruck, FaTshirt, FaLeaf,
  FaCamera, FaGraduationCap, FaExternalLinkAlt, FaGithub
} from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Digital CFO',
      desc: 'Enterprise fintech module for automated loan sanctioning and CFO-level financial oversight.',
      tags: ['MERN', 'Fintech'],
      icon: <FaHandHoldingUsd />,
      type: 'Waycool',
      color: 'group-hover:text-blue-400',
      badgeColor: 'bg-blue-600',
      liveLink: '',
      githubLink: ''
    },
    {
      id: 2,
      title: 'Van Sales Ecosystem',
      desc: 'Suite of apps for Salesmen, Logistics, and Security to manage supply chain and distribution.',
      tags: ['Micro-frontends', 'Logistics'],
      icon: <FaTruck />,
      type: 'Waycool',
      color: 'group-hover:text-red-400',
      badgeColor: 'bg-blue-600',
      liveLink: '',
      githubLink: ''
    },
    {
      id: 3,
      title: 'Lutui Ecommerce',
      desc: 'A high-performance fashion store featuring advanced filtering and secure checkout.',
      tags: ['React', 'Node.js'],
      icon: <FaTshirt />,
      type: 'Client',
      color: 'group-hover:text-yellow-400',
      badgeColor: 'bg-purple-600',
      liveLink: 'https://lutui.in',
      githubLink: ''
    },
    {
      id: 4,
      title: 'Emhafarm',
      desc: 'Agritech platform optimizing farm-to-market logistics and yield data transparency.',
      tags: ['PERN', 'Agritech'],
      icon: <FaLeaf />,
      type: 'Client',
      color: 'group-hover:text-green-400',
      badgeColor: 'bg-purple-600',
      liveLink: 'https://emhafarm.in',
      githubLink: ''
    },
    {
      id: 5,
      title: 'Scrapbook',
      desc: 'A social networking page inspired by Instagram for sharing visual stories and memories.',
      tags: ['MERN', 'Socket.io'],
      icon: <FaCamera />,
      type: 'Personal',
      color: 'group-hover:text-pink-400',
      badgeColor: 'bg-gray-600',
      liveLink: '',
      githubLink: ''
    },
    {
      id: 6,
      title: 'Tribal Education App',
      desc: 'EdTech solution providing digital learning resources to remote tribal communities.',
      tags: ['React Native', 'EdTech'],
      icon: <FaGraduationCap />,
      type: 'Personal',
      color: 'group-hover:text-orange-400',
      badgeColor: 'bg-gray-600',
      liveLink: '',
      githubLink: ''
    },
  ];

  return (
    <section id="projects" className="py-20 bg-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4" data-aos="fade-up">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto" data-aos="fade-up">
            From enterprise-grade logistics to personal social platforms, here is what I have been building.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="glass rounded-xl overflow-hidden hover:transform hover:-translate-y-2 transition duration-500 group flex flex-col h-full"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              {/* Visual Header */}
              <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative">
                <div className={`text-6xl text-gray-700 transition duration-500 ${project.color}`}>
                  {project.icon}
                </div>
                <div className={`absolute top-4 right-4 text-[10px] font-bold uppercase tracking-widest text-white px-2 py-1 rounded ${project.badgeColor} shadow-lg`}>
                  {project.type}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                  {project.desc}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono bg-white/5 text-gray-400 px-2 py-1 rounded border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer Actions */}
                <div className="flex items-center gap-6 pt-5 border-t border-white/5 mt-auto">
                  {/* Live Demo Check */}
                  {project.liveLink && project.liveLink !== '#' && project.liveLink !== '' ? (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary hover:text-white transition flex items-center gap-2 text-sm font-bold"
                    >
                      <FaExternalLinkAlt size={12} /> Live Demo
                    </a>
                  ) : (
                    <span className="text-gray-600 flex items-center gap-2 text-sm italic cursor-not-allowed">
                      <FaExternalLinkAlt size={12} /> Not Available
                    </span>
                  )}

                  {/* Source Code Check */}
                  {project.githubLink && project.githubLink !== '#' && project.githubLink !== '' ? (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-500 hover:text-white transition flex items-center gap-2 text-sm"
                    >
                      <FaGithub size={16} /> Source
                    </a>
                  ) : (
                    <span className="text-gray-600 flex items-center gap-2 text-sm italic cursor-not-allowed">
                      <FaGithub size={16} /> Private Code
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;