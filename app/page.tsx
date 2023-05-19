// 'use client'

import Image from 'next/image'

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import { HeaderQ, LinkSidebar, EmailSidebar } from '@/components'
import { HeroQ, About, SkillsPills, Projects, Contact, Footer } from '@/sections'
import { NextPage } from 'next'

const Home: NextPage = () => (
    // <div className='z-0 h-screen overflow-scroll text-white bg-bgcolor snap-y snap-mandatory'>
    <div className={`${inter.className} min-h-screen `}>
        <HeaderQ />

        <HeroQ />

        <About />

        <SkillsPills />

        <Projects />

        <Contact />

        <LinkSidebar />
        <EmailSidebar />

        <Footer />
    </div>
)

export default Home
