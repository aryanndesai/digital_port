"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Eye, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

export default function PortfolioPage() {
  const [currentPage, setCurrentPage] = useState(0)

  const projects = [
    {
      id: "initiate-platform",
      title: "Initiate AI Platform",
      description:
        "AI-powered marketplace connecting startups with solutions. Built comprehensive admin dashboards, user analytics, and notification systems with modern web technologies.",
      image: "/initiate.png?height=400&width=600",
      tags: ["Next.js", "Node.js", "PostgreSQL", "Prisma ORM", "AI"],
      liveUrl: "https://initiate.global",
      
      featured: true,
    },
    {
      id: "ml-stock-predictor",
      title: "ML Stock Predictor",
      description:
        "Machine learning application that analyzes historical stock data to predict price movements using advanced AI algorithms and data visualization.",
      image: "/ml.png?height=400&width=600",
      tags: ["Python", "Machine Learning", "Data Analysis", "AI"],
      
      githubUrl: "https://github.com/aryannjdesai/ML-Stock-Predictor",
      featured: true,
    },
    {
      id: "eco-primers",
      title: "Eco Primers",
      description:
        "Sustainability web application with AI-powered image verification for eco-friendly tasks and gamification system to encourage environmental actions.",
      image: "/ecoprimers.png?height=400&width=600",
      tags: ["Python", "Flask", "AI Verification", "Gamification"],
      liveUrl: "https://ecoprimers.fly.dev/",
      githubUrl: "https://github.com/dentolos19/ecoprimers",
      featured: true,
    },
    {
      id: "polyguru-platform",
      title: "Polyguru Platform",
      description:
        "Student productivity platform with subject-based forums, smart filters, and AI features for enhanced peer learning and engagement.",
      image: "/polyguru.png?height=300&width=400",
      tags: ["Next.js", "PostgreSQL", "AI Features"],
      liveUrl: "https://polyguru.xyz/",
      featured: false,
    },
    {
      id: "pokemon-pocket",
      title: "Pokemon Pocket Game",
      description:
        "Console-based Pokemon game built with C#/.NET featuring advanced gameplay mechanics, evolution tracking, and quest progression systems.",
      image: "/pokelogo.jpg?height=300&width=400",
      tags: ["C#", ".NET", "SQLite", "Game Development"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: "financial-dashboard",
      title: "Financial Analysis Dashboard",
      description:
        "Interactive dashboard built with Tableau and Excel for investment return projections and financial insights visualization.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Tableau", "Excel", "Data Visualization"],
      
      githubUrl: "https://github.com/aryannjdesai/Data-Analysis",
      featured: false,
    },
  ]

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  // Show 2 projects per page
  const projectsPerPage = 2
  const totalPages = Math.ceil(otherProjects.length / projectsPerPage)
  const currentProjects = otherProjects.slice(currentPage * projectsPerPage, (currentPage + 1) * projectsPerPage)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-6xl font-light mb-6 tracking-tight text-slate-900">Portfolio</h1>
            <div className="w-16 h-1 bg-slate-900 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 font-light max-w-2xl mx-auto leading-relaxed">
              A collection Individual and group projects of AI-powered solutions, full-stack applications, and innovative projects showcasing
              technical expertise and creative thinking
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-slate-900">Featured Work</h2>
            <div className="w-16 h-1 bg-slate-900 mb-8"></div>
            <p className="text-slate-600 text-lg">
              Highlighted projects and case studies from my professional and academic work
            </p>
          </motion.div>

          <div className="space-y-24">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative group overflow-hidden rounded-2xl card-shadow-lg bg-white"
                  >
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.div>
                </div>

                <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""} space-y-6`}>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-light text-slate-900 mb-4">{project.title}</h3>
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full border border-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Link href={`/portfolio/${project.id}`}>
                      <Button className="bg-slate-900 text-white hover:bg-slate-800 rounded-full card-shadow">
                        <Eye size={16} className="mr-2" />
                        View Details
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      className="border-2 border-slate-300 text-slate-900 hover:bg-slate-50 rounded-full bg-transparent"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      className="border-2 border-slate-300 text-slate-900 hover:bg-slate-50 rounded-full bg-transparent"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* More Projects - 2 cards per page with pagination */}
      {otherProjects.length > 0 && (
        <section className="py-16 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16 flex items-center justify-between"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-light mb-4 text-slate-900">More Projects</h2>
                <div className="w-16 h-1 bg-slate-900 mb-8"></div>
                <p className="text-slate-600 text-lg">
                  Additional work and experiments from academic and personal projects
                </p>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center space-x-4">
                <div className="flex space-x-2">
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPage(index)}
                      className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                        index === currentPage ? "bg-slate-900" : "bg-slate-300"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={prevPage}
                    className="w-10 h-10 rounded-full border border-slate-300 hover:border-slate-400 transition-colors duration-300 flex items-center justify-center"
                  >
                    <ChevronLeft
                      className="text-slate-600 hover:text-slate-900 transition-colors duration-300"
                      size={20}
                    />
                  </button>
                  <button
                    onClick={nextPage}
                    className="w-10 h-10 rounded-full border border-slate-300 hover:border-slate-400 transition-colors duration-300 flex items-center justify-center"
                  >
                    <ChevronRight
                      className="text-slate-600 hover:text-slate-900 transition-colors duration-300"
                      size={20}
                    />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Project Cards - 2 per page */}
            <div className="grid md:grid-cols-2 gap-8">
              {currentProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl card-shadow hover:card-shadow-hover transition-all duration-300 overflow-hidden group"
                >
                  {/* Image Section */}
                  <div className="relative overflow-hidden bg-gray-100 aspect-video">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <h3 className="text-xl font-medium mb-3 text-slate-900">{project.title}</h3>
                    <p className="text-slate-600 text-sm mb-4 leading-relaxed line-clamp-3">{project.description}</p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded border border-slate-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-between items-center">
                      <Link href={`/portfolio/${project.id}`}>
                        <Button size="sm" className="bg-slate-900 text-white hover:bg-slate-800 rounded-full">
                          <Eye size={14} className="mr-2" />
                          View Details
                        </Button>
                      </Link>

                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border border-slate-300 text-slate-900 hover:bg-slate-50 bg-transparent rounded-full"
                          asChild
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={14} className="mr-1" />
                            Live
                          </a>
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border border-slate-300 text-slate-900 hover:bg-slate-50 bg-transparent rounded-full"
                          asChild
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github size={14} className="mr-1" />
                            Code
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
