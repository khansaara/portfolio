import nodemailer from 'nodemailer'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { firstName, lastName, email, subject, message } = body

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${subject}`,
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `,
    })

    return NextResponse.json({ message: "Thank you for your message! I'll get back to you soon." }, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ message: "Something went wrong. Please try again later." }, { status: 500 })
  }
}