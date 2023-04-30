import React from 'react'

type Props = {
	title: string
}

const SectionHeading = (props: Props) => {
    return (
        <div className='flex gap-3'>
            <h2 className='text-2xl font-normal text-primary-text relative md:text-4xl font tracking-wide'>
                {props.title}
            </h2>
            <div className='relative flex-1'>
                <div className='absolute w-full h-[1px] bg-white/40 top-[60%]'></div>
            </div>
        </div>
    )
}

export default SectionHeading
