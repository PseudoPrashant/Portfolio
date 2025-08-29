import { useState, useEffect } from 'react'

const Certifications = () => {
  const [animateCertifications, setAnimateCertifications] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimateCertifications(true), 600)
    return () => clearTimeout(timer)
  }, [])

  const certifications = [
    {
      title: "Machine Learning with Python",
      issuer: "Teachnook (Wissenaire - IIT BBS 2023)",
      period: "2023",
      description: "Comprehensive course covering machine learning algorithms, data preprocessing, and model evaluation using Python libraries.",
      category: "AI & Machine Learning"
    },
    {
      title: "Power BI Course",
      issuer: "Teachnook (Wissenaire - IIT BBS 2023)",
      period: "2023",
      description: "Data visualization and business intelligence course covering Power BI desktop, DAX formulas, and dashboard creation.",
      category: "Data Analysis"
    },
    {
      title: "SHRINIK Coding Festember",
      issuer: "G. L. Bajaj Institute",
      period: "2023",
      description: "Participated in competitive coding competition and achieved 6th position among 108 teams.",
      category: "Competitive Programming"
    }
  ]

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Accent Bar */}
          <div className="h-1.5 sm:h-2 w-16 sm:w-24 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg shadow-blue-500/20 animate-pulse" />
          
          <h2 className={`text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white ${
            animateCertifications ? 'animate-in slide-in-from-top-2 duration-700' : 'opacity-0 -translate-y-8'
          }`}>
            Certifications & Achievements
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 ${
                  animateCertifications ? 'animate-in slide-in-from-bottom-2 duration-500' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4 group">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      {index === 0 ? (
                        <span className="text-2xl">🤖</span>
                      ) : index === 1 ? (
                        <span className="text-2xl">📊</span>
                      ) : (
                        <span className="text-2xl">🏆</span>
                      )}
                    </div>
                    <div className="flex-1">
                      <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded-full group-hover:bg-blue-200 dark:group-hover:bg-blue-800/40 transition-colors duration-300">
                        {cert.category}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white group">
                    <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {cert.title}
                    </span>
                  </h3>

                  {/* Issuer & Period */}
                  <div className="flex items-center justify-between mb-3 text-sm">
                    <span className="text-gray-600 dark:text-gray-400 group">
                      <span className="group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                        {cert.issuer}
                      </span>
                    </span>
                    <span className="text-blue-500 font-medium group">
                      <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {cert.period}
                      </span>
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-grow group">
                    <span className="group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                      {cert.description}
                    </span>
                  </p>

                  {/* Action Button */}
                  <div className="mt-4">
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg group">
                      <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                        View Certificate
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications 