import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCode, FiDatabase, FiLayers, FiCpu, FiGitBranch, FiTool } from 'react-icons/fi'
import { SiPython, SiC, SiHtml5, SiCss3, SiJavascript, SiNodedotjs, SiMysql, SiMongodb, SiScikitlearn, SiTensorflow } from 'react-icons/si'

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <FiCode size={24} />,
      skills: [
        { name: "Python", icon: <SiPython className="text-yellow-500" />, level: 8.5 },
        { name: "C", icon: <SiC className="text-blue-700" />, level: 7.2 }
      ]
    },
    {
      title: "Web Development",
      icon: <FiLayers size={24} />,
      skills: [
        { name: "HTML", icon: <SiHtml5 className="text-orange-600" />, level: 7.8 },
        { name: "CSS", icon: <SiCss3 className="text-blue-500" />, level: 7.5 },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, level: 7.3 },
        { name: "Node.js", icon: <SiNodedotjs className="text-green-600" />, level: 6.8 }
      ]
    },
    {
      title: "Databases",
      icon: <FiDatabase size={24} />,
      skills: [
        { name: "MySQL", icon: <SiMysql className="text-blue-600" />, level: 7.1 },
        { name: "MongoDB", icon: <SiMongodb className="text-green-700" />, level: 6.9 }
      ]
    },
    {
      title: "Data Structures & Algorithms",
      icon: <FiCpu size={24} />,
      skills: [
        { name: "DSA", icon: <FiCpu className="text-purple-500" />, level: 7.4 }
      ]
    },
    {
      title: "Machine Learning & AI",
      icon: <FiTool size={24} />,
      skills: [
        { name: "Machine Learning", icon: <SiScikitlearn className="text-yellow-600" />, level: 7.6 },
        { name: "Artificial Intelligence", icon: <SiTensorflow className="text-orange-500" />, level: 7.2 }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
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
            Technical Skills
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-6">
                  <span className="text-blue-500 mr-3">{category.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                          {skill.icon}
                          {skill.name}
                        </span>
                        <span className="text-blue-500">{skill.level}/10</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          className="bg-blue-500 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level * 10}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        />
                      </div>
                    </div>
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