'use client'

import { SectionHeading } from '@/components'
import { TagCloud } from 'react-tagcloud'

type Props = {}

const data = [
    { value: 'jQuery', count: 25 },
    { value: 'MongoDB', count: 18 },
    { value: 'JavaScript', count: 38 },
    { value: 'React', count: 30 },
    { value: 'Nodejs', count: 28 },
    { value: 'Express.js', count: 25 },
    { value: 'HTML5', count: 33 },
    { value: 'CSS3', count: 20 },
    { value: 'Webpack', count: 22 },
    { value: 'Babel.js', count: 7 },
    { value: 'ECMAScript', count: 25 },
    { value: 'Jest', count: 15 },
    { value: 'Mocha', count: 17 },
    { value: 'React Native', count: 27 },
    { value: 'Angular.js', count: 30 },
    { value: 'TypeScript', count: 15 },
    { value: 'Flow', count: 50 },
    { value: 'NPM', count: 11 },
]

const options = {
    luminosity: 'bright',
    hue: 'blue',
    // hue: '#64ffda',
}

const customRenderer = (tag: any, size: any, color: any) => (
    <span
        key={tag.value}
        style={{
            // animation: 'blinker 3s linear infinite',
            animationDelay: `${Math.random() * 2}s`,
            fontSize: `${size}px`,
            border: `2px solid ${color}`,
			borderRadius: '5px',
            margin: '3px',
            padding: '3px 10px',
            display: 'inline-block',
            color: `${color}`,
        }}
    >
        {tag.value}
    </span>
)

const Skills = (props: Props) => {
    return (
        <section id='skills' className='q-contain mt-24'>
            <SectionHeading title='Skills' />
            <TagCloud
                minSize={12}
                maxSize={50}
                tags={data}
                className='myTagCloud mt-8'
                colorOptions={options}
				renderer={customRenderer}
                // onClick={(tag) => alert(`'${tag.value}' was selected!`)}
            />
        </section>
    )
}

export default Skills
