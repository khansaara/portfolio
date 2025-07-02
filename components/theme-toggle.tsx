"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        className="fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full shadow-lg border-2 bg-background/80 backdrop-blur-sm"
      >
        <Sun className="h-5 w-5" />
      </Button>
    )
  }

  const isDark = resolvedTheme === "dark"

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full shadow-lg border-2 bg-background/80 backdrop-blur-sm hover:scale-110 transition-all duration-300 hover:shadow-xl"
    >
      {isDark ? (
        <Sun className="h-5 w-5 transition-all duration-500" />
      ) : (
        <Moon className="h-5 w-5 transition-all duration-500" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
