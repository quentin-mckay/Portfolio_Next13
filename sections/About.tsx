'use client'

import Image from 'next/image'

import { SectionHeading } from '@/components'

const About = () => (
    <section id='about' className='q-contain scroll-mt-24'>
        <div className='mx-auto'>
            <SectionHeading title='About Me' />
            <div className='max-w-3xl mx-auto grid md:grid-cols-[1fr_auto] gap-4 mt-16'>
                <div className='text-lg text-primary-text/80'>
                    <p className=''>
                        Hi there, I'm Quentin, a passionate full-stack web
                        developer with a love for building elegant and efficient
                        websites and applications. I specialize in developing
                        full-stack solutions using a variety of technologies.
                    </p>

                    <p className='mt-6'>
                        I'm a self-starter who's always eager to learn and grow
                        as a developer. I'm constantly challenging myself to
                        improve my skills and expand my knowledge, whether
                        through personal projects, online courses, or
                        collaborating with others in the developer community.
                    </p>

                    <p className='mt-6'>
                        When I'm not coding, you can find me playing
                        guitar/piano, or reading about the latest web
                        development trends. Let's connect and create something
                        amazing together!
                    </p>

                    <button className='px-4 py-2 mt-6 transition-colors border rounded text-accent border-accent hover:bg-accent/10'>
                        View Resume
                    </button>
                </div>

                {/* <div className="relative order-first md:order-last group"> */}
                <div className='relative order-first md:order-last group'>
                    <div className='overflow-hidden'>
                        <Image
                            src='/images/profile.jpg'
                            alt='profile picture'
                            width={250}
                            height={250}
                            className='mx-auto transition rounded-md'
                            // className='mx-auto transition rounded-md group-hover:scale-105 '
                        />
                        {/* <div className="absolute inset-0 bg-accent bg-opacity-20"></div> */}
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default About
