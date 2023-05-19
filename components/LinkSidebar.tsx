'use client'

import { BsGithub } from 'react-icons/bs'
import { FaGithub, FaCodepen, FaYoutube, FaLinkedin } from 'react-icons/fa'

import { motion } from 'framer-motion'
import { sidebar } from '@/utils/motion'

type Props = {}

const LinkSidebar = (props: Props) => {
    return (
        <motion.div
            variants={sidebar}
            initial='hidden'
            animate='show'
            className='fixed bottom-0 flex-col items-center hidden gap-6 left-10 sm:flex'
        >
            <a
                href='https://www.linkedin.com/in/quentinmckaydev/'
                target='_blank'
                className='transition text-primary-text cursor:pointer hover:text-accent hover:scale-125'
            >
                <FaLinkedin className='' size={25} />
            </a>
            <a
                href='https://github.com/quentin-mckay'
                target='_blank'
                className='transition text-primary-text cursor:pointer hover:text-accent hover:scale-125'
            >
                <FaGithub className='' size={25} />
            </a>
            <a
                href='https://www.youtube.com/@quentinmckay8658'
                target='_blank'
                className='transition text-primary-text cursor:pointer hover:text-accent hover:scale-125'
            >
                <FaYoutube className='' size={25} />
            </a>
            <div className='relative h-24'>
                <div className='absolute w-[1px] h-full bg-white/40 left-1/2'></div>
            </div>
        </motion.div>
    )
}

export default LinkSidebar
