"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Twitter, Heart, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/aryannjdesai", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/aryan-d-781b08317/", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:aryannjdesai@gmail.com", label: "Email" },
  ]

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace("#", ""))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="container mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-light text-slate-900">Aryan Desai</h3>
            <p className="text-slate-600 leading-relaxed">
              Full Stack Developer documenting my journey from student to developer through academic, internship, and
              self-driven IT projects.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-slate-200 transition-all duration-300 text-slate-600 hover:text-slate-900"
                  aria-label={label}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-medium text-slate-900">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-slate-600 hover:text-slate-900 transition-colors duration-200 hover:underline"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-medium text-slate-900">Get In Touch</h4>
            <div className="space-y-3 text-slate-600">
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <a href="mailto:aryannjdesai@gmail.com" className="hover:text-slate-900 transition-colors duration-200">
                  aryannjdesai@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <a href="tel:+658" className="hover:text-slate-900 transition-colors duration-200">
                  +65 89## ####
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>Singapore</span>
              </div>
            </div>
            <p className="text-sm text-slate-500">Available for freelance opportunities and collaborations.</p>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Aryan Desai. All rights reserved.</p>
          <div className="flex items-center space-x-1 text-slate-500 text-sm">
            <span>Made with</span>
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}>
              <Heart className="text-red-500" size={16} fill="currentColor" />
            </motion.div>
            <span>and lots of coffee</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
