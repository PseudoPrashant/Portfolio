import { useState, useEffect } from 'react'

const Projects = () => {
  const [showDialog, setShowDialog] = useState(false)
  const [dialogMessage, setDialogMessage] = useState("This is the website. Tell me do you like it?")
  const [showThankYou, setShowThankYou] = useState(false)
  const [showExpenseTrackerCode, setShowExpenseTrackerCode] = useState(false)
  const [animateProjects, setAnimateProjects] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimateProjects(true), 500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (showExpenseTrackerCode) {
      const timer = setTimeout(() => {
        setShowExpenseTrackerCode(false)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [showExpenseTrackerCode])

  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS. Features dark/light theme toggle, smooth animations, and a professional design.",
      image: "https://i.postimg.cc/Sxs4frPk/Screenshot-2025-08-29-061517.png",
      technologies: ["React", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
      features: ["Responsive Design", "Dark/Light Theme", "Smooth Animations", "Professional UI"],
      showButtons: true,
      isPortfolio: true,
      sourceCodeUrl: "https://github.com/PseudoPrashant/Portfolio"
    },
    {
      title: "Expense Tracker with Analytics Dashboard",
      description: "A full-stack expense tracking application with real-time analytics, user authentication, and comprehensive financial insights.",
      image: "https://i.postimg.cc/J47CRxMZ/Screenshot-2025-08-29-061907.png",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Chart.js"],
      features: ["User Authentication", "Real-time Analytics", "Data Visualization", "CRUD Operations"],
      showButtons: true,
      isExpenseTracker: true
    },
    {
      title: "Stock Market Predictor",
      description: "An AI-powered stock market prediction tool using machine learning algorithms to analyze market trends and provide investment insights.",
      image: "https://i.postimg.cc/fbvxQYs2/generated-image.jpg",
      technologies: ["Python", "Machine Learning", "Data Analysis", "Pandas", "NumPy"],
      features: ["ML Algorithms", "Data Visualization", "Trend Analysis", "Investment Insights"],
      showButtons: false
    }
  ]

  const handleViewLive = (project) => {
    if (project.isPortfolio) {
      setShowDialog(true)
      setShowThankYou(false)
      setDialogMessage("This is the website. Tell me do you like it?")
    } else if (project.isExpenseTracker) {
      window.open("https://expense-tracker-frontend-five-delta.vercel.app/", "_blank")
    }
  }

  const handleYesClick = () => {
    setShowThankYou(true)
    setDialogMessage("Thank you! 😊")
  }

  const handleCloseDialog = () => {
    setShowDialog(false)
    setShowThankYou(false)
  }

  const handleExpenseTrackerSourceCode = () => {
    setShowExpenseTrackerCode(true)
  }

  const handleFrontendCode = () => {
    window.open("https://github.com/PseudoPrashant/expense-tracker-frontend", "_blank")
  }

  const handleBackendCode = () => {
    window.open("https://github.com/PseudoPrashant/expense-tracker-backend", "_blank")
  }

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Accent Bar */}
          <div className="h-1.5 sm:h-2 w-16 sm:w-24 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg shadow-blue-500/20 animate-pulse" />
          
          <h2 className={`text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white ${
            animateProjects ? 'animate-in slide-in-from-top-2 duration-700' : 'opacity-0 -translate-y-8'
          }`}>
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 ${
                  animateProjects ? 'animate-in slide-in-from-bottom-2 duration-500' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group">
                    <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </span>
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed group">
                    <span className="group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                      {project.description}
                    </span>
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 group">
                      <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        Technologies Used:
                      </span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full hover:bg-blue-200 dark:hover:bg-blue-800/40 transition-all duration-300 transform hover:scale-105"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 group">
                      <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        Key Features:
                      </span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs rounded-full hover:bg-green-200 dark:hover:bg-green-800/40 transition-all duration-300 transform hover:scale-105"
                        >
                          {feature}
                        </span>
                      ))}
                      {project.features.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full">
                          +{project.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {project.showButtons && (
                    <div className="space-y-3">
                      {project.isPortfolio ? (
                        <>
                          <button
                            onClick={() => handleViewLive(project)}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                          >
                            View Live
                          </button>
                          <a
                            href={project.sourceCodeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 px-4 rounded-lg text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                          >
                            Source Code
                          </a>
                        </>
                      ) : project.isExpenseTracker ? (
                        <>
                          <button
                            onClick={() => handleViewLive(project)}
                            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                          >
                            View Live
                          </button>
                          {!showExpenseTrackerCode ? (
                            <button
                              onClick={handleExpenseTrackerSourceCode}
                              className="w-full bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                            >
                              Source Code
                            </button>
                          ) : (
                            <div className="flex gap-2">
                              <button
                                onClick={handleFrontendCode}
                                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                              >
                                Frontend Code
                              </button>
                              <button
                                onClick={handleBackendCode}
                                className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                              >
                                Backend Code
                              </button>
                            </div>
                          )}
                        </>
                      ) : null}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dialog Box */}
      {showDialog && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-in fade-in duration-300">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md mx-4 shadow-2xl transform animate-in zoom-in-95 duration-300">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white text-center">
              {dialogMessage}
            </h3>
            <div className="flex gap-3 justify-center">
              {!showThankYou && (
                <button
                  onClick={handleYesClick}
                  className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  Yes
                </button>
              )}
              <button
                onClick={handleCloseDialog}
                className="px-6 py-2 bg-gray-500 hover:bg-gray-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                {showThankYou ? 'Close' : 'No'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects 