import { Prompt } from 'next/font/google'
import 'material-icons/iconfont/material-icons.css'
import './globals.css'

const prompt = Prompt({
  preload: true,
  weight: ['400', '500', '700'],
  subsets: ['latin', 'thai'],
  variable: '--font-prompt',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${prompt.className} min-h-screen text-secondary`}>
        {children}
      </body>
    </html>
  )
}
