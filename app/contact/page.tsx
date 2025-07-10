"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Globe, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-6xl font-light mb-6 tracking-tight text-slate-900">Get in Touch</h1>
            <div className="w-16 h-1 bg-slate-900 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 font-light max-w-2xl mx-auto leading-relaxed">
              Feel free to reach out for inquiries, collaborations, or opportunities. I look forward to connecting with
              you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Left Side - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-light mb-8 tracking-tight text-slate-900">Let's Connect</h2>
                <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                  I'm always interested in hearing about new opportunities, collaborations, and interesting projects.
                  Whether you have a question or just want to say hello, I'll do my best to get back to you.
                </p>
              </div>

              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                      <Mail className="text-slate-700" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-slate-900">Email</h3>
                      <a
                        href="mailto:aryannjdesai@gmail.com"
                        className="text-slate-600 hover:text-slate-900 transition-colors duration-200"
                      >
                        aryannjdesai@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                      <Phone className="text-slate-700" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-slate-900">Phone</h3>
                      <a
                        href="tel:+6589271451"
                        className="text-slate-600 hover:text-slate-900 transition-colors duration-200"
                      >
                        +65 8927 1451
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                      <MapPin className="text-slate-700" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-slate-900">Location</h3>
                      <p className="text-slate-600">Singapore</p>
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <p className="text-slate-500 text-sm">Available for freelance opportunities and collaborations.</p>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-light text-slate-900">Send a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* First Name and Last Name */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-900 mb-3">
                      First name
                    </label>
                    <Input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-500 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors duration-300"
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-900 mb-3">
                      Last name
                    </label>
                    <Input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-500 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors duration-300"
                      placeholder="Last name"
                    />
                  </div>
                </div>

                {/* Email and Phone */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-3">
                      Email *
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-500 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors duration-300"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-900 mb-3">
                      Phone
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-3 flex items-center space-x-2">
                        <Globe size={16} className="text-slate-500" />
                        <span className="text-slate-500">+</span>
                      </div>
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-white border border-slate-300 rounded-lg pl-16 pr-4 py-3 text-slate-900 placeholder-slate-500 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors duration-300"
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-900 mb-3">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-500 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 resize-none transition-colors duration-300"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-8">
                  <Button
                    type="submit"
                    className="w-full bg-slate-900 text-white hover:bg-slate-800 py-4 text-base font-medium transition-all duration-300 rounded-full"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
