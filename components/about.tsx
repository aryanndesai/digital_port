"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Palette, Zap, Users } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skills = [
    { icon: Code, title: "Development", description: "[Your development skills and technologies]" },
    { icon: Palette, title: "Design", description: "[Your design skills and tools]" },
    { icon: Zap, title: "Performance", description: "[Your optimization and performance skills]" },
    { icon: Users, title: "Collaboration", description: "[Your teamwork and communication skills]" },
  ]

  return (
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
                <div className="text-6xl text-gray-400">📸</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">[Your Story Headline]</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              [Write your story here. Talk about your journey, what drives you, and what makes you passionate about your
              work. This should be personal yet professional, giving visitors a sense of who you are as a person.]
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              [Continue your story. Mention your background, education, key experiences, or pivotal moments that shaped
              your career. Keep it engaging and authentic.]
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              [Conclude with your current focus, goals, or what you're excited about in your field. This helps visitors
              understand your current direction and interests.]
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <skill.icon className="text-white" size={24} />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">{skill.title}</h4>
              <p className="text-gray-600">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
