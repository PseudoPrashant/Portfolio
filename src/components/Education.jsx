import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiBook, FiAward } from 'react-icons/fi'

const Education = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      specialization: "Artificial Intelligence & Machine Learning",
      institution: "GL Bajaj Institute of Technology & Management",
      graduation: "January 2025",
      score: "GPA: 7.68",
      icon: <FiBook size={24} />
    },
    {
      degree: "Senior Secondary (XII)",
      institution: "Aditya Birla Public School, Renusagar",
      graduation: "2021",
      score: "Score: 78.0%",
      icon: <FiAward size={24} />
    },
    {
      degree: "Secondary (X)",
      institution: "Aditya Birla Public School, Renusagar",
      graduation: "2019",
      score: "Score: 80.00%",
      icon: <FiAward size={24} />
    }
  ]

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
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
            Education
          </motion.h2>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      {edu.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      {edu.degree}
                    </h3>
                    {edu.specialization && (
                      <p className="text-blue-500 dark:text-blue-400 font-medium mb-2">
                        {edu.specialization}
                      </p>
                    )}
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      {edu.institution}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <p className="text-gray-600 dark:text-gray-300">
                        Graduation: {edu.graduation}
                      </p>
                      <p className="text-blue-500 font-medium">
                        {edu.score}
                      </p>
                    </div>
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

export default Education 