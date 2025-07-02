import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Saara Khan - Business Analyst Portfolio",
  description: "Catalog Lead & Retail Expert with 3+ years of experience in team management and process optimization",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon.png" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
          storageKey="saara-portfolio-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
