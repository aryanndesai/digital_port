"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: "[Project Title 1]",
      description: "[Brief description of your project, technologies used, and key features]",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["React", "Next.js", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "[Project Title 2]",
      description: "[Brief description of your project, technologies used, and key features]",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Vue.js", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "[Project Title 3]",
      description: "[Brief description of your project, technologies used, and key features]",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Python", "Django", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "[Project Title 4]",
      description: "[Brief description of your project, technologies used, and key features]",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["React Native", "Firebase", "Redux"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "[Project Title 5]",
      description: "[Brief description of your project, technologies used, and key features]",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Angular", "Express", "MySQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "[Project Title 6]",
      description: "[Brief description of your project, technologies used, and key features]",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Flutter", "Dart", "SQLite"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
            My Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            [A brief introduction to your portfolio. Mention what visitors will find here and what makes your work
            unique.]
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex space-x-2">
                    <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white text-gray-900" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-1" />
                        Live
                      </a>
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white text-gray-900" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-1" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 bg-transparent"
          >
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
