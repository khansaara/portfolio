"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { AnimatedSection } from "./animated-section"
import { Mail, Phone, MapPin, LinkedinIcon as LinkedIn, Github } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  const [contactForm, setContactForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setSubmitMessage("Thank you for your message! I'll get back to you soon.")
    setContactForm({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    })
    setIsSubmitting(false)

    // Clear success message after 5 seconds
    setTimeout(() => setSubmitMessage(""), 5000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setContactForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <section
      id="contact"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-900/50 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <AnimatedSection animation="fade">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Get In Touch</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">Ready to discuss your next project?</p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          <AnimatedSection animation="slideRight">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-white">Let's Connect</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-8">
                I'm always interested in discussing new opportunities and challenging projects. Whether you need help
                with process optimization, data analysis, or team leadership, I'd love to hear from you.
              </p>

              <div className="space-y-4">
                <Link
                  href="mailto:itsaarakhan@gmail.com"
                  className="flex items-center space-x-3 text-slate-600 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                >
                  <Mail className="h-5 w-5 text-rose-600 dark:text-rose-400" />
                  <span>itsaarakhan@gmail.com</span>
                </Link>
                <Link
                  href="https://wa.me/918299063804"
                  className="flex items-center space-x-3 text-slate-600 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                >
                  <Phone className="h-5 w-5 text-rose-600 dark:text-rose-400" />
                  <span>(+91) 8299-063-804</span>
                </Link>
                <div className="flex items-center space-x-3 text-slate-600 dark:text-slate-300">
                  <MapPin className="h-5 w-5 text-rose-600 dark:text-rose-400" />
                  <span>Marathahalli, Bengaluru, Karnataka</span>
                </div>
              </div>

              <div className="flex space-x-4 mt-8">
                <Link
                  href="https://linkedin.com/in/khansaara"
                  className="text-slate-600 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors hover:scale-110 transform duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedIn className="h-6 w-6" />
                </Link>
                <Link
                  href="https://github.com/khansaara"
                  className="text-slate-600 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors hover:scale-110 transform duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slideLeft">
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-white/80 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle className="text-slate-900 dark:text-white">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      name="firstName"
                      placeholder="First Name"
                      value={contactForm.firstName}
                      onChange={handleInputChange}
                      required
                      className="bg-white/50 dark:bg-slate-900/50 border-slate-300 dark:border-slate-600"
                    />
                    <Input
                      name="lastName"
                      placeholder="Last Name"
                      value={contactForm.lastName}
                      onChange={handleInputChange}
                      required
                      className="bg-white/50 dark:bg-slate-900/50 border-slate-300 dark:border-slate-600"
                    />
                  </div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={contactForm.email}
                    onChange={handleInputChange}
                    required
                    className="bg-white/50 dark:bg-slate-900/50 border-slate-300 dark:border-slate-600"
                  />
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={contactForm.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-white/50 dark:bg-slate-900/50 border-slate-300 dark:border-slate-600"
                  />
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    value={contactForm.message}
                    onChange={handleInputChange}
                    required
                    className="bg-white/50 dark:bg-slate-900/50 border-slate-300 dark:border-slate-600"
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-rose-600 hover:bg-rose-700 dark:bg-rose-500 dark:hover:bg-rose-600 transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                  {submitMessage && (
                    <div className="mt-4 p-3 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-md text-sm border border-green-200 dark:border-green-800">
                      {submitMessage}
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
