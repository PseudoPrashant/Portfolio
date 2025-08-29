import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiBriefcase, FiCalendar, FiMapPin, FiExternalLink, FiUsers, FiTrendingUp, FiVideo, FiImage } from 'react-icons/fi'

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const experiences = [
    {
      title: "Web Development Intern",
      company: "Qveto Technologies",
      period: "Jun '25 – Present",
      location: "Remote",
      type: "Full-time Internship",
      description: "Currently working as a web development intern, building responsive web applications and contributing to the development team.",
      achievements: [
        "Built responsive web apps using React, Node.js, and MongoDB, improving UI responsiveness by 25%",
        "Integrated third-party APIs and optimized code for scalability, reducing API latency by ~15%",
        "Collaborated with UI/UX teams and contributed to code reviews & documentation"
      ],
      technologies: ["React", "Node.js", "MongoDB", "REST APIs", "Git"],
      icon: <FiBriefcase size={24} />
    },
    {
      title: "Designer & Video Editor",
      company: "Freelancer",
      period: "Apr '22 – Aug '24",
      location: "Remote",
      type: "Freelance",
      description: "Provided creative design and video editing services to small businesses, helping them enhance their digital presence.",
      achievements: [
        "Designed ads, banners, and social creatives for small businesses, increasing client engagement by 30%",
        "Edited promotional videos with Adobe After Effects & Premiere Pro, boosting digital presence of clients",
        "Managed multiple client projects simultaneously while maintaining high quality standards"
      ],
      technologies: ["Adobe After Effects", "Premiere Pro", "Photoshop", "Illustrator", "Canva"],
      icon: <FiVideo size={24} />
    }
  ]

  const positions = [
    {
      title: "Event Organizer",
      organization: "Festember (Shrinik Club, GLBITM)",
      period: "Sep '23",
      description: "Coordinated about 10 events including coding contests, gaming tournaments, dance and music competitions.",
      achievements: [
        "Managed a cross-functional student team to ensure smooth event execution",
        "Oversaw logistics, scheduling, and participant coordination for 450+ students",
        "Successfully organized coding competitions and technical events"
      ],
      icon: <FiUsers size={24} />
    }
  ]

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Professional Experience
          </motion.h2>

          {/* Work Experience */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
              Internships & Work Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                        {exp.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {exp.title}
                        </h4>
                        <span className="px-3 py-1 text-sm bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full font-medium mt-2 sm:mt-0">
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-blue-500 dark:text-blue-400 font-medium mb-2">
                        {exp.company}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                        <span className="flex items-center gap-1">
                          <FiCalendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <FiMapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {exp.description}
                      </p>
                      
                      {/* Achievements */}
                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wide">
                          Key Achievements
                        </h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                              <FiTrendingUp className="w-3 h-3 text-green-500 mt-1 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wide">
                          Technologies Used
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Positions of Responsibility */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
              Positions of Responsibility
            </h3>
            <div className="space-y-6">
              {positions.map((pos, index) => (
                <motion.div
                  key={pos.title}
                  className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800"
                  initial={{ opacity: 0, x: 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -3 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                        {pos.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {pos.title}
                      </h4>
                      <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">
                        {pos.organization}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                        {pos.period}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {pos.description}
                      </p>
                      
                      <ul className="space-y-2">
                        {pos.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <FiTrendingUp className="w-3 h-3 text-purple-500 mt-1 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
