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
            <motion.p
                variants={heroItem}
                className='font-mono text-lg text-accent'
            >
                Hi, my name is
            </motion.p>
            <motion.h2
                variants={heroItem}
                className='mt-3 text-5xl font-semibold text-primary-text sm:text-5xl md:text-7xl'
            >
                Quentin McKay.
            </motion.h2>
            <motion.h3
                variants={heroItem}
                className='mt-2 text-4xl font-semibold text-secondary-text sm:text-4xl md:text-6xl'
            >
                I build things for the web.
            </motion.h3>
            <motion.p variants={heroItem} className='mt-6 text-lg text-secondary-text'>
                I'm a full-stack web developer and software engineer based in Sydney.
            </motion.p>
        </motion.section>
    )
}

export default Hero


