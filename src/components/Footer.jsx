import { SiGithub, SiLinkedin, SiTwitter, SiInstagram } from 'react-icons/si'
import { useState, useEffect } from 'react'

const Footer = () => {
  const [animateFooter, setAnimateFooter] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimateFooter(true), 800)
    return () => clearTimeout(timer)
  }, [])

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/PseudoPrashant',
      icon: <SiGithub className="w-5 h-5" />,
      color: 'hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/prashant-kumar-123456789',
      icon: <SiLinkedin className="w-5 h-5" />,
      color: 'hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/pseudoprashant',
      icon: <SiTwitter className="w-5 h-5" />,
      color: 'hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/pseudoprashant',
      icon: <SiInstagram className="w-5 h-5" />,
      color: 'hover:text-pink-500 hover:bg-pink-50 dark:hover:bg-pink-900/20'
    }
  ]

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 sm:py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Accent Bar */}
          <div className={`h-1.5 sm:h-2 w-16 sm:w-24 mx-auto mb-8 sm:mb-10 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg shadow-blue-500/20 animate-pulse ${
            animateFooter ? 'animate-in slide-in-from-top-2 duration-700' : 'opacity-0 -translate-y-8'
          }`} />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
            {/* Brand Section */}
            <div className={`text-center md:text-left ${
              animateFooter ? 'animate-in slide-in-from-left-2 duration-500' : 'opacity-0 -translate-x-8'
            }`} style={{ animationDelay: '300ms' }}>
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4 group">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">P</span>
                </div>
                <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors duration-300">
                  Prashant Kumar
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed group">
                <span className="group-hover:text-gray-300 transition-colors duration-300">
                  A passionate Full Stack Developer and B. Tech Computer Science student, 
                  dedicated to creating innovative web solutions and learning new technologies.
                </span>
              </p>
            </div>

            {/* Quick Links */}
            <div className={`text-center md:text-left ${
              animateFooter ? 'animate-in slide-in-from-bottom-2 duration-500' : 'opacity-0 translate-y-8'
            }`} style={{ animationDelay: '500ms' }}>
              <h4 className="text-lg font-semibold mb-4 group">
                <span className="group-hover:text-blue-400 transition-colors duration-300">
                  Quick Links
                </span>
              </h4>
              <ul className="space-y-2">
                {['About', 'Skills', 'Projects', 'Contact'].map((link, index) => (
                  <li key={link} className="group">
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:translate-x-1 inline-block group-hover:scale-105"
                      style={{ animationDelay: `${600 + index * 100}ms` }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className={`text-center md:text-left ${
              animateFooter ? 'animate-in slide-in-from-right-2 duration-500' : 'opacity-0 translate-x-8'
            }`} style={{ animationDelay: '700ms' }}>
              <h4 className="text-lg font-semibold mb-4 group">
                <span className="group-hover:text-blue-400 transition-colors duration-300">
                  Contact Info
                </span>
              </h4>
              <div className="space-y-2 text-gray-400">
                <p className="group hover:text-blue-400 transition-colors duration-300 transform hover:translate-x-1">
                  📧 pseudoprashant@gmail.com
                </p>
                <p className="group hover:text-blue-400 transition-colors duration-300 transform hover:translate-x-1">
                  📱 +91 9118715371
                </p>
                <p className="group hover:text-blue-400 transition-colors duration-300 transform hover:translate-x-1">
                  📍 Greater Noida, UP, India
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className={`text-center mb-8 sm:mb-10 ${
            animateFooter ? 'animate-in slide-in-from-bottom-2 duration-700' : 'opacity-0 translate-y-8'
          }`} style={{ animationDelay: '900ms' }}>
            <h4 className="text-lg font-semibold mb-4 group">
              <span className="group-hover:text-blue-400 transition-colors duration-300">
                Connect With Me
              </span>
            </h4>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg text-gray-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12 ${social.color} ${
                    animateFooter ? 'animate-in slide-in-from-bottom-2 duration-500' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ animationDelay: `${1000 + index * 100}ms` }}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className={`h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-8 ${
            animateFooter ? 'animate-in slide-in-from-left-2 duration-1000' : 'opacity-0 scale-x-0'
          }`} style={{ animationDelay: '1200ms' }} />

          {/* Copyright */}
          <div className={`text-center ${
            animateFooter ? 'animate-in slide-in-from-bottom-2 duration-500' : 'opacity-0 translate-y-8'
          }`} style={{ animationDelay: '1400ms' }}>
            <p className="text-gray-400 group">
              <span className="group-hover:text-gray-300 transition-colors duration-300">
                © 2024 Prashant Kumar. All rights reserved. | 
              </span>
              <span className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                Built with ❤️ and React
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 