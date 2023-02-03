import React from 'react'
import { FiSend } from 'react-icons/fi'

const ContactUs = () => {
    return (
        <div id='contact' className='w-full lg:screen md:py-32'>
            <div className='max-w-[1240px] mx-auto w-full h-full'>
                <h1 className='text-center mb-10'>Get In Touch</h1>
                <div className='w-full mx-auto max-w-md text-center'>
                    <p className='text-lg my-4'>I’m currently looking for new opportunities. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
                    <a href="mailto:harshavardhanb22@gmail.com">
                        <div className='w-full flex justify-center items-center'>

                            <button className='bg-gray-700 p-4 rounded-xl text-white font-bold my-4 flex justify-center items-center gap-4'><span><FiSend /></span>Send</button>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ContactUs