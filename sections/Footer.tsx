import { FaGithub, FaCodepen, FaYoutube, FaLinkedin } from 'react-icons/fa'

type Props = {}

const Footer = (props: Props) => {
    return (
		// bg-emerald-400/10
        <section className='font-mono mt-16 p-4 text-center '>
            <div className='flex justify-center gap-6 sm:hidden'>
                <a
                    href='https://www.linkedin.com/in/quentin-mckay-76b693116/'
                    target='_blank'
                    className='text-primary-text transition cursor:pointer hover:text-accent hover:scale-125'
                >
                    <FaLinkedin className='' size={25} />
                </a>
                <a
                    href='https://github.com/quentin-mckay'
                    target='_blank'
                    className='text-primary-text transition cursor:pointer hover:text-accent hover:scale-125'
                >
                    <FaGithub className='' size={25} />
                </a>
                <a
                    href='https://www.youtube.com/@quentinmckay8658/videos'
                    target='_blank'
                    className='text-primary-text transition cursor:pointer hover:text-accent hover:scale-125'
                >
                    <FaYoutube className='' size={25} />
                </a>
            </div>
            <a className='inline-block mt-6 text-sm hover:text-accent transition sm:m-0' href=''>Built with Next 13 && Tailwind</a>
        </section>
    )
}

export default Footer
