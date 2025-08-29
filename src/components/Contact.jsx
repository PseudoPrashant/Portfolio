import { useState, useEffect } from 'react'

const Contact = () => {
  const [animateContact, setAnimateContact] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimateContact(true), 700)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-4xl mx-auto">
          {/* Enhanced Accent Bar */}
          <div className="h-1.5 sm:h-2 w-16 sm:w-24 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg shadow-blue-500/20 animate-pulse" />
          
          <h2 className={`text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white ${
            animateContact ? 'animate-in slide-in-from-top-2 duration-700' : 'opacity-0 -translate-y-8'
          }`}>
            Get In Touch
          </h2>

          <div className={`bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12 transform hover:scale-105 transition-all duration-500 ${
            animateContact ? 'animate-in slide-in-from-bottom-2 duration-700' : 'opacity-0 translate-y-8'
          }`} style={{ animationDelay: '300ms' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className={`space-y-6 ${
                animateContact ? 'animate-in slide-in-from-left-2 duration-500' : 'opacity-0 -translate-x-8'
              }`} style={{ animationDelay: '500ms' }}>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white group">
                  <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    Let's Connect
                  </span>
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed group">
                  <span className="group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                    I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and innovation.
                  </span>
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 group hover:scale-105 transition-transform duration-300">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">📧</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1 group">
                        <span className="group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300">
                          Email
                        </span>
                      </p>
                      <p className="text-gray-900 dark:text-white font-medium group">
                        <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          pseudoprashant@gmail.com
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group hover:scale-105 transition-transform duration-300">
                    <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">📱</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1 group">
                        <span className="group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300">
                          Phone
                        </span>
                      </p>
                      <p className="text-gray-900 dark:text-white font-medium group">
                        <span className="group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                          +91 9118715371
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group hover:scale-105 transition-transform duration-300">
                    <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">📍</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 group">
                        <span className="group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300">
                          Location
                        </span>
                      </p>
                      <p className="text-gray-900 dark:text-white font-medium group">
                        <span className="group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                          Greater Noida, UP, India
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className={`space-y-6 ${
                animateContact ? 'animate-in slide-in-from-right-2 duration-500' : 'opacity-0 translate-x-8'
              }`} style={{ animationDelay: '700ms' }}>
                <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white text-center group">
                  <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    Send Message
                  </span>
                </h3>

                <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://forms.gle/biPwKjTfEeNbpZxi9"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    title="Contact Prashant Google Form"
                    className="bg-white dark:bg-gray-800"
                  >
                    Loading…
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 