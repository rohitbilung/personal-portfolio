import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaInstagram, FaLinkedin, FaDownload, FaCheck, FaTimes } from 'react-icons/fa';

const Hero = () => {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDownload = () => {
    // The download starts automatically because of the 'download' attribute on the <a> tag.
    // We just close the confirmation box after clicking 'Yes'.
    setShowConfirm(false);
  };
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Text Content */}
        <div data-aos="fade-right">
          <p className="text-primary font-mono text-lg mb-4">Hello, World! I am</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Rohit Kumar <span className="text-gradient">Bilung</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-400 mb-6 font-mono">
            I build{' '}
            <TypeAnimation
              sequence={[
                'MERN Stack Apps', 2000,
                'PERN Stack Solutions', 2000,
                'Scalable Systems', 2000,
                'Digital Products', 2000
              ]}
              wrapper="span"
              speed={50}
              className="text-white border-b-2 border-primary"
              repeat={Infinity}
            />
          </h2>
          <p className="text-gray-400 max-w-lg mb-8 text-lg leading-relaxed">
            A Full Stack Developer specializing in the MERN & PERN ecosystems. Transforming complex requirements into scalable digital solutions.
          </p>

          <div className="flex flex-wrap gap-5 mb-10 items-center">
            <a
              href="#projects"
              className="bg-gradient-to-r from-primary to-blue-500 text-dark font-bold px-8 py-3 rounded-full hover:shadow-[0_0_20px_rgba(0,242,234,0.5)] transition transform hover:-translate-y-1 text-center min-w-[160px]"
            >
              View Work
            </a>
            {!showConfirm ? (
              <>

                <button
                  onClick={() => setShowConfirm(true)}
                  className="glass text-white px-8 py-3 rounded-full hover:bg-white/10 transition border border-white/20 flex items-center justify-center gap-2 min-w-[160px]"
                >
                  <FaDownload className="text-sm" /> Download CV
                </button>
              </>
            ) : (
              <div className="glass border border-primary/30 rounded-full px-6 py-2 flex items-center gap-4 animate-in fade-in zoom-in duration-300">
                <span className="text-sm font-mono text-primary">Download Resume?</span>
                <div className="flex gap-2">
                  <a
                    href="/Rohit_Kumar_Bilung_Resume.pdf"
                    download="Rohit_Kumar_Bilung_Resume.pdf"
                    onClick={handleDownload}
                    className="bg-primary text-dark p-2 rounded-full hover:scale-110 transition shadow-lg"
                    title="Yes, Download"
                  >
                    <FaCheck size={12} />
                  </a>
                  <button
                    onClick={() => setShowConfirm(false)}
                    className="bg-secondary text-white p-2 rounded-full hover:scale-110 transition shadow-lg"
                    title="No, Cancel"
                  >
                    <FaTimes size={12} />
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="mt-8 flex space-x-6 text-2xl text-gray-400">
            <a href="#" className="hover:text-primary transition"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/rohit-kumar-bilung-68203495/" target='_blank' rel='noopener noreferrer' className="hover:text-primary transition"><FaLinkedin /></a>
            <a href="#" className="hover:text-primary transition"><FaInstagram /></a>
          </div>
        </div>

        {/* Code Visual */}
        <div className="relative" data-aos="zoom-in">
          <div className="glass p-8 rounded-2xl border-l-4 border-secondary transform rotate-3 hover:rotate-0 transition duration-500">
            <div className="flex space-x-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <pre className="font-mono text-sm text-gray-300 overflow-x-hidden whitespace-pre-wrap">
              <code>
                <span className="text-secondary">const</span> developer = {'{'}
                <br />  name: <span className="text-primary">'Rohit Kumar Bilung'</span>,
                <br />  stack: [<span className="text-primary">'MERN'</span>, <span className="text-primary">'PERN'</span>],
                <br />  exp: <span className="text-yellow-400">3.5</span>, <span className="text-gray-500">// years</span>
                <br />  status: <span className="text-primary">'Freelancing'</span>,
                <br />  passion: <span className="text-primary">'Building awesome tech'</span>
                {'}'};

                <br /><span className="text-gray-500">// Ready to deploy solutions</span>
                <br />developer.init();
              </code>
            </pre>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;