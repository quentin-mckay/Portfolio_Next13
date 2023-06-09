import './globals.css'

export const metadata = {
    title: 'Quentin McKay',
    description: 'Quentin McKay portfolio',
}

import Script from 'next/script'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang='en' className='bg-primary-bg text-white scroll-smooth'>
            <body>{children}</body>

            {/* afterInteractive is the default strategy for Next's <Script> tag */}
            <Script
                async
                strategy='afterInteractive'
                src='https://www.googletagmanager.com/gtag/js?id=G-QGKSSLS9G4'
            />
            {/* <!-- Google tag (gtag.js) --> */}
            <Script strategy='afterInteractive' src='/analytics.js' />
        </html>
    )
}
