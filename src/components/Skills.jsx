import { SiPython, SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, SiGit, SiTypescript, SiHtml5, SiCss3, SiExpress, SiVercel, SiRender, SiFigma, SiCplusplus, SiC, SiMicrosoftoffice, SiAdobecreativecloud, SiCanva } from 'react-icons/si'
import { FaDatabase, FaChartLine, FaBrain, FaRobot, FaServer, FaMobile, FaDesktop, FaLaptopCode, FaCodeBranch, FaCode, FaCogs, FaUsers, FaCalendarAlt, FaComments, FaCrown, FaClock } from 'react-icons/fa'
import { useState, useEffect } from 'react'

const Skills = () => {
  const [animateSkills, setAnimateSkills] = useState(false)
  const [hoveredSkill, setHoveredSkill] = useState(null)

  useEffect(() => {
    const timer = setTimeout(() => setAnimateSkills(true), 300)
    return () => clearTimeout(timer)
  }, [])

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', icon: <SiPython className="text-blue-500" size={24} />, level: 85 },
        { name: 'JavaScript (ES6+)', icon: <SiJavascript className="text-yellow-400" size={24} />, level: 90 },
        { name: 'C++', icon: <SiCplusplus className="text-blue-600" size={24} />, level: 80 },
        { name: 'C', icon: <SiC className="text-blue-700" size={24} />, level: 75 },
        { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" size={24} />, level: 80 },
        { name: 'HTML5', icon: <SiHtml5 className="text-orange-500" size={24} />, level: 95 },
        { name: 'CSS3', icon: <SiCss3 className="text-blue-400" size={24} />, level: 90 },
        { name: 'SQL', icon: <FaDatabase className="text-blue-600" size={24} />, level: 85 }
      ]
    },
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React 18', icon: <SiReact className="text-blue-400" size={24} />, level: 90 },
        { name: 'React.js', icon: <SiReact className="text-blue-400" size={24} />, level: 90 },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" size={24} />, level: 90 },
        { name: 'Chart.js', icon: <FaChartLine className="text-yellow-500" size={24} />, level: 80 },
        { name: 'Vite', icon: <FaCode className="text-purple-500" size={24} />, level: 85 },
        { name: 'Framer Motion', icon: <FaCode className="text-blue-500" size={24} />, level: 80 },
        { name: 'Responsive Design', icon: <FaMobile className="text-green-500" size={24} />, level: 90 },
        { name: 'UI/UX Design', icon: <SiFigma className="text-purple-500" size={24} />, level: 80 },
        { name: 'Progressive Web Apps', icon: <FaDesktop className="text-blue-600" size={24} />, level: 75 }
      ]
    },
    {
      title: 'Backend & Database',
      skills: [
        { name: 'Node.js', icon: <SiNodedotjs className="text-green-600" size={24} />, level: 85 },
        { name: 'Express.js', icon: <SiExpress className="text-gray-600" size={24} />, level: 80 },
        { name: 'MongoDB', icon: <SiMongodb className="text-green-700" size={24} />, level: 80 },
        { name: 'RESTful APIs', icon: <FaServer className="text-blue-600" size={24} />, level: 85 },
        { name: 'JWT Authentication', icon: <FaCodeBranch className="text-orange-500" size={24} />, level: 80 }
      ]
    },
    {
      title: 'Data Analysis & BI',
      skills: [
        { name: 'Power BI', icon: <SiMicrosoftoffice className="text-yellow-500" size={24} />, level: 80 },
        { name: 'Excel', icon: <SiMicrosoftoffice className="text-green-600" size={24} />, level: 85 },
        { name: 'MATLAB (Basic)', icon: <FaCode className="text-orange-500" size={24} />, level: 70 },
        { name: 'Data Analysis', icon: <FaChartLine className="text-green-500" size={24} />, level: 75 }
      ]
    },
    {
      title: 'Core Computer Science',
      skills: [
        { name: 'Object-Oriented Programming', icon: <FaCogs className="text-blue-600" size={24} />, level: 85 },
        { name: 'Database Management Systems', icon: <FaDatabase className="text-blue-600" size={24} />, level: 80 },
        { name: 'Operating Systems', icon: <FaCogs className="text-green-600" size={24} />, level: 75 },
        { name: 'Data Structures & Algorithms', icon: <FaCode className="text-purple-600" size={24} />, level: 80 }
      ]
    },
    {
      title: 'AI & Machine Learning',
      skills: [
        { name: 'Machine Learning', icon: <FaBrain className="text-purple-600" size={24} />, level: 80 },
        { name: 'Python Libraries', icon: <SiPython className="text-blue-500" size={24} />, level: 80 }
      ]
    },
    {
      title: 'Creative & Design Tools',
      skills: [
        { name: 'Adobe After Effects', icon: <SiAdobecreativecloud className="text-purple-500" size={24} />, level: 75 },
        { name: 'Adobe Premiere Pro', icon: <SiAdobecreativecloud className="text-blue-500" size={24} />, level: 80 },
        { name: 'Adobe Photoshop', icon: <SiAdobecreativecloud className="text-blue-600" size={24} />, level: 75 },
        { name: 'Adobe Illustrator', icon: <SiAdobecreativecloud className="text-orange-500" size={24} />, level: 70 },
        { name: 'Canva', icon: <SiCanva className="text-blue-400" size={24} />, level: 85 }
      ]
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'Git & GitHub', icon: <SiGit className="text-orange-500" size={24} />, level: 90 },
        { name: 'VS Code', icon: <FaLaptopCode className="text-blue-500" size={24} />, level: 95 },
        { name: 'Vercel', icon: <SiVercel className="text-black dark:text-white" size={24} />, level: 80 },
        { name: 'Render', icon: <SiRender className="text-green-500" size={24} />, level: 80 }
      ]
    }
  ]

  const softSkills = [
    { name: 'Team Collaboration', level: 90 },
    { name: 'Event Management', level: 85 },
    { name: 'Communication', level: 90 },
    { name: 'Leadership', level: 85 },
    { name: 'Time Management', level: 90 },
    { name: 'Problem Solving', level: 85 }
  ]

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Accent Bar */}
          <div className="h-1.5 sm:h-2 w-16 sm:w-24 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg shadow-blue-500/20 animate-pulse" />
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 tracking-tight animate-in slide-in-from-top-2 duration-700">
            Skills & Expertise
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className={`bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-lg p-4 sm:p-5 shadow-lg hover:shadow-blue-500/20 transition-all duration-500 border border-gray-100 dark:border-gray-800 transform hover:-translate-y-2 hover:scale-105 ${
                  animateSkills ? 'animate-in slide-in-from-bottom-2 duration-500' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${categoryIndex * 100}ms` }}
              >
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:scale-150 transition-transform duration-300"></span>
                  <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {category.title}
                  </span>
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className="flex flex-col gap-1.5 group"
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`hover:scale-125 transition-all duration-300 ${
                            hoveredSkill === skill.name ? 'animate-bounce' : ''
                          }`}>
                            {skill.icon}
                          </div>
                          <span className="text-gray-700 dark:text-gray-300 font-medium text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-blue-500 transition-colors duration-300">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden group-hover:bg-gray-300 dark:group-hover:bg-gray-600 transition-colors duration-300">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out group-hover:from-blue-600 group-hover:to-purple-600"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Soft Skills Section */}
          <div className={`bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-lg border border-gray-100 dark:border-gray-800 transform hover:scale-105 transition-all duration-500 ${
            animateSkills ? 'animate-in slide-in-from-bottom-2 duration-700' : 'opacity-0 translate-y-8'
          }`} style={{ animationDelay: '800ms' }}>
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white text-center group">
              <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                Soft Skills & Professional Competencies
              </span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:scale-105 hover:shadow-md transition-all duration-300 transform"
                  style={{ animationDelay: `${(index + 9) * 50}ms` }}
                >
                  <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {skill.name}
                  </span>
                  <span className="text-sm text-blue-500 font-semibold group-hover:scale-110 transition-transform duration-300">
                    {skill.level}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
