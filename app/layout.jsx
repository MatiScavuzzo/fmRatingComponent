import './globals.css'
import { Overpass } from 'next/font/google'

const overpass = Overpass({ subsets: ['latin'] })

export const metadata = {
  title: 'Rating Component - Frontend Mentor',
  description: 'HTML, CSS y JS - Rating Component',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={overpass.className}>{children}</body>
    </html>
  )
}
