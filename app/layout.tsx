import type { Metadata } from "next"
import { Work_Sans } from "next/font/google"
import "./globals.css"

const work_sans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
})

export const metadata: Metadata = {
  title: "FAQ Accordion | Adam Turner",
  description: "An FAQ Accordion component",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={work_sans.className}>{children}</body>
    </html>
  )
}
