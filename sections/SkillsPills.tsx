'use client'

import { SectionHeading } from '@/components'
import Image from 'next/image'

const skills = [
    { name: 'JavaScript', logo: '/images/logos/javascript.png' },
    { name: 'Python', logo: '/images/logos/python.png' },
    { name: 'TypeScript', logo: '/images/logos/typescript.png' },
    { name: 'React', logo: '/images/logos/react.png' },
    { name: 'Flask', logo: '/images/logos/flask_logo_negate.png' },
    { name: 'Postgres', logo: '/images/logos/postgres.png' },
    { name: 'Express', logo: '/images/logos/express.png'  },
    { name: 'Scss', logo: '/images/logos/sass.png' },
    { name: 'p5', logo: '/images/logos/p5.png' },
    { name: 'Mongoose', logo: '/images/logos/mongoose.png' },
    { name: 'Next', logo: '/images/logos/next-white.png' },
    { name: 'Git', logo: '/images/logos/git.png' },
    { name: 'Tailwind', logo: '/images/logos/tailwind.png' },
    { name: 'cables.gl', logo: '/images/logos/cables.png' },
    { name: 'TouchDesigner', logo: '/images/logos/touchdesigner.png' },
]

type Props = {}

const SkillsPills = (props: Props) => {
    return (
        <section className='q-contain mt-24'>
            <SectionHeading title='Skills / Tools' />

            <div className='mt-8 flex flex-wrap gap-2'>
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className='flex items-center bg-accent/10 rounded-lg p-2 grow max-w-[200px]'
                    >
                        {skill.logo && (
                            <Image
                                src={skill.logo}
                                width={30}
                                height={30}
                                alt='logo'
                                className='object-cover w-7 h-7'
                            />
                        )}
                        <span className='px-3 text-primary-text'>
                            {skill.name}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default SkillsPills
