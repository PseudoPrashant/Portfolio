import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SiPython, SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, SiGit, SiDocker, SiTypescript, SiNextdotjs } from 'react-icons/si'

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: <SiReact className="text-blue-400" size={24} />, level: 90 },
        { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" size={24} />, level: 85 },
        { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" size={24} />, level: 80 },
        { name: 'Next.js', icon: <SiNextdotjs className="text-gray-800 dark:text-white" size={24} />, level: 85 },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" size={24} />, level: 90 }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: <SiNodedotjs className="text-green-600" size={24} />, level: 85 },
        { name: 'Python', icon: <SiPython className="text-blue-500" size={24} />, level: 80 },
        { name: 'MongoDB', icon: <SiMongodb className="text-green-700" size={24} />, level: 75 }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', icon: <SiGit className="text-orange-500" size={24} />, level: 85 },
        { name: 'Docker', icon: <SiDocker className="text-blue-500" size={24} />, level: 70 }
      ]
    }
  ]

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Enhanced Accent Bar */}
          <div className="h-1.5 sm:h-2 w-16 sm:w-24 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg shadow-blue-500/20" />
          
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Skills & Expertise
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 + categoryIndex * 0.1 }}
                className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-blue-500/10 transition-all duration-300 border border-gray-100 dark:border-gray-800"
              >
                <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  {category.title}
                </h3>
                <div className="space-y-4 sm:space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 0.4 + skillIndex * 0.1 }}
                      className="flex flex-col gap-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            {skill.icon}
                          </motion.div>
                          <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 