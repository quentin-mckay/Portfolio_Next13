'use client'

import { SectionHeading } from '@/components'

import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'

type Props = {}

const Contact = (props: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data: any) => {
        console.log(data)
    }

    return (
        <section id='contact' className='q-contain-md mt-32 scroll-mt-24'>
            <SectionHeading title='Say Hello' />

            <form
                action='https://formsubmit.co/quentinmckay1@gmail.com'
                method='POST'
                className='grid gap-4 mt-12 w-[95%] mx-auto text-gray-100/80 md:grid-cols-2'
                // onSubmit={handleSubmit(onSubmit)}
            >
                <input
                    type='text'
                    className='q-input'
                    placeholder='Name'
                    id='name'
                    required
					name='name'
                    // {...register('name', { required: true })}
                />
                <input
                    type='email'
                    className='q-input'
                    placeholder='Email'
                    id='email'
                    required
					name='email'
                    // {...register('email', { required: true })}
                />
                <input
                    type='text'
                    className='q-input md:col-span-full'
                    placeholder='Subject'
                    required
					name='subject'
                    // {...register('subject', { required: true })}
                />
                <textarea
                    className='q-input md:col-span-full'
                    placeholder='Message'
                    rows={4}
                    required
					name='message'
                    // {...register('message', { required: true })}
                />
                <button
                    type='submit'
                    className='text-accent border border-accent rounded px-4 py-3 hover:bg-accent/10 transition-colors'
                >
                    Send Message
                </button>
            </form>
        </section>
    )
}

export default Contact
