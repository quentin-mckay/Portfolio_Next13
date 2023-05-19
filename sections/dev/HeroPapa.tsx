'use client'

import BackgroundCircles from '@/components/dev/BackgroundCircles'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

type Props = {}

const Hero = (props: Props) => {
    const [text, count] = useTypewriter({
        words: [
            "Hi, I'm Quentin",
            'Guy who loves to code',
            'Guy who loves coffee',
        ],
        loop: true,
        delaySpeed: 2000,
    })

    return (
        <section className='h-screen grid place-items-center overflow-hidden snap-center'>
			<BackgroundCircles />
            <h1>
                What is a Quentin? <span>{text}</span>
                <Cursor cursorColor='white' />
            </h1>
        </section>
    )
}

export default Hero
