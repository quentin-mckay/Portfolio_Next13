import './globals.css'

export const metadata = {
    title: 'Quentin McKay',
    description: 'Quentin McKay portfolio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en' className='bg-primary-bg text-white scroll-smooth'>
            <body>{children}</body>
        </html>
    )
}
