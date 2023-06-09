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
import { headerVariants, navContainer, navItem } from '@/utils/motion'
// import { skillContainer, skillItem } from '@/utils/motion'

import { useMedia } from 'react-use'

const SocialLinks = () => (
    <div className='flex justify-center gap-6 sm:hidden'>
        <a
            href='https://www.linkedin.com/in/quentinmckaydev/'
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

    const isMobile = useMedia('(max-width: 768px)')

    // const navItems = ['About', 'Projects', 'Contact']

    const getNavLinkAnimation = () => {
        if (isMobile) {
            if (menuOpen) {
                return 'showMobile'
            } else {
                return 'hidden'
            }
        } else {
            if (menuOpen) {
                return 'hidden'
            } else {
                return 'show'
            }
        }
    }

    // const toggleTheme = () => {
    //     if (theme === 'light') {
    //         setTheme('dark')
    //     } else {
    //         setTheme('light')
    //     }
    // }

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
            variants={headerVariants}
            initial='hidden'
            animate='show'
        >
            
            <nav className='items-center justify-between px-2 py-1 md:flex'>
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
                    className={`flex flex-col gap-4 mt-4  text-sm text-primary-text font-mono text-center items-stretch md:items-center ${
                        menuOpen ? '' : 'hidden'
                    } md:flex md:flex-row md:mt-0`}
                    variants={navContainer}
                    initial='hidden'
                    // animate={'show'}
                    animate={getNavLinkAnimation()}
                    exit={{opacity: 1, y: 0}}
                >
                    <motion.span variants={navItem}>
                        <a
                            href='#about'
                            onClick={() => setMenuOpen(false)}
                            // as={`#${item.toLowerCase()}`}
                            // scroll={false}
                            className='inline-block w-full p-8 text-xl rounded bg-emerald-200/5  hover:text-accent hover:bg-emerald-200/10 md:text-base md:px-2 md:py-1 md:bg-emerald-200/0 transition-colors '
                        >
                            <span className='text-accent'>01.</span> About
                        </a>
                    </motion.span>
                    <motion.span variants={navItem}>
                        <a
                            href='#projects'
                            onClick={() => setMenuOpen(false)}
                            // as={`#${item.toLowerCase()}`}
                            // scroll={false}
                            className='inline-block w-full p-8 text-xl rounded bg-emerald-200/5  hover:text-accent hover:bg-emerald-200/10 md:text-base md:px-2 md:py-1 md:bg-emerald-200/0 transition-colors '
                        >
                            <span className='text-accent'>02.</span> Projects
                        </a>
                    </motion.span>
                    <motion.span variants={navItem}>
                        <a
                            href='#contact'
                            onClick={() => setMenuOpen(false)}
                            // as={`#${item.toLowerCase()}`}
                            // scroll={false}
                            className='inline-block w-full p-8 text-xl rounded bg-emerald-200/5  hover:text-accent hover:bg-emerald-200/10 md:text-base md:px-2 md:py-1 md:bg-emerald-200/0 transition-colors '
                        >
                            <span className='text-accent'>03.</span> Contact
                        </a>
                    </motion.span>

                    <motion.div variants={navItem} className='flex justify-center gap-12 p-8 rounded bg-emerald-200/5 hover:bg-emerald-200/10 md:hidden'>
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
                    </motion.div>

                    {/* RESUME */}
                    <motion.span variants={navItem}>
                        <a
                            href='/Quentin_McKay_Resume.pdf'
                            target='_blank'
                            className='inline-block md:px-4 md:py-2 transition-colors cursor-pointer rounded text-accent border border-accent hover:bg-accent/10 md:w-auto w-full py-6 text-xl md:text-base'
                        >
                            Resume
                        </a>
                    </motion.span>
                </motion.div>



            </nav>
                {/* <motion.div
                    variants={skillContainer}
                    // initial='hidden'
                    animate={menuOpen ? 'show' : 'hidden'}
                    className='hidden text-white text-7xl bg-pink-500'
                >
                    <motion.div variants={skillItem}>One</motion.div>
                    <motion.div variants={skillItem}>Two</motion.div>
                    <motion.div variants={skillItem}>Three</motion.div>
                </motion.div> */}
        </motion.header>
    )
}
