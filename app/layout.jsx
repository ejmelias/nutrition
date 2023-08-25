import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Nutritional Wellness',
    description: 'Exploring the Path to Nutritional Wellness',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main className="flex flex-col min-h-full items-center text-white ">
                    {children}
                </main>
            </body>
        </html>
    )
}
