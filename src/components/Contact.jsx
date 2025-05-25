import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const contactInfo = [
    {
      icon: <FiMail size={24} />,
      label: 'Email',
      value: 'pseudoprashant@gmail.com',
      href: 'mailto:pseudoprashant@gmail.com'
    },
    {
      icon: <FiPhone size={24} />,
      label: 'Phone',
      value: '+91 9118715371',
      href: 'tel:+919118715371'
    },
    {
      icon: <FiMapPin size={24} />,
      label: 'Location',
      value: 'Greater Noida, India',
      href: 'https://maps.google.com/?q=Greater+Noida'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Get In Touch
          </motion.h2>

          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Google Form */}
              <div className="md:w-2/3 w-full">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSebLVkeUHtvIkf538ZfEP3rc8mgUw3Dtp7vDR-zTNFzT3varw/viewform?embedded=true"
                  width="100%"
                  height="500"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  title="Contact Prashant Google Form"
                  style={{ background: 'white', borderRadius: '0.75rem' }}
                  allowFullScreen
                >
                  Loading…
                </iframe>
              </div>
              {/* Contact Info */}
              <div className="md:w-1/3 w-full flex flex-col justify-center space-y-8">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  >
                    <span className="text-blue-500">{info.icon}</span>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {info.label}
                      </p>
                      <p className="font-medium break-all whitespace-nowrap">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 