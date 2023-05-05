import React from 'react'
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'

function Main() {
  return (
    <div id="home" className='w-full h-screen text-center'>
        <div className='flex justify-center items-center w-full h-full max-w-[1240px] mx-auto p-2'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600 mt-20'>Let us build something legendary together</p>
                <h1 className='py-4 text-gray-700'>Hi, I am <span className='text-[#5651e5]'>Fahim</span></h1>
                <h1 className='py-4 text-gray-700'>A Full Stack Web Developer</h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>I am passionate about creating innovative solutions to real-world problems. From designing sleek user interfaces 
                to crafting robust backend systems, I am committed to delivering top-notch results 
                that exceed expectations. Explore my work and let us collaborate on bringing your ideas to life!</p>
                <div className='flex justify-between items-center max-w-[330px] m-auto py-4'>
                    <div className='rounded-full shadow-lg shadow-gray-400 cursor-pointer p-6 hover:scale-110 ease-in duration-300'>
                        <FaLinkedinIn />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 cursor-pointer p-6 hover:scale-110 ease-in duration-300'>
                        <FaGithub />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 cursor-pointer p-6 hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 cursor-pointer p-6 hover:scale-110 ease-in duration-300'>
                        <BsFillPersonLinesFill />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main