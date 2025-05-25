import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiAward, FiExternalLink } from 'react-icons/fi'

const Certifications = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const certifications = [
    {
      title: "Machine Learning with Python",
      issuer: "Teachnook",
      period: "May 2023 – June 2023",
      description: "Comprehensive training in machine learning algorithms and Python implementation.",
      link: "https://drive.google.com/file/d/1BXDthYk7-_QA9UvM1mRBIy_U1rH8sEwv/view?usp=drive_link"
    },
    {
      title: "Power BI Course",
      issuer: "TNX",
      period: "May 2023 – June 2023",
      description: "Professional training in data visualization and business intelligence using Power BI.",
      link: "https://drive.google.com/file/d/1Ktjt4RNX7ROz7U636kq4ylvhhwQ_-F90/view?usp=drive_link"
    },
    {
      title: "SHRINIK - Coding Festember Participation Award",
      issuer: "Certificate of Participation",
      period: "2023",
      description: "Ranked 6th out of 108 teams in the coding competition.",
      link: "https://drive.google.com/file/d/1XCD6SQwaeish65_yJrk0g3yd6mM61iUI/view?usp=drive_link"
    }
  ]

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900">
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
            Certifications
          </motion.h2>

          <div className="space-y-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <FiAward className="w-6 h-6 text-blue-500" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {cert.link ? (
                        <a 
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-blue-500 transition-colors inline-flex items-center gap-2 group"
                        >
                          {cert.title}
                          <FiExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      ) : (
                        cert.title
                      )}
                    </h3>
                    <p className="text-blue-500 dark:text-blue-400 font-medium mb-2">
                      {cert.issuer}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                      {cert.period}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications 