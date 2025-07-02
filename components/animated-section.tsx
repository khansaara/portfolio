"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animation?: "fade" | "slideUp" | "slideLeft" | "slideRight"
  delay?: number
}

export function AnimatedSection({ children, className = "", animation = "fade", delay = 0 }: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const getAnimationClasses = () => {
    const base = "transition-all duration-700 ease-out"

    if (!isVisible) {
      switch (animation) {
        case "slideUp":
          return `${base} opacity-0 translate-y-8`
        case "slideLeft":
          return `${base} opacity-0 translate-x-8`
        case "slideRight":
          return `${base} opacity-0 -translate-x-8`
        default:
          return `${base} opacity-0`
      }
    }

    return `${base} opacity-100 translate-x-0 translate-y-0`
  }

  return (
    <div ref={ref} className={`${getAnimationClasses()} ${className}`}>
      {children}
    </div>
  )
}
