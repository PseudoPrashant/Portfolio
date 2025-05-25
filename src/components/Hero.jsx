import { FiGithub, FiLinkedin, FiCode } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { SiPython, SiJavascript, SiReact, SiNodedotjs, SiMongodb } from 'react-icons/si'
import { useEffect, useState } from 'react'

const Hero = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FiGithub size={24} />,
      url: 'https://github.com/PseudoPrashant'
    },
    {
      name: 'LinkedIn',
      icon: <FiLinkedin size={24} />,
      url: 'https://www.linkedin.com/in/pseudoprashant/'
    },
    {
      name: 'LeetCode',
      icon: <FiCode size={24} />,
      url: 'https://leetcode.com/u/pseudoprashant/'
    }
  ]

  const techStack = [
    { icon: <SiPython className="text-yellow-500" size={28} />, name: 'Python' },
    { icon: <SiJavascript className="text-yellow-400" size={28} />, name: 'JavaScript' },
    { icon: <SiReact className="text-blue-400" size={28} />, name: 'React' },
    { icon: <SiNodedotjs className="text-green-600" size={28} />, name: 'Node.js' },
    { icon: <SiMongodb className="text-green-700" size={28} />, name: 'MongoDB' }
  ]

  // Typing effect for subtitle
  const subtitles = [
    'Full Stack Developer',
    'AI Enthusiast',
    'Problem Solver'
  ];
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [displayedSubtitle, setDisplayedSubtitle] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    if (typing) {
      if (displayedSubtitle.length < subtitles[subtitleIndex].length) {
        timeout = setTimeout(() => {
          setDisplayedSubtitle(subtitles[subtitleIndex].slice(0, displayedSubtitle.length + 1));
        }, 60);
      } else {
        timeout = setTimeout(() => setTyping(false), 1200);
      }
    } else {
      timeout = setTimeout(() => {
        setTyping(true);
        setDisplayedSubtitle('');
        setSubtitleIndex((subtitleIndex + 1) % subtitles.length);
      }, 800);
    }
    return () => clearTimeout(timeout);
  }, [displayedSubtitle, typing, subtitleIndex, subtitles]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-900 pt-16 relative overflow-hidden">
      {/* Animated/gradient background shape */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 opacity-20 rounded-full blur-3xl animate-pulse z-0" />
      {/* Extra floating shapes for more graphics */}
      <div className="absolute right-10 top-32 w-24 h-24 bg-pink-400 opacity-20 rounded-full blur-2xl animate-bounce z-0" />
      <div className="absolute left-20 bottom-10 w-16 h-16 bg-blue-400 opacity-20 rounded-full blur-2xl animate-pulse z-0" />
      <div className="absolute left-1/2 top-1/4 w-32 h-32 bg-purple-400 opacity-10 rounded-full blur-2xl animate-spin-slow z-0" />
      <div className="absolute right-1/3 bottom-1/4 w-20 h-20 bg-yellow-400 opacity-10 rounded-full blur-2xl animate-bounce-slow z-0" />
      {/* New subtle background blobs */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-blue-300 opacity-10 rounded-full blur-3xl animate-pulse z-0" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-300 opacity-10 rounded-full blur-3xl animate-pulse z-0" />
      {/* Subtle dot grid background */}
      <svg className="absolute inset-0 w-full h-full z-0 opacity-10" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dotPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" fill="#fff" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dotPattern)" />
      </svg>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-100 mb-8">
              Hi, I'm <span className="text-blue-400">Prashant</span>
            </h1>
            {/* Typing effect subtitle */}
            <div className="h-10 mb-3">
              <span className="text-2xl sm:text-3xl md:text-4xl text-blue-300 font-mono">
                {displayedSubtitle}
                <span className="animate-pulse">|</span>
              </span>
            </div>
            <p className="text-2xl text-gray-300 mb-8">
              A passionate Computer Science student specializing in AI & ML
            </p>
            {/* Tech stack icons */}
            <div className="flex justify-center md:justify-start gap-4 mb-10">
              {techStack.map((tech) => (
                <span key={tech.name} title={tech.name} className="hover:scale-110 transition-transform text-3xl">
                  {tech.icon}
                </span>
              ))}
            </div>
            {/* Call-to-action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center md:justify-start">
              <a
                href="#projects"
                className="inline-block px-10 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow hover:bg-blue-700 transition-colors"
              >
                View My Work
              </a>
              <a
                href="https://drive.google.com/file/d/1uO3nFkhCEOJI_3tPTX5JyJ2O4r1l4RNO/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-gray-800 text-white text-lg font-semibold rounded-lg shadow hover:bg-gray-700 transition-colors border border-blue-400"
              >
                Download Resume
              </a>
            </div>
            <div className="flex justify-center md:justify-start space-x-8 mt-2">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors text-2xl"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-[24rem] h-[24rem] sm:w-[28rem] sm:h-[28rem] flex items-center justify-center">
              {/* Glowing border and shadow behind image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 rounded-full blur-2xl opacity-40 animate-pulse"></div>
              <img
                src="https://i.postimg.cc/qBW8SM8X/Instagram-Post-1080x1080-px.jpg"
                alt="Prashant"
                className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero