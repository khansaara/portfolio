"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ThemeToggle } from "./components/theme-toggle"
import { AnimatedSection } from "./components/animated-section"
import {
  Mail,
  Phone,
  MapPin,
  LinkedinIcon as LinkedIn,
  Github,
  Download,
  Calendar,
  Award,
  TrendingUp,
  Users,
  Target,
  BarChart3,
  Database,
  Zap,
  Star,
  ChevronRight,
  Menu,
  X,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ContactSection } from "./components/contact-section"

export default function SaaraKhanPortfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [contactForm, setContactForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "projects", "skills", "certifications", "achievements"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

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

  const downloadResume = () => {
    const link = document.createElement("a")
    link.href = "resume.pdf" // Adjust the path if your PDF is elsewhere
    link.download = "Saara - Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const skills = {
    "Business & Management": [
      "Vendor Relationship Management",
      "Stakeholder Management",
      "Cross-Functional Collaboration",
      "Business Analysis",
      "Team Management",
      "Process Optimization",
    ],
    "Data & Analytics": [
      "Data-Driven Decision Making",
      "Deep Dive Analysis",
      "KPI Tracking",
      "Advanced Excel",
      "AWS QuickSight",
      "Tableau",
    ],
    "Technical Tools": ["Alteryx", "SQL", "Python Scripting", "Lean Six Sigma", "Kaizen", "Process Automation"],
  }

  const projects = [
    {
      title: "RBS Deal Inflow Optimization",
      period: "April 2025 [Ongoing]",
      description: "Improved deal inflow from 10% to 85% through process alignment and automation",
      impact: "13 headcount savings",
      technologies: ["Process Automation", "Data Analysis", "Stakeholder Management"],
    },
    {
      title: "Ireland Marketplace Launch",
      period: "Dec 2024 – Mar 2025",
      description: "Executed 200+ promotional deals across 70K+ ASINs during marketplace launch",
      impact: "27% improvement in deal accuracy",
      technologies: ["Deal Management", "Cross-functional Collaboration", "Process Optimization"],
    },
    {
      title: "Finance Validation Automation",
      period: "Apr 2024 – Jun 2024",
      description: "Automated end-to-end finance validation for 69.7K ASINs using Python scripting",
      impact: "0.15 HC savings, 100% data accuracy",
      technologies: ["Python", "Process Automation", "Data Validation"],
    },
    {
      title: "Deal Monitoring Automation",
      period: "Jul 2023 – Sep 2023",
      description: "Automated competitor pricing comparison for Amazon deals vs Walmart, Mercado Libre",
      impact: "0.6 HC savings annually",
      technologies: ["Automation", "Competitive Analysis", "Process Improvement"],
    },
  ]

  const experience = [
    {
      company: "Amazon - Retail Business Service",
      role: "CATALOG LEAD",
      period: "January 2024 - Present",
      location: "Bengaluru, India",
      achievements: [
        "Led team performance initiatives, improving headcount efficiency from 2.88 to 4.12",
        "Conducted weekly/monthly business reviews for AU/ZA Retail",
        "Managed 20+ L2 associates with manager rating of 4.8/5",
        "Improved team productivity from 99% to 112% through coaching",
      ],
    },
    {
      company: "Amazon - Retail Business Service (Flex org)",
      role: "CATALOG ASSOCIATE",
      period: "November 2022 - December 2023",
      location: "Bengaluru, India",
      achievements: [
        "Served as interim lead managing scorecards and performance reviews",
        "Automated data workflows using Excel and built visualizations in AWS QuickSight",
        "Led High Visibility Events coordination as Subject Matter Expert",
        "Supported team of 50+ associates as Performance Improvement Coach",
      ],
    },
    {
      company: "Amazon Development Centre (India) Private Limited",
      role: "VIRTUAL CUSTOMER SERVICE - ASSOCIATE",
      period: "October 2021 - October 2022",
      location: "Bengaluru, India",
      achievements: [
        "Processed customer orders and coordinated with vendors for timely delivery",
        "Resolved return, refund, and replacement requests based on policies",
        "Analyzed customer feedback to improve service quality and documentation",
      ],
    },
  ]

  const certifications = [
    "Google Data Analytics",
    "Google Business Intelligence",
    "Google Project Management",
    "Macquarie University Excel",
    "ICLeaF SQL Course & Project",
    "Amazon Learn Tableau",
  ]

  const achievements = [
    "Ranked #1 in productivity (177% vs. team avg. 109.9%) with 99.8% quality",
    "Received 'First Among Equals' award for top performance",
    "4 Rewards and Recognitions in 2025 (YTD)",
    "8 Rewards and Recognitions in 2024",
    "Received 'Helping Hand' award for outstanding team support",
    "Awarded 'Extra Mile' for driving innovative solutions",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 transition-colors duration-500">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-40 border-b border-slate-200 dark:border-slate-700 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-slate-900 dark:text-white transition-colors">Saara Khan</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              {["home", "about", "experience", "projects", "skills", "achievements"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize text-sm font-medium transition-all duration-200 hover:scale-105 ${
                    activeSection === section
                      ? "text-rose-600 dark:text-rose-400"
                      : "text-slate-600 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
              <div className="md:hidden py-4 border-t border-slate-200 dark:border-slate-700">
                {["home", "about", "experience", "projects", "skills", "achievements"].map((section) => (
                  <button
                    key={section}
                    onClick={() => {
                      scrollToSection(section)
                      setIsMobileMenuOpen(false)
                    }}
                    className="block w-full text-left py-2 capitalize text-slate-600 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                  >
                    {section}
                  </button>
                ))}
              </div>
            )}

            <Button
              size="sm"
              onClick={downloadResume}
              className="bg-rose-600 hover:bg-rose-700 dark:bg-rose-500 dark:hover:bg-rose-600 transition-all duration-200 hover:scale-105"
            >
              <Download className="mr-2 h-4 w-4" />
              Resume
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
            <AnimatedSection animation="slideRight" className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
                  Saara Khan
                </h1>
                <div className="text-xl lg:text-2xl text-rose-600 dark:text-rose-400 font-medium">
                  Catalog Lead · Retail Expert
                </div>
                <div className="flex items-center text-slate-600 dark:text-slate-300 space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">Marathahalli, Bengaluru, Karnataka</span>
                </div>
              </div>

              <blockquote className="text-lg italic text-slate-700 dark:text-slate-300 border-l-4 border-rose-500 pl-4 py-2">
                "Be the change that you want to see in the world."
              </blockquote>

              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Detail-oriented professional with 3+ years of experience in team management and product support.
                Specialized in simplifying complex workflows into efficient, user-friendly systems.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-rose-600 hover:bg-rose-700 dark:bg-rose-500 dark:hover:bg-rose-600 transition-all duration-200 hover:scale-105"
                  onClick={() => scrollToSection("experience")}
                >
                  View Experience
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-rose-200 dark:border-rose-800 hover:bg-rose-50 dark:hover:bg-rose-950 transition-all duration-200 hover:scale-105 bg-transparent"
                  onClick={() => scrollToSection("projects")}
                >
                  See Projects
                </Button>
              </div>

              {/* Contact Info */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="mailto:itsaarakhan@gmail.com"
                  className="flex items-center space-x-2 text-slate-600 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">itsaarakhan@gmail.com</span>
                </Link>
                <Link
                  href="tel:+918299063804"
                  className="flex items-center space-x-2 text-slate-600 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">(+91) 8299-063-804</span>
                </Link>
                <Link
                  href="https://linkedin.com/in/khansaara"
                  className="flex items-center space-x-2 text-slate-600 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                >
                  <LinkedIn className="h-4 w-4" />
                  <span className="text-sm">khansaara</span>
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideLeft" delay={200} className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-500 rounded-2xl transform rotate-6 opacity-20"></div>
                <div className="relative bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-2xl border border-slate-200 dark:border-slate-700">
                  <Image
                    src="placeholder.jpg?height=300&width=250"
                    alt="Saara Khan"
                    width={250}
                    height={300}
                    className="rounded-xl"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-900/50 transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Driven by curiosity, I enjoy refining processes, solving challenging problems, and continuously learning
                new tools and technologies to improve outcomes.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection animation="slideUp" delay={100}>
              <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <Users className="h-12 w-12 text-rose-600 dark:text-rose-400 mx-auto mb-4" />
                  <CardTitle className="text-slate-900 dark:text-white">Team Leadership</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300">
                    Led teams of 20+ associates with a 4.8/5 manager rating, improving productivity by 13%
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="slideUp" delay={200}>
              <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <BarChart3 className="h-12 w-12 text-rose-600 dark:text-rose-400 mx-auto mb-4" />
                  <CardTitle className="text-slate-900 dark:text-white">Process Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300">
                    Streamlined workflows and automated processes, achieving significant efficiency gains
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="slideUp" delay={300}>
              <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <Target className="h-12 w-12 text-rose-600 dark:text-rose-400 mx-auto mb-4" />
                  <CardTitle className="text-slate-900 dark:text-white">Results Driven</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300">
                    Consistently ranked #1 in productivity with 177% performance vs team average
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Professional Experience</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">Career progression at Amazon</p>
            </div>
          </AnimatedSection>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <AnimatedSection key={index} animation="slideUp" delay={index * 100}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                      <div className="space-y-2">
                        <CardTitle className="text-xl text-slate-900 dark:text-white">{exp.role}</CardTitle>
                        <CardDescription className="text-lg font-medium text-rose-600 dark:text-rose-400">
                          {exp.company}
                        </CardDescription>
                        <div className="flex items-center text-slate-600 dark:text-slate-300 space-x-4">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm">{exp.period}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm">{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start space-x-2 text-slate-600 dark:text-slate-300">
                          <ChevronRight className="h-4 w-4 text-rose-500 mt-0.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-900/50 transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Key Projects</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Impactful initiatives driving efficiency and automation
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <AnimatedSection key={index} animation="slideUp" delay={index * 100}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group bg-white/80 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-lg text-slate-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                        {project.title}
                      </CardTitle>
                      <Badge
                        variant="secondary"
                        className="text-xs bg-rose-100 dark:bg-rose-900 text-rose-700 dark:text-rose-300"
                      >
                        {project.period}
                      </Badge>
                    </div>
                    <CardDescription className="text-slate-600 dark:text-slate-300">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-4 w-4 text-rose-600 dark:text-rose-400" />
                      <span className="font-semibold text-slate-900 dark:text-white">{project.impact}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs border-rose-200 dark:border-rose-800">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Skills & Expertise</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">Technical and business competencies</p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <AnimatedSection key={category} animation="slideUp" delay={index * 100}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-lg text-slate-900 dark:text-white flex items-center space-x-2">
                      {index === 0 && <Users className="h-5 w-5 text-rose-600 dark:text-rose-400" />}
                      {index === 1 && <BarChart3 className="h-5 w-5 text-rose-600 dark:text-rose-400" />}
                      {index === 2 && <Database className="h-5 w-5 text-rose-600 dark:text-rose-400" />}
                      <span>{category}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {skillList.map((skill) => (
                        <div key={skill} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                          <span className="text-sm text-slate-600 dark:text-slate-300">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Achievements */}
      <section
        id="achievements"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-900/50 transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Certifications */}
            <AnimatedSection animation="slideRight">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center space-x-2">
                  <Award className="h-6 w-6 text-rose-600 dark:text-rose-400" />
                  <span>Certifications</span>
                </h3>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all duration-200"
                    >
                      <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                      <span className="text-slate-700 dark:text-slate-300">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Achievements */}
            <AnimatedSection animation="slideLeft">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center space-x-2">
                  <Star className="h-6 w-6 text-rose-600 dark:text-rose-400" />
                  <span>Key Achievements</span>
                </h3>
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-3 rounded-lg bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all duration-200"
                    >
                      <Zap className="h-4 w-4 text-rose-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300 text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900 dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-6xl mx-auto text-center">
          <AnimatedSection animation="fade">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Saara Khan</h3>
              <p className="text-slate-300">Catalog Lead · Retail Expert</p>
              <div className="flex justify-center space-x-6">
                <Link
                  href="mailto:itsaarakhan@gmail.com"
                  className="text-slate-400 hover:text-rose-400 transition-colors"
                >
                  <Mail className="h-6 w-6" />
                </Link>
                <Link
                  href="https://linkedin.com/in/khansaara"
                  className="text-slate-400 hover:text-rose-400 transition-colors"
                >
                  <LinkedIn className="h-6 w-6" />
                </Link>
                <Link
                  href="https://github.com/khansaara"
                  className="text-slate-400 hover:text-rose-400 transition-colors"
                >
                  <Github className="h-6 w-6" />
                </Link>
              </div>
              <Separator className="my-6 bg-slate-700" />
              <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Saara Khan. All rights reserved.</p>
            </div>
          </AnimatedSection>
        </div>
      </footer>

      {/* Theme Toggle */}
      <ThemeToggle />
    </div>
  )
}
