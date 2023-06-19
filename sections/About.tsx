'use client'

import Image from 'next/image'

import { SectionHeading } from '@/components'

import { motion } from 'framer-motion'
import { aboutMe } from '@/utils/motion'

const About = () => (
    <section id='about' className='q-contain scroll-mt-24'>
        <div className='mx-auto'>
            <SectionHeading title='About Me' />
            <motion.div
                className='max-w-3xl mx-auto grid md:grid-cols-[1fr_auto] gap-6 mt-16 md:gap-16'
                variants={aboutMe}
                initial='hidden'
                whileInView='show'
                // will remain in the whileInView state. half of object needs to be in view to trigger
                viewport={{ once: true, amount: 0.5 }}
            >
                <div className='text-lg text-primary-text/80'>
                    <p className='mt-8 sm:mt-0'>
                        A full-stack web developer with a passion for building
                        innovative, efficient, and engaging web applications.
                    </p>

                    <p className='mt-6'>
                        Self-motivated and always eager to learn and grow as a
                        developer, I'm constantly challenging myself to improve
                        my skills and expand my knowledge, whether through
                        personal projects, online courses, or collaborating with
                        others in the developer community.
                    </p>

                    <p className='mt-6'>
                        When I'm not coding, you'll find me having deep
                        conversations with my{' '}
                        <a
                            href='https://www.youtube.com/watch?v=WG906HaSlh0&t=49s&ab_channel=QuentinMcKay'
                            target='_blank'
                            className='about_hobby'
                        >
                            4 cats
                        </a>{' '} (currenty 9 actually. don't judge. we foster)
                        &#128571;, learning Zelda themes on {' '}
                        <a
                            href='https://www.youtube.com/watch?v=P1uHrGL9-Gs&ab_channel=QuentinMcKay'
                            target='_blank'
                            className='about_hobby'
                        >
                            piano 
                        </a>
                        &#127929; 
                        and Disney songs on {' '}
                        <a
                            href='https://www.youtube.com/watch?v=UQEdpba02IM&ab_channel=QuentinMcKay'
                            target='_blank'
                            className='about_hobby'
                        >
                            guitar
                        </a>{' '}
                        &#127928;, or enjoying long walks on the beach at sunset ( just kidding &#128521;). 
                    </p>

                    <p className="mt-6">Let's connect and build something amazing
                        together!</p>

                    {/* <button className='px-4 py-2 mt-6 transition-colors border rounded text-accent border-accent hover:bg-accent/10'>
                        View Resume
                    </button> */}
                </div>

                {/* <div className="relative order-first md:order-last group"> */}
                <div className='elative flex items-center justify-center order-first md:order-last group mb-6 md:mb-0'>
                    <div className='overflow-hidden'>
                        <Image
                            src='/images/profile-blur.png'
                            alt='profile picture'
                            width={250}
                            height={250}
                            className='mx-auto transition rounded-md'
                            // className='mx-auto transition rounded-md group-hover:scale-105 '
                        />
                        {/* <div className="absolute inset-0 bg-accent bg-opacity-20"></div> */}
                    </div>
                </div>
            </motion.div>
        </div>
    </section>
)

export default About
