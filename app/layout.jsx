import './globals.css'
import { Inter } from 'next/font/google'
import gh from '/public/iam a teapot.jpg';
const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <head>
        
        <meta name="description" content="gh" />

        <meta property="og:image" content={gh} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="icon" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        <title>ebrahim-ramadan.portfolio</title> 
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
