'use client'

import Link from 'next/link'
import { useState } from 'react'

import { FaGithub, FaCodepen, FaYoutube, FaLinkedin } from 'react-icons/fa'

import {
    SunIcon,
    MoonIcon,
    Bars3Icon,
    XMarkIcon,
    Bars3BottomRightIcon,
} from '@heroicons/react/24/solid'

type Props = {}

import { motion } from 'framer-motion'
import { myVariants, navContainer, navItem } from '@/utils/motion'

const SocialLinks = () => (
    <div className='flex justify-center gap-6 sm:hidden'>
        <a
            href='https://www.linkedin.com/in/quentin-mckay-76b693116/'
            target='_blank'
            className='text-primary-text transition cursor:pointer hover:text-accent hover:scale-125'
        >
            <FaLinkedin className='' size={25} />
        </a>
        <a
            href='https://github.com/quentin-mckay'
            target='_blank'
            className='text-primary-text transition cursor:pointer hover:text-accent hover:scale-125'
        >
            <FaGithub className='' size={25} />
        </a>
        <a
            href='https://www.youtube.com/@quentinmckay8658/videos'
            target='_blank'
            className='text-primary-text transition cursor:pointer hover:text-accent hover:scale-125'
        >
            <FaYoutube className='' size={25} />
        </a>
    </div>
)

// NAV ITEMS

export default function HeaderQ({}: Props) {
    const [theme, setTheme] = useState('light')

    const [menuOpen, setMenuOpen] = useState(false)

    const navItems = ['About', 'Projects', 'Contact']

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    return (
        // <motion.header
        //     className='sticky top-0 z-20 p-4 bg-gray-200'
        //     initial={{ opacity: 0 }}
        //     animate={{ opacity: 1 }}
        // 	transition={{ duration: 5}}
        // >
        <motion.header
            // className='sticky top-0 z-20 p-4 md:px-6 border'
            className='fixed w-full top-0 z-20 p-4 md:px-6 backdrop-blur-xl'
            variants={myVariants}
            initial='hidden'
            animate='show'
        >
            <div className='items-center justify-between px-2 py-1 md:flex'>
                <div className='flex items-center justify-between'>
                    {/* LOGO */}
                    <a href='#home' className='text-3xl font-light text-accent'>
                        <span className='opacity-60'>{'<'}</span>
                        <span className='font-bold'>Q</span>
                        <span className='opacity-60'>{' />'}</span>
                    </a>

                    {/* Mobile Menu button hidden on md and above */}
                    <button
                        className='text-accent md:hidden'
                        onClick={() => setMenuOpen((menuOpen) => !menuOpen)}
                    >
                        {menuOpen ? (
                            <XMarkIcon className='w-8 h-8' />
                        ) : (
                            <Bars3BottomRightIcon className='w-8 h-8' />
                        )}
                    </button>
                </div>

                <motion.div
                    className={`flex flex-col gap-2 mt-4 text-primary-text font-mono text-center ${
                        menuOpen ? '' : 'hidden'
                    } md:flex md:flex-row md:mt-0`}
                    variants={navContainer}
                    initial='hidden'
                    animate='show'
                >
                    {navItems.map((item, index) => (
                        <motion.span variants={navItem} key={index}>
                            <a
                                href={`#${item.toLowerCase()}`}
                                onClick={() => setMenuOpen(false)}
                                // as={`#${item.toLowerCase()}`}
                                // scroll={false}
                                className='inline-block w-full p-8 text-xl rounded bg-emerald-200/5  hover:text-accent hover:bg-emerald-200/10 md:text-base md:px-2 md:py-1 md:bg-emerald-200/0 transition-colors '
                            >
                                <span className='text-accent'>
                                    0{index + 1}.
                                </span>{' '}
                                {item}
                            </a>
                        </motion.span>
                    ))}
                    <div className='flex justify-center gap-12 p-8 rounded bg-emerald-200/5 hover:bg-emerald-200/10 md:hidden'>
                        <a
                            href='https://www.linkedin.com/in/quentin-mckay-76b693116/'
                            target='_blank'
                            className='text-primary-text transition cursor:pointer hover:text-accent hover:scale-125'
                        >
                            <FaLinkedin className='' size={28} />
                        </a>
                        <a
                            href='https://github.com/quentin-mckay'
                            target='_blank'
                            className='text-primary-text transition cursor:pointer hover:text-accent hover:scale-125'
                        >
                            <FaGithub className='' size={28} />
                        </a>
                        <a
                            href='https://www.youtube.com/@quentinmckay8658/videos'
                            target='_blank'
                            className='text-primary-text transition cursor:pointer hover:text-accent hover:scale-125'
                        >
                            <FaYoutube className='' size={28} />
                        </a>
                    </div>
                </motion.div>

            </div>
        </motion.header>
    )
}
