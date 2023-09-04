import './globals.css'
import { Assistant } from 'next/font/google'

import Navbar from '@/components/shared/Navbar'
import Foot from '@/components/shared/Foot'

const assistant = Assistant({
  subsets: ['hebrew', 'latin'],
  weight: ['200', '300', '500', '700', '400', '800', '600']
})

export const metadata = {
  title: 'FaceYossef',
  description: 'binyamin class',
}

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir='rtl'>
      <body className={`${assistant.className} `}>
        <Navbar />
        <main >
          {children}
        </main>
        <Foot />
      </body>
    </html>
  )
}
