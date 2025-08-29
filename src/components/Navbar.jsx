import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [animateNavbar, setAnimateNavbar] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimateNavbar(true), 50)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Check if user has a saved theme preference
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    } else {
      setIsDark(false)
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    
    if (newTheme) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-gray-700' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className={`flex items-center space-x-2 group ${
            animateNavbar ? 'animate-in slide-in-from-left-2 duration-500' : 'opacity-0 -translate-x-8'
          }`}>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xl md:text-2xl font-bold transition-all duration-300 cursor-pointer ${
                isScrolled 
                  ? 'text-gray-900 dark:text-white' 
                  : 'text-gray-900 dark:text-white'
              } group-hover:text-blue-500 dark:group-hover:text-blue-400 hover:scale-105`}
            >
              PRASHANT.DEV
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 ${
                  isScrolled 
                    ? 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20' 
                    : 'text-gray-900 dark:text-white/90 hover:text-blue-600 dark:hover:text-white hover:bg-blue-50/50 dark:hover:bg-white/10'
                } ${
                  animateNavbar ? 'animate-in slide-in-from-top-2 duration-500' : 'opacity-0 -translate-y-8'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Theme Toggle Button */}
          <div className={`flex items-center space-x-4 ${
            animateNavbar ? 'animate-in slide-in-from-right-2 duration-500' : 'opacity-0 translate-x-8'
          }`} style={{ animationDelay: '800ms' }}>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-300 transform hover:scale-110 hover:rotate-12 ${
                isScrolled 
                  ? 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20' 
                  : 'text-gray-900 dark:text-white/90 hover:text-blue-600 dark:hover:text-white hover:bg-blue-50/50 dark:hover:bg-white/10'
              }`}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              <span className="text-lg">
                {isDark ? '☀️' : '🌙'}
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-lg transition-all duration-300 transform hover:scale-110 ${
                isScrolled 
                  ? 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20' 
                  : 'text-gray-900 dark:text-white/90 hover:text-blue-600 dark:hover:text-white hover:bg-blue-50/50 dark:hover:bg-white/10'
              }`}
            >
              <div className="w-5 h-5 flex flex-col justify-center items-center">
                <span className={`w-5 h-0.5 bg-current transform transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'
                }`} />
                <span className={`w-5 h-0.5 bg-current transform transition-all duration-300 ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`} />
                <span className={`w-5 h-0.5 bg-current transform transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'
                }`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 transform hover:scale-105 hover:translate-x-2 ${
                  isScrolled 
                    ? 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20' 
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                } ${
                  isOpen ? 'animate-in slide-in-from-right-2 duration-300' : 'opacity-0 translate-x-8'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 