import Image from 'next/image'
import React from 'react'
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import Link from 'next/link'

function Contact() {
  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='w-full max-w-[1240px] px-2 py-16 m-auto'>
            <h1 className='tracking-wide py-4 my-4'>Get In Touch</h1>
            <div className='grid lg:grid-cols-5 gap-8'>
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='lg:p-4 h-full'>
                        <div>
                            <Image className='rounded-xl hover:scale-105 ease-in duration-300' src={"/myPhoto.jpg"} width={"300"} height={"300"} alt="/" />
                        </div>
                        <div>
                            <h2 className='my-4'>Fahim Shakil</h2>
                            <p className='text-sm my-2 font-light text-gray-500'>Full Stack Developer</p>
                            <p>I am available for new challenges and eager to hear about your company&#x27;s needs</p>
                        </div>
                        <div>
                            <p className='pt-32'>CONNECT WITH ME</p>
                            <div className='flex justify-between items-center w-full sm:w-[88%] my-4'>
                                <div className='rounded-full shadow-lg shadow-gray-400 cursor-pointer p-3 hover:scale-105 ease-in duration-300'>
                                    <FaLinkedinIn />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 cursor-pointer p-3 hover:scale-105 ease-in duration-300'>
                                    <FaGithub />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 cursor-pointer p-3 hover:scale-105 ease-in duration-300'>
                                    <AiOutlineMail />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 cursor-pointer p-3 hover:scale-105 ease-in duration-300'>
                                    <BsFillPersonLinesFill />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                    <div className='p-4'>
                        <form action='https://getform.io/f/7311c2f0-d7e6-4bee-98b7-ee9eb2cbbf2b' method='POST'>
                            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Name :</label>
                                    <input type="text" name="name" className='border-2 rounded-lg p-3 flex border-gray-300'/>
                                </div>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Your Contact Number :</label>
                                    <input type="text" name="phoneNumber" className='border-2 rounded-lg p-3 flex border-gray-300'/>
                                </div>
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Email :</label>
                                <input type="email" name='email' className='border-2 rounded-lg p-3 flex border-gray-300'/>
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Subject :</label>
                                <input type="text" name='subject' className='border-2 rounded-lg p-3 flex border-gray-300'/>
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Message :</label>
                                <textarea className='border-2 rounded-lg p-3 border-gray-400' name={"actualMessage"} rows={"10"}></textarea>
                            </div>
                            <button type='submit' className='w-full py-3 my-4 bg-[#5651e3]'>Send Message</button>
                        </form>
                    </div>

                </div>
            </div>
            <div className='flex justify-center items-center my-3'>
                <Link href={"/"}>
                    <div className='shadow-xl shadow-gray-400 rounded-full hover:scale-105 ease-in duration-300 cursor-pointer p-6'>
                        <HiOutlineChevronDoubleUp size={25}/>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Contact