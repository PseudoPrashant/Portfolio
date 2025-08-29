import { FiBookOpen, FiStar, FiAward, FiBriefcase, FiUsers } from 'react-icons/fi'
import { useState, useEffect } from 'react'

const Education = () => {
  const [animateEducation, setAnimateEducation] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimateEducation(true), 400)
    return () => clearTimeout(timer)
  }, [])

  const education = [
    {
      degree: "B. Tech - CSE (AIML)",
      institution: "G. L. Bajaj Institute of Technology & Management",
      university: "AKTU",
      graduation: "2025",
      score: "CPI: 7.68"
    },
    {
      degree: "Intermediate (+2)",
      institution: "Aditya Birla Public School, Renusagar",
      university: "CBSE",
      graduation: "2021",
      score: "Score: 77.4%"
    },
    {
      degree: "Matriculation",
      institution: "Aditya Birla Public School, Renusagar",
      university: "CBSE",
      graduation: "2019",
      score: "Score: 80.0%"
    }
  ]

  const personalInfo = [
    { label: "Date of Birth", value: "14th August 2003" },
    { label: "Location", value: "Greater Noida, UP, India" },
    { label: "Languages", value: "English, Hindi" },
    { label: "Interests", value: "AI/ML, Web Development, Design" }
  ]

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Accent Bar */}
          <div className="h-1.5 sm:h-2 w-16 sm:w-24 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg shadow-blue-500/20 animate-pulse" />
          
          <h2 className={`text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white ${
            animateEducation ? 'animate-in slide-in-from-top-2 duration-700' : 'opacity-0 -translate-y-8'
          }`}>
            Education & Background
          </h2>

          {/* Education Section - Three Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 transform ${
                  animateEducation ? 'animate-in slide-in-from-bottom-2 duration-500' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg group hover:scale-110 transition-transform duration-300">
                      {index === 0 ? (
                        <FiBriefcase className="w-6 h-6 text-blue-500 group-hover:text-blue-600 transition-colors duration-300" />
                      ) : index === 1 ? (
                        <FiBookOpen className="w-6 h-6 text-blue-500 group-hover:text-blue-600 transition-colors duration-300" />
                      ) : (
                        <FiAward className="w-6 h-6 text-blue-500 group-hover:text-blue-600 transition-colors duration-300" />
                      )}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white group">
                      <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {edu.degree}
                      </span>
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2 group">
                      <span className="group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
                        {edu.institution}
                      </span>
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm mb-2">
                      <span className="text-gray-500 dark:text-gray-400 group">
                        <strong className="group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">Board:</strong> {edu.university}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 group">
                        <strong className="group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">Year:</strong> {edu.graduation}
                      </span>
                    </div>
                    <p className="text-blue-500 font-medium text-lg group">
                      <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {edu.score}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Personal Information Section */}
          <div className={`bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all duration-500 ${
            animateEducation ? 'animate-in slide-in-from-bottom-2 duration-700' : 'opacity-0 translate-y-8'
          }`} style={{ animationDelay: '800ms' }}>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white text-center group">
              <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                Personal Information
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {personalInfo.map((info, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-md group"
                  style={{ animationDelay: `${(index + 4) * 100}ms` }}
                >
                  <div className="flex justify-center mb-2">
                    <FiUsers className="w-5 h-5 text-blue-500 group-hover:scale-110 group-hover:text-blue-600 transition-all duration-300" />
                  </div>
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 group">
                    <span className="group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300">
                      {info.label}
                    </span>
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm group">
                    <span className="group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                      {info.value}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education 