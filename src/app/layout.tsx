import type { Metadata } from 'next'
import localFont from 'next/font/local'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import './globals.css'
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] })



const myFont = localFont({ src: [
  {path: '../../public/fonts/Averta-Bold.woff',style: 'normal'},
  {path: '../../public/fonts/Averta-Regular.woff', style: 'normal'},
  {path: '../../public/fonts/Averta-Semibold.woff', style: 'normal'},
  ]
});

export const metadata: Metadata = {
  metadataBase: new URL('https://calendive.com'),
  title: {
    default: "Calendive",
    template: "%s - Calendive"
  },
  description: "Welcome to calendive you can start your daily schedules.",
  twitter:  {
    card: "summary_large_image"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        {children}
      </body>
    </html>
  )
}
