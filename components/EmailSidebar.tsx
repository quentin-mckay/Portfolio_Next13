'use client'

import { motion } from 'framer-motion'
import { sidebar } from '@/utils/motion'

type Props = {}

const EmailSidebar = (props: Props) => {
    return (
        <motion.div
            variants={sidebar}
            initial='hidden'
            animate='show'
            className='hidden fixed right-10 bottom-0 sm:flex items-center gap-6 q-writing-vertical'
        >
            <a
                href='mailto:quentinmckay1@gmail.com'
                className='text-primary-text transition tracking-widest cursor:pointer hover:text-accent hover:-translate-y-2'
            >
                quentinmckay1@gmail.com
            </a>

            <div className='relative h-24'>
                <div className='absolute w-[1px] h-full bg-white/40 left-1/2'></div>
            </div>
        </motion.div>
    )
}

export default EmailSidebar
