'use client'

import { SectionHeading } from '@/components'
import ProjectCard from '@/components/ProjectCard'

import { projects } from '../constants/projects'
import { useState } from 'react'

type Props = {}

const Projects = (props: Props) => {

	const [showAllProjects, setShowAllProjects] = useState(false) // to hide Show All button
	const [projectsToShow, setProjectsToShow] = useState(projects.slice(0, 4)) // just show first 4 projects


	const handleShowAllProjects = () => {
		setProjectsToShow(projects) // show full array of projects
		setShowAllProjects(true) // to hide Show All button
	}
	
    return (
        <section id='projects' className='q-contain mt-24 scroll-mt-24'>
            <SectionHeading title='Projects' />

            <div className='mt-16 grid gap-24'>
                {projectsToShow.map((project, index) => (
                    <ProjectCard {...project} key={index} />
                ))}
            </div>

            <div className='text-center mt-12'>
                <button 
				onClick={handleShowAllProjects}
				className={`${showAllProjects ? 'hidden' : ''} text-accent border border-accent rounded px-6 py-3 hover:bg-accent/10 transition-colors`}>
                    Show More Projects
                </button>
            </div>
        </section>
    )
}

export default Projects
