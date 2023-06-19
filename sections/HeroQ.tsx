'use client'

// import Image from 'next/image'

// import { BackgroundCircles } from '@/components'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

import { motion } from 'framer-motion'
import { heroContainer, heroItem } from '@/utils/motion'

type Props = {}

const Hero = (props: Props) => {
    // const [text, count] = useTypewriter({
    //     words: [
    //         "build things for the web.",
    //         'love to learn',
    //         'drink too much coffee',
    //     ],
    //     loop: true,
    //     delaySpeed: 2000,
    // })

    // const [text, count] = useTypewriter({
    //     words: [
    //         "design",
    //         "build"
    //     ],
    //     loop: true,
    //     delaySpeed: 2000,
    // })

    return (
        // <section className='grid h-screen overflow-hidden place-items-center snap-center'>
        <motion.section
            id='home'
            className='flex flex-col justify-center h-screen q-contain'
            variants={heroContainer}
            initial='hidden'
            animate='show'
        >
            <motion.div
                variants={heroItem}
                className='font-mono text-lg text-accent/80'
            >
                Hi, my name is
            </motion.div>
            <motion.h2
                variants={heroItem}
                className='mt-3 text-5xl font-semibold text-primary-text sm:text-5xl md:text-7xl'
            >
                Quentin McKay.
            </motion.h2>
            <motion.h3
                variants={heroItem}
                className='mt-2 text-4xl font-semibold text-primary-text/50 sm:text-4xl md:text-6xl'
            >
                I build things for the web.
            </motion.h3>
            <motion.div variants={heroItem} className='mt-8 text-lg text-primary-text/60'>
                I'm a <span className='text-accent/80'>full-stack web developer</span> and <span className='text-accent/80'>software engineer</span> based in Sydney.
            </motion.div>
        </motion.section>
    )
}

export default Hero


