import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FiGithub size={20} />,
      url: 'https://github.com/yourusername'
    },
    {
      name: 'LinkedIn',
      icon: <FiLinkedin size={20} />,
      url: 'https://linkedin.com/in/yourusername'
    },
    {
      name: 'Email',
      icon: <FiMail size={20} />,
      url: 'mailto:pseudoprashant@gmail.com'
    }
  ]

  return (
    <footer className="bg-gray-50 dark:bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            © {currentYear} Prashant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 