'use client'

import Image from 'next/image'

import { SectionHeading } from '@/components'

const About = () => (
    <section id='about' className='q-contain scroll-mt-24'>
        <div className='max-w-3xl mx-auto'>
            <SectionHeading title='About Me' />
            <div className='grid md:grid-cols-[1fr_auto] gap-4 mt-8'>
                <div className='text-lg text-primary-text/80'>
                    <p className=''>
                        Hi there, I'm Quentin, a passionate full-stack web
                        developer who loves to build elegant and efficient web
                        applications. I specialize in developing end-to-end
                        solutions using a variety of technologies.
                    </p>

                    <p className='mt-6'>
                        With 6 years of experience in web development, I've
                        honed my skills in creating responsive, intuitive, and
                        user-friendly interfaces that enhance the user
                        experience. My goal is to leverage my knowledge and
                        expertise to create innovative web solutions that solve
                        complex business problems.
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
