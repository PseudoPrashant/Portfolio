import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiBookOpen, FiStar } from 'react-icons/fi'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Accent Bar */}
          <div className="h-2 w-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-10 md:p-14 flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Optional: Profile Image */}
            {/* <img src="/profile.jpg" alt="Prashant Kumar Sharma" className="w-28 h-28 rounded-full border-4 border-blue-400 shadow-lg mb-6" /> */}
            <div className="prose prose-lg dark:prose-invert max-w-none text-center">
              <p className="mb-8 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                Hello! I'm Prashant Kumar Sharma, a passionate Full Stack Developer and BTech Computer Science student specializing in AI & ML. I love turning complex problems into elegant, efficient solutions.
              </p>
              <div className="grid md:grid-cols-2 gap-10 mt-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-6 flex flex-col items-center shadow"
                >
                  <FiBookOpen className="w-8 h-8 text-blue-500 mb-3" />
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Education</h3>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300 text-left">
                    <li className="flex items-center gap-2"><span className="text-blue-400">•</span> BTech in Computer Science</li>
                    <li className="flex items-center gap-2"><span className="text-blue-400">•</span> Specialization in AI & ML</li>
                    <li className="flex items-center gap-2"><span className="text-blue-400">•</span> Data Structures & Algorithms</li>
                  </ul>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="bg-pink-50 dark:bg-pink-900/30 rounded-xl p-6 flex flex-col items-center shadow"
                >
                  <FiStar className="w-8 h-8 text-pink-500 mb-3" />
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Interests</h3>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300 text-left">
                    <li className="flex items-center gap-2"><span className="text-pink-400">•</span> Full Stack Development</li>
                    <li className="flex items-center gap-2"><span className="text-pink-400">•</span> Artificial Intelligence</li>
                    <li className="flex items-center gap-2"><span className="text-pink-400">•</span> Machine Learning</li>
                    <li className="flex items-center gap-2"><span className="text-pink-400">•</span> Problem Solving</li>
                  </ul>
                </motion.div>
              </div>
              <motion.p 
                className="mt-10 text-gray-600 dark:text-gray-300 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                I'm constantly learning and exploring new technologies to stay at the forefront of web development and AI innovations. My goal is to create impactful solutions that make a difference in people's lives.
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 