import { FaGithub, FaCodepen, FaYoutube, FaLinkedin } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'

type Props = {}

const Footer = (props: Props) => {
    return (
        // bg-emerald-400/10
        <section className='p-4 mt-16 font-mono text-center '>
            <div className='flex justify-center gap-6 sm:hidden'>
                <a
                    href='https://www.linkedin.com/in/quentin-mckay-76b693116/'
                    target='_blank'
                    className='transition text-primary-text cursor:pointer hover:text-accent hover:scale-125'
                >
                    <FaLinkedin className='' size={25} />
                </a>
                <a
                    href='https://github.com/quentin-mckay'
                    target='_blank'
                    className='transition text-primary-text cursor:pointer hover:text-accent hover:scale-125'
                >
                    <FaGithub className='' size={25} />
                </a>
                <a
                    href='https://www.youtube.com/@quentinmckay8658/videos'
                    target='_blank'
                    className='transition text-primary-text cursor:pointer hover:text-accent hover:scale-125'
                >
                    <FaYoutube className='' size={25} />
                </a>
            </div>
            <a
                className='flex items-center justify-center gap-2 mt-6 text-white/70 transition hover:text-accent sm:m-0'
                href='https://github.com/quentin-mckay/portfolio_next13'
            >
                <FiGithub size={16} />
                Built with Next 13 && Tailwind
            </a>
        </section>
    )
}

export default Footer
