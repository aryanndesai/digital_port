"use client"

import { motion } from "framer-motion"
import { Code, Palette, Zap, Users, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export default function AboutPage() {
  const [currentHobbyIndex, setCurrentHobbyIndex] = useState(0)

  const skills = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Building end-to-end solutions with modern web technologies and AI integration",
    },
    {
      icon: Palette,
      title: "AI Solutions",
      description: "Developing AI-powered dashboards, prompt engineering, and machine learning applications",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for scalability with cloud infrastructure and efficient databases",
    },
    {
      icon: Users,
      title: "Product Development & design",
      description: "Creating user-centric platforms that drive engagement and solve real-world problems",
    },
  ]

  const technologies = [
    "JavaScript",
    "TypeScript",
    "Next.js",
    "React",
    "Node.js",
    "Python",
    "C#/.NET",
    "PostgreSQL",
    "SQLite",
    "Prisma ORM",
    "AWS S3",
    "Flask",
    "Express",
    "Git/GitHub",
    "Figma",
    "Tableau",
  ]

  const hobbies = [
    {
      title: "Photography",
      subtitle: "Capturing moments",
      image: "/scenery.jpg?height=400&width=600",
      description:
        "Exploring visual storytelling through street photography and landscape captures during my travels around Singapore and beyond.",
    },
    {
      title: "Financial Analysis",
      subtitle: "Market insights",
      image: "/stocks.jpg?height=400&width=600",
      description:
        "Building investment dashboards and analyzing market trends, combining my technical skills with financial modeling.",
    },
    {
      title: "Continuous Learning",
      subtitle: "Staying current",
      image: "/book.jpg?height=400&width=600",
      description:
        "Reading books is arguably one of the most effective ways to acquire firsthand knowledge.",
    },
  ]

  const nextHobby = () => {
    setCurrentHobbyIndex((prev) => (prev + 1) % hobbies.length)
  }

  const prevHobby = () => {
    setCurrentHobbyIndex((prev) => (prev - 1 + hobbies.length) % hobbies.length)
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-6xl font-light mb-6 tracking-tight text-slate-900">About</h1>
            <div className="w-16 h-1 bg-slate-900 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 font-light max-w-2xl mx-auto leading-relaxed">
              Full Stack Developer passionate about AI-driven solutions and meaningful digital experiences
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="aspect-square bg-white rounded-2xl card-shadow-lg flex items-center justify-center overflow-hidden">
                <img
                  src="/aryan.jpg?height=400&width=400"
                  alt="About Aryan Desai"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-light text-slate-900">My Journey</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  I am a recent polytechnic graduate in Information Technology with a passion for web development, data analysis, UI/UX design, and teamwork. My experience includes working as an AI Engineer at Initiate, where I oversaw RAG model workflows and integrated APIs, gaining exposure to LLMs and fine-tuning concepts.
                </p>
                
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-slate-900">What I Do</h2>
            <div className="w-16 h-1 bg-slate-900 mx-auto mb-8"></div>
            <p className="text-slate-600 text-lg">Core competencies and expertise</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group bg-white rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300"
              >
                <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-200 transition-colors duration-300">
                  <skill.icon className="text-slate-700" size={24} />
                </div>
                <h3 className="text-lg font-medium mb-2 text-slate-900">{skill.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-slate-900">Technologies</h2>
            <div className="w-16 h-1 bg-slate-900 mx-auto mb-8"></div>
            <p className="text-slate-600 text-lg">Tools and technologies I work with</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-white text-slate-700 text-sm rounded-full border border-slate-200 hover:border-slate-300 transition-colors duration-300 card-shadow"
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Beyond Code Section - Carousel */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-slate-900">Beyond Code</h2>
            <div className="w-16 h-1 bg-slate-900 mx-auto mb-8"></div>
            <p className="text-slate-600 text-lg">Interests and activities that inspire my creativity</p>
          </motion.div>

          <div className="relative">
            <motion.div
              key={currentHobbyIndex}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bg-white rounded-2xl card-shadow-lg overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-square md:aspect-auto">
                  <img
                    src={hobbies[currentHobbyIndex].image || "/placeholder.svg"}
                    alt={hobbies[currentHobbyIndex].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <h3 className="text-2xl md:text-3xl font-light text-slate-900 mb-2">
                      {hobbies[currentHobbyIndex].title}
                    </h3>
                    <p className="text-slate-500 text-lg">{hobbies[currentHobbyIndex].subtitle}</p>
                  </div>
                  <p className="text-slate-600 text-lg leading-relaxed">{hobbies[currentHobbyIndex].description}</p>
                </div>
              </div>
            </motion.div>

            {/* Navigation Arrows */}
            <button
              onClick={prevHobby}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300 card-shadow z-10"
            >
              <ChevronLeft className="text-slate-700" size={20} />
            </button>

            <button
              onClick={nextHobby}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300 card-shadow z-10"
            >
              <ChevronRight className="text-slate-700" size={20} />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {hobbies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentHobbyIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    index === currentHobbyIndex ? "bg-slate-900" : "bg-slate-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
