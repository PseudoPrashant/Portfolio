import { FiBookOpen, FiStar, FiAward, FiBriefcase, FiUsers } from 'react-icons/fi'
import { useState, useEffect } from 'react'

const About = () => {
  const [animateAbout, setAnimateAbout] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimateAbout(true), 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Accent Bar */}
          <div className="h-1.5 sm:h-2 w-16 sm:w-24 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg shadow-blue-500/20 animate-pulse" />
          
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 tracking-tight ${
            animateAbout ? 'animate-in slide-in-from-top-2 duration-700' : 'opacity-0 -translate-y-8'
          }`}>
            About Me
          </h2>

          <div className={`bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl p-6 sm:p-8 md:p-10 lg:p-14 flex flex-col items-center border border-gray-100 dark:border-gray-800 transform hover:scale-105 transition-all duration-500 ${
            animateAbout ? 'animate-in slide-in-from-bottom-2 duration-700' : 'opacity-0 translate-y-8'
          }`} style={{ animationDelay: '300ms' }}>
            <div className="prose prose-base sm:prose-lg dark:prose-invert max-w-none text-center">
              <p className={`text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed ${
                animateAbout ? 'animate-in slide-in-from-left-2 duration-500' : 'opacity-0 -translate-x-8'
              }`} style={{ animationDelay: '500ms' }}>
                I'm a passionate <span className="text-blue-500 font-semibold">Full Stack Developer and B. Tech Computer Science student</span> with a strong foundation in modern web technologies and a keen interest in artificial intelligence and machine learning. I love building innovative solutions that solve real-world problems and create meaningful user experiences.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-6 sm:mt-8">
                <div className={`bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-900/30 dark:to-blue-800/20 rounded-xl p-4 sm:p-6 flex flex-col items-center shadow-lg hover:shadow-blue-500/20 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 ${
                  animateAbout ? 'animate-in slide-in-from-left-2 duration-500' : 'opacity-0 -translate-x-8'
                }`} style={{ animationDelay: '700ms' }}>
                  <div className="hover:scale-110 transition-transform duration-300">
                    <FiBookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500 mb-2 sm:mb-3" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-900 dark:text-white group">
                    <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      Education
                    </span>
                  </h3>
                  <ul className="space-y-2 sm:space-y-3 text-gray-600 dark:text-gray-300 text-left text-sm sm:text-base">
                    <li className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-300 group">
                      <span className="text-blue-400 group-hover:scale-125 transition-transform duration-300">•</span> B. Tech in Computer Science (AI & ML)
                    </li>
                    <li className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-300 group">
                      <span className="text-blue-400 group-hover:scale-125 transition-transform duration-300">•</span> G. L. Bajaj Institute of Technology
                    </li>
                    <li className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-300 group">
                      <span className="text-blue-400 group-hover:scale-125 transition-transform duration-300">•</span> Current CPI: 7.68
                    </li>
                  </ul>
                </div>

                <div className={`bg-gradient-to-br from-pink-50 to-pink-100/50 dark:from-pink-900/30 dark:to-pink-800/20 rounded-xl p-4 sm:p-6 flex flex-col items-center shadow-lg hover:shadow-pink-500/20 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 ${
                  animateAbout ? 'animate-in slide-in-from-bottom-2 duration-500' : 'opacity-0 translate-y-8'
                }`} style={{ animationDelay: '900ms' }}>
                  <div className="hover:scale-110 transition-transform duration-300">
                    <FiBriefcase className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500 mb-2 sm:mb-3" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-900 dark:text-white group">
                    <span className="group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-300">
                      Experience
                    </span>
                  </h3>
                  <ul className="space-y-2 sm:space-y-3 text-gray-600 dark:text-gray-300 text-left text-sm sm:text-base">
                    <li className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-300 group">
                      <span className="text-pink-400 group-hover:scale-125 transition-transform duration-300">•</span> Web Development Intern at Qveto Technologies
                    </li>
                    <li className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-300 group">
                      <span className="text-pink-400 group-hover:scale-125 transition-transform duration-300">•</span> Freelance Designer & Video Editor
                    </li>
                    <li className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-300 group">
                      <span className="text-pink-400 group-hover:scale-125 transition-transform duration-300">•</span> Event Organizer & Team Lead
                    </li>
                  </ul>
                </div>

                <div className={`bg-gradient-to-br from-purple-50 to-purple-100/50 dark:from-purple-900/30 dark:to-purple-800/20 rounded-xl p-4 sm:p-6 flex flex-col items-center shadow-lg hover:shadow-purple-500/20 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 ${
                  animateAbout ? 'animate-in slide-in-from-right-2 duration-500' : 'opacity-0 translate-x-8'
                }`} style={{ animationDelay: '1100ms' }}>
                  <div className="hover:scale-110 transition-transform duration-300">
                    <FiStar className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500 mb-2 sm:mb-3" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-900 dark:text-white group">
                    <span className="group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                      Achievements
                    </span>
                  </h3>
                  <ul className="space-y-2 sm:space-y-3 text-gray-600 dark:text-gray-300 text-left text-sm sm:text-base">
                    <li className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-300 group">
                      <span className="text-purple-400 group-hover:scale-125 transition-transform duration-300">•</span> 6th Position in SHRINIK Coding Competition (108 teams)
                    </li>
                  </ul>
                </div>
              </div>

              <div className={`mt-8 sm:mt-10 text-center ${
                animateAbout ? 'animate-in slide-in-from-bottom-2 duration-500' : 'opacity-0 translate-y-8'
              }`} style={{ animationDelay: '1300ms' }}>
                <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-4">
                  I'm passionate about creating innovative solutions that make a difference. When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
                </p>
                <div className="flex justify-center items-center gap-4 text-gray-500 dark:text-gray-400 group">
                  <FiUsers className="w-5 h-5 group-hover:scale-110 group-hover:text-blue-500 transition-all duration-300" />
                  <span className="text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    Always eager to collaborate and learn!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 