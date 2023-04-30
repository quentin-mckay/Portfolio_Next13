'use client'

import Image from 'next/image'

import { FiGithub } from 'react-icons/fi'
import { HiArrowTopRightOnSquare } from 'react-icons/hi2'

import { motion } from 'framer-motion'
import { projectCard } from '@/utils/motion'

type Props = {
    name: string
    description: string
    image: string
    tags: string[]
    githubURL: string
    demoURL: string
    flipped: boolean
}

const ProjectCard = (props: Props) => {
    const { name, description, image, githubURL, demoURL, tags } = props

    return (
        <motion.div
            className=' border border-gray-100/5 rounded-lg grid md:grid-cols-2 gap-4'
            variants={projectCard}
            initial='hidden'
            whileInView='show'
            // will remain in the whileInView state. half of object needs to be in view to trigger
            viewport={{ once: true, amount: 0.5}} 
        >
            {/* IMAGE */}
            <div className='grid place-items-center'>
                <img
                    src={image}
                    // width={200}
                    // height={200}
                    alt='project image'
                    className='rounded-lg max-h-72'
                />
            </div>

            <div className='p-4 flex flex-col justify-between gap-2'>
                {/* TITLE */}
                <h3 className='text-primary-text font-bold text-xl'>{name}</h3>

                {/* DESCRIPTION */}
                {/* <p className='text-primary-text bg-[#083344] p-5 rounded-lg w-[110%] self-end q-shadow'> */}
                <p className='text-primary-text bg-[#083344] px-4 py-3 rounded-lg'>
                    {description}
                </p>

                {/* TAGS */}
                <div className='flex flex-wrap items-center gap-x-4 text-primary-text'>
                    {tags.map((tag, index) => (
                        // <span className='relative ' key={index}>
                        // 	{tag}
                        // 	<span className='absolute w-[3px] h-[3px] bg-accent top-[42%] left-[-10px]'></span>
                        // </span>
                        <span className='flex items-center gap-1' key={index}>
                            <div className='w-[3px] h-[3px] bg-accent rounded-full'></div>
                            <span className='font-mono'>{tag}</span>
                        </span>
                    ))}
                </div>

                {/* LINK ICONS */}
                <div className='flex items-center gap-4'>
                    <a
                        href={githubURL}
                        target='_blank'
                        className='text-primary-text 
						transition cursor:pointer hover:text-accent hover:scale-125'
                    >
                        <FiGithub className='' size={25} />
                    </a>
                    <a
                        href={demoURL}
                        target='_blank'
                        className='text-primary-text 
						transition cursor:pointer hover:text-accent hover:scale-120'
                    >
                        <HiArrowTopRightOnSquare
                            className='text-primary-text -translate-y-[1px] transition hover:text-accent hover:scale-125'
                            size={28}
                        />
                    </a>
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectCard
