import React from 'react'

const About = () => {
    return (
        <div id="about" className='w-full sm:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:flex md:items-center'>
                <h1 className='md:mr-10'>About Me</h1>
                <div className='md:border-l md:border-gray-600  md:px-10 py-4 max-w-lg '>
                    <p className='text-lg tracking-wide indent-10 py-2 text-justify'>Hello! My name is Harshavardhan. My interest in web developement started in the end of 2020 when I decided to check some wordpress themes.</p>
                    <p className='text-lg tracking-wide indent-10 py-2 text-justify'>   Fast forward to today, I've had the privilege of working at a corporation. My main focus these days is building responsive,  accessible and digital experiences.</p>
                </div>
            </div>
        </div>
    )
}

export default About