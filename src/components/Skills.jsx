import Image from 'next/image'
import React from 'react'
import html from "../../public/assets/html.png"
import css from "../../public/assets/css.png"
import javascript from "../../public/assets/javascript.png"
import reactimg from "../../public/assets/react.png"
import nextimg from "../../public/assets/nextjs.png"
import tailwind from "../../public/assets/tailwind.png"
import bootstrap from "../../public/assets/bootstrap.png"
import electron from "../../public/assets/electron.png"
import github from "../../public/assets/github1.png"

const Skills = () => {
    return (
        <div id="skills" className='w-full lg:screen py-32'>
            <div className='max-w-[1240px] mx-auto w-full h-full'>

                <h1 className='text-center'>Skills</h1>
                <div className='p-10 flex flex-wrap justify-center gap-5'>
                    <div className='flex flex-col justify-between items-center hover:scale-110 cursor-pointer ease-in duration-500 shadow-xl rounded-lg p-10 h-[200px] w-[210px]'>
                        <Image src={html} alt="HTML" width={64} height={64} />
                        <p className='text-xl text-gray-700 font-bold py-2'>HTML</p>
                    </div>
                    <div className='flex flex-col justify-between items-center hover:scale-110 cursor-pointer ease-in duration-500 shadow-xl rounded-lg p-10 h-[200px] w-[210px]'>
                        <Image src={css} alt="CSS" width={64} height={64} />
                        <p className='text-xl text-gray-700 font-bold py-2'>CSS</p>
                    </div>
                    <div className='flex flex-col justify-between items-center hover:scale-110 cursor-pointer ease-in duration-500 shadow-xl rounded-lg p-10 h-[200px] w-[210px]'>
                        <Image src={javascript} alt="Javascript" width={64} height={64} />
                        <p className='text-xl text-gray-700 font-bold py-2'>Javascript</p>
                    </div>
                    <div className='flex flex-col justify-between items-center hover:scale-110 cursor-pointer ease-in duration-500 shadow-xl rounded-lg p-10 h-[200px] w-[210px]'>
                        <Image src={reactimg} alt="React" width={64} height={64} />
                        <p className='text-xl text-gray-700 font-bold py-2'>React</p>
                    </div>
                    <div className='flex flex-col justify-between items-center hover:scale-110 cursor-pointer ease-in duration-500 shadow-xl rounded-lg p-10 h-[200px] w-[210px]'>
                        <Image src={nextimg} alt="Next" width={64} height={64} />
                        <p className='text-xl text-gray-700 font-bold py-2'>Next.Js</p>
                    </div>
                    <div className='flex flex-col justify-between items-center hover:scale-110 cursor-pointer ease-in duration-500 shadow-xl rounded-lg p-10 h-[200px] w-[210px]'>
                        <Image src={tailwind} alt="Tailwind" width={64} height={64} />
                        <p className='text-xl text-gray-700 font-bold py-2'>Tailwind CSS</p>
                    </div>
                    <div className='flex flex-col justify-between items-center hover:scale-110 cursor-pointer ease-in duration-500 shadow-xl rounded-lg p-10 h-[200px] w-[210px]'>
                        <Image src={bootstrap} alt="bootstrap" width={64} height={64} />
                        <p className='text-xl text-gray-700 font-bold py-2'>Bootstrap</p>
                    </div>
                    <div className='flex flex-col justify-between items-center hover:scale-110 cursor-pointer ease-in duration-500 shadow-xl rounded-lg p-10 h-[200px] w-[210px]'>
                        <Image src={electron} alt="electron" width={64} height={64} />
                        <p className='text-xl text-gray-700 font-bold py-2'>Electron</p>
                    </div>
                    <div className='flex flex-col justify-between items-center hover:scale-110 cursor-pointer ease-in duration-500 shadow-xl rounded-lg p-10 h-[200px] w-[210px]'>
                        <Image src={github} alt="github" width={64} height={64} />
                        <p className='text-xl text-gray-700 font-bold py-2'>Github</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Skills