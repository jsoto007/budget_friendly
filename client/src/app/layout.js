import './globals.css'
import { Inter } from 'next/font/google'
import { UserContextProvider } from './context/UserContextProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Brudget Frindly',
  description: 'App to create good financial habits',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserContextProvider>
      <body className={inter.className}>{children}</body>
      </UserContextProvider>
    </html>
  )
}
