import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'

const Hero = () => {
    return (
        <div id="home" className='h-screen w-full text-center'>
            <div className='max-w-[1240px] mx-auto w-full h-full flex justify-center items-center'>
                <div>

                    <p className='uppercase tracking-widest text-sm text-gray-600'>Let's build something together</p>
                    <h1 className='py-4 text-gray-700'>Hi, I am <span className='text-blue-500'>Harsha</span></h1>
                    <h1 className='py-2 text-gray-700'>I'm a Front-End Web Developer</h1>
                    <p className='py-4 text-gray-600 max-w-[70%] m-auto'>I'm a Front-End web developer specializing in developing responsive web applications using Next.Js, React.Js and Tailwind CSS.</p>
                    <div className="flex items-center justify-between max-w-[330px] m-auto p-4">
                        <a href="https://www.linkedin.com/in/harshavardhan-kasa-882157136/" target="_blank">
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-500'>
                                <FaLinkedinIn />
                            </div>
                        </a>
                        <a href='https://github.com/Harsha441' target="_blank">
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-500'>

                                <FaGithub />
                            </div>
                        </a>
                        <a href="mailto:harshavardhanb22@gmail.com">

                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-500'>
                                <AiOutlineMail />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero