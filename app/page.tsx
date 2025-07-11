"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { ArrowRight, ArrowDown, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRef, useState, useEffect } from "react"

export default function Home() {
  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const skillsRef = useRef(null)
  const testimonialsRef = useRef(null)

  const isHeroInView = useInView(heroRef, { once: false, margin: "-50%" })
  const isAboutInView = useInView(aboutRef, { once: true, margin: "-20%" })
  const isProjectsInView = useInView(projectsRef, { once: true, margin: "-20%" })
  const isSkillsInView = useInView(skillsRef, { once: true, margin: "-20%" })
  const isTestimonialsInView = useInView(testimonialsRef, { once: true, margin: "-20%" })

  // Testimonial carousel state
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [direction, setDirection] = useState(0)

  const testimonials = [
    {
      quote:
        "Working with Aryan has been a pleasure. His attention to detail and problem-solving skills are exceptional.",
      author: "Keshuram Ramani",
      role: "CEO of Initiate",
      image: "/keshu.jpg?height=60&width=60",
    },
    {
      quote:
        "Aryan is a valuable asset to any team. His technical skills and leadership qualities make him stand out.",
      author: "Form Teacher, Class of 2023",
      role: "Academic Mentor",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      quote:
        "I highly recommend Aryan for any technical project. His professionalism, dedication, and creative problem solving consistently stood out during my class.",
      author: "Brandon Ooi",
      role: "Module Lead for AI and Data Analyitcs",
      image: "/brandon.jpg?height=60&width=60",
    },
  ]

  // Updated coding languages with specific colors matching the reference
  const codingLanguages = [
    { name: "JavaScript", color: "bg-yellow-400 text-black" },
    { name: "TypeScript", color: "bg-blue-600 text-white" },
    { name: "Python", color: "bg-blue-500 text-white" },
    { name: "C#/.NET", color: "bg-purple-600 text-white" },
    { name: "Next.js", color: "bg-gray-700 text-white" },
    { name: "React", color: "bg-cyan-400 text-black" },
    { name: "Node.js", color: "bg-green-500 text-white" },
    { name: "PostgreSQL", color: "bg-blue-700 text-white" },
    { name: "SQLite", color: "bg-gray-600 text-white" },
    { name: "Prisma ORM", color: "bg-indigo-600 text-white" },
    { name: "AWS S3", color: "bg-orange-600 text-white" },
    { name: "Flask", color: "bg-gray-800 text-white" },
  ]

  // Updated projects based on resume
  const featuredProjects = [
    {
      title: "Initiate AI Platform",
      description:
        "AI-powered marketplace with smart dashboards, notification systems, and user analytics for startups and admin users.",
      image: "/initiate.png?height=300&width=400",
      tags: ["Next.js", "Node.js", "PostgreSQL", "AI"],
    },
    {
      title: "ML Stock Predictor",
      description:
        "Machine learning application that predicts stock price movements using historical trends and AI algorithms.",
      image: "/ml.png?height=300&width=400",
      tags: ["Python", "Machine Learning", "Data Analysis"],
    },
    {
      title: "Eco Primers",
      description:
        "Sustainability web application with AI-powered image verification and gamification system for eco-friendly actions.",
      image: "/ecoprimers.png?height=300&width=400",
      tags: ["Python", "Flask", "AI Verification"],
    },
  ]

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1)
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  // Smooth slide variants for testimonials
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Hero Section - Matching the provided image */}
      <section ref={heroRef} className="min-h-screen flex flex-col justify-center px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-light tracking-tight leading-tight text-slate-900 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Full Stack Engineer
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl md:text-2xl font-light text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Documenting my journey from student to developer through academic, internship, and self-driven IT
              projects.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <Link href="/portfolio">
                <Button
                  size="lg"
                  className="bg-slate-900 text-white hover:bg-slate-800 px-8 py-4 text-base font-medium rounded-full card-shadow hover:card-shadow-hover"
                >
                  View Work
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-slate-300 text-slate-900 hover:bg-slate-50 px-8 py-4 text-base font-medium rounded-full bg-transparent"
                >
                  Download CV
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: isHeroInView ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="p-3 rounded-full border border-slate-300 hover:border-slate-400 transition-colors duration-300 bg-white card-shadow"
          >
            <ArrowDown className="text-slate-600" size={20} />
          </motion.div>
        </motion.button>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-24 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isAboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square bg-white rounded-2xl card-shadow-lg flex items-center justify-center overflow-hidden">
                <img
                  src="/aryan.jpg?height=500&width=500"
                  alt="About Aryan Desai"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isAboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-light tracking-tight text-slate-900 mb-6">About Me</h2>
                <div className="w-16 h-1 bg-slate-900 mb-8"></div>
              </div>

              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  I'm a passionate Software & AI enthusiast currently based in Singapore. As a student at Nanyang
                  Polytechnic studying Information Technology and working full-time as a Full Stack Developer at
                  Initiate Pte Ltd, I bring together technical expertise and creative problem-solving.
                </p>
                <p>
                  I specialize in building AI-powered solutions, developing full-stack applications with modern
                  technologies like Next.js, Python, and C#/.NET, and creating meaningful digital experiences that solve
                  real-world problems.
                </p>
              </div>

              <Link href="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-slate-300 text-slate-900 hover:bg-slate-50 px-8 py-4 text-base font-medium rounded-full mt-8 bg-transparent"
                >
                  Learn More About Me
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section ref={projectsRef} className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isProjectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-slate-900 mb-6">Featured Projects</h2>
            <div className="w-16 h-1 bg-slate-900 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              A showcase of my most impactful work across AI solutions, machine learning, and full-stack development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isProjectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl card-shadow hover:card-shadow-hover transition-all duration-300 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-medium mb-2 text-slate-900">{project.title}</h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed line-clamp-3">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded border border-slate-200"
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
            animate={isProjectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-12"
          >
            <Link href="/portfolio">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-slate-300 text-slate-900 hover:bg-slate-50 px-8 py-4 text-base font-medium rounded-full bg-transparent"
              >
                View All Projects
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Skills Section - White background with colorful badges */}
      <section ref={skillsRef} className="py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isSkillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-slate-900 mb-6">Technical Skills</h2>
            <div className="w-16 h-1 bg-slate-900 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Technologies and tools I use to build AI-powered solutions and full-stack applications
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isSkillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {codingLanguages.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isSkillsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className={`px-6 py-3 font-medium text-sm rounded-full cursor-default shadow-lg hover:shadow-xl transition-all duration-300 ${skill.color}`}
              >
                {skill.name}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section ref={testimonialsRef} className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isTestimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-slate-900 mb-16">Testimonials</h2>

            <div className="relative overflow-hidden">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentTestimonial}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="mb-12"
                >
                  <p className="text-2xl md:text-3xl font-light leading-relaxed mb-8 max-w-4xl mx-auto text-slate-700">
                    "{testimonials[currentTestimonial].quote}"
                  </p>

                  <div className="flex items-center justify-center space-x-4">
                    <img
                      src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                      alt={testimonials[currentTestimonial].author}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <p className="font-medium text-slate-900">{testimonials[currentTestimonial].author}</p>
                      <p className="text-slate-600 text-sm">{testimonials[currentTestimonial].role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 p-3 rounded-full border border-slate-300 hover:border-slate-400 transition-colors duration-300 z-10 bg-white card-shadow"
              >
                <ChevronLeft className="text-slate-600 hover:text-slate-900 transition-colors duration-300" size={20} />
              </button>
              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 rounded-full border border-slate-300 hover:border-slate-400 transition-colors duration-300 z-10 bg-white card-shadow"
              >
                <ChevronRight
                  className="text-slate-600 hover:text-slate-900 transition-colors duration-300"
                  size={20}
                />
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center space-x-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentTestimonial ? 1 : -1)
                      setCurrentTestimonial(index)
                    }}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      index === currentTestimonial ? "bg-slate-900" : "bg-slate-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
