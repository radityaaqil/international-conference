import '../../styles/globals.css'
import { Inter } from 'next/font/google'
import { Providers } from "../../styles/providers";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'International Conference',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
