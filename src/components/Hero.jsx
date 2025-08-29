import { FiGithub, FiLinkedin, FiCode } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { SiPython, SiJavascript, SiReact, SiNodedotjs, SiMongodb } from 'react-icons/si'
import { useState, useEffect } from 'react'

const Hero = () => {
  const [animateHero, setAnimateHero] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimateHero(true), 100)
    return () => clearTimeout(timer)
  }, [])

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
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl ${
          animateHero ? 'animate-in slide-in-from-right-2 duration-1000' : 'opacity-0 translate-x-40'
        }`} style={{ animationDelay: '200ms' }} />
        <div className={`absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl ${
          animateHero ? 'animate-in slide-in-from-left-2 duration-1000' : 'opacity-0 -translate-x-40'
        }`} style={{ animationDelay: '400ms' }} />
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-400/5 rounded-full blur-3xl ${
          animateHero ? 'animate-in zoom-in-95 duration-1000' : 'opacity-0 scale-50'
        }`} style={{ animationDelay: '600ms' }} />
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Enhanced Accent Bar */}
          <div className={`h-1.5 sm:h-2 w-16 sm:w-24 mx-auto mb-6 sm:mb-8 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg shadow-blue-500/20 animate-pulse ${
            animateHero ? 'animate-in slide-in-from-top-2 duration-700' : 'opacity-0 -translate-y-8'
          }`} />
          
          {/* Main Heading */}
          <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight ${
            animateHero ? 'animate-in slide-in-from-top-2 duration-700' : 'opacity-0 -translate-y-8'
          }`} style={{ animationDelay: '300ms' }}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
              Hi, I'm Prashant Kumar
            </span>
          </h1>

          {/* Subtitle */}
          <p className={`text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-10 leading-relaxed max-w-4xl mx-auto ${
            animateHero ? 'animate-in slide-in-from-bottom-2 duration-700' : 'opacity-0 translate-y-8'
          }`} style={{ animationDelay: '500ms' }}>
            <span className="group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
              A passionate <span className="text-blue-600 dark:text-blue-400 font-semibold">Full Stack Developer</span> and <span className="text-purple-600 dark:text-purple-400 font-semibold">B. Tech Computer Science</span> student
            </span>
          </p>

          {/* Description */}
          <p className={`text-lg sm:text-xl text-gray-500 dark:text-gray-400 mb-10 sm:mb-12 leading-relaxed max-w-3xl mx-auto ${
            animateHero ? 'animate-in slide-in-from-bottom-2 duration-700' : 'opacity-0 translate-y-8'
          }`} style={{ animationDelay: '700ms' }}>
            <span className="group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300">
              I specialize in building modern web applications with cutting-edge technologies. 
              From frontend to backend, I love creating seamless user experiences and robust solutions.
            </span>
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center ${
            animateHero ? 'animate-in slide-in-from-bottom-2 duration-700' : 'opacity-0 translate-y-8'
          }`} style={{ animationDelay: '900ms' }}>
            <a
              href="https://github.com/PseudoPrashant"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
            >
              <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                View My Work
              </span>
            </a>
            <a
              href="https://drive.google.com/file/d/1ghe8IBS7CuU2TJeFmVsXzO5vqGLsFXuX/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                Download Resume
              </span>
            </a>
          </div>

          {/* Tech Stack Preview */}
          <div className={`mt-12 sm:mt-16 ${
            animateHero ? 'animate-in slide-in-from-bottom-2 duration-700' : 'opacity-0 translate-y-8'
          }`} style={{ animationDelay: '1100ms' }}>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4 uppercase tracking-wide group">
              <span className="group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300">
                Tech Stack
              </span>
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Python', 'Machine Learning'].map((tech, index) => (
                <span
                  key={tech}
                  className="px-3 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-105 hover:shadow-md"
                  style={{ animationDelay: `${1200 + index * 100}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero