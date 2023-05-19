'use client'

import { useState } from 'react'
// import { useTheme } from 'next-themes'
// import { Link } from 'react-scroll'
import Link from 'next/link'
import {
    SunIcon,
    MoonIcon,
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/solid'

interface NavItem {
    name: string
    page: string
}

const NAV_ITEMS: NavItem[] = [
    {
        name: 'Home',
        page: 'home',
    },
    {
        name: 'About',
        page: 'about',
    },
    {
        name: 'Projects',
        page: 'projects',
    },
]

const Navbar = () => {
    const [theme, setTheme] = useState('light')

    const [menuOpen, setMenuOpen] = useState(false)

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    return (
        <header className='sticky top-0 z-50 px-4 shadow backdrop-blur-md bg-opacity-60'>

            <div className='justify-between md:flex md:items-center'>

                <div className='flex items-center justify-between py-3'>

                    <a className='text-2xl font-bold md:py-5 md:block'>
                        Quentin
                    </a>
                    <button
                        className='md:hidden'
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? (
                            <XMarkIcon className='w-8 h-8' />
                        ) : (
                            <Bars3Icon className='w-8 h-8' />
                        )}
                    </button>
                </div>

                <div
                    className={`md:space-x-6 md:flex md:items-center ${
                        menuOpen ? '' : 'hidden'
                    }`}
                >
                    {NAV_ITEMS.map((item, index) => (
                        <Link
                            key={index}
                            href={`#${item.page}`}
                            onClick={() => setMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}

                    <button
                        onClick={toggleTheme}
                        className='bg-slate-100 p-2 rounded-xl'
                    >
                        {theme === 'dark' ? (
                            <SunIcon className='h-4 w-4' />
                        ) : (
                            <MoonIcon className='h-4 w-4' />
                        )}
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Navbar
