import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'

export default function Navbar() {
    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)
    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY > 90) {
                setShadow(true)
            }
            else {
                setShadow(false)
            }
        }
        window.addEventListener("scroll", handleShadow)
    }, [shadow])

    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className={shadow ? "fixed z-[100] w-full h-20 shadow-xl ease-in duration-100 bg-[#ecf0f3]" : "fixed z-[100] w-full h-20 ease-in duration-500 bg-[#ecf0f3]"}>
      <div className='flex justify-between items-center px-2 2xl:px-16 w-full h-full'>
        <Image  src={"/logo6.png"} alt='/' width={'80'} height={'40'} />
        <div>
            <ul className='hidden md:flex'>
                <Link href={"/"}>
                    <li className='uppercase ml-10 hover:border-b text-sm'>Home</li>
                </Link>
                <Link href={"/#about"}>
                    <li className='uppercase ml-10 hover:border-b text-sm'>About</li>
                </Link>
                <Link href={"/#skills"}>
                    <li className='uppercase ml-10 hover:border-b text-sm'>Skills</li>
                </Link>
                <Link href={"/#projects"}>
                    <li className='uppercase ml-10 hover:border-b text-sm'>Projects</li>
                </Link>
                <Link href={"/#contact"}>
                    <li className='uppercase ml-10 hover:border-b text-sm'>Contact</li>
                </Link>
            </ul>
            <div onClick={handleNav} className='md:hidden mr-5'>
                {nav && <AiOutlineMenu size={25}/>}
            </div>
        </div>
      </div>
      <div className={nav ? 'md:hidden fixed top-0 left-0 bg-black/70 w-full h-screen ease-in duration-500' : ""}>
        <div className={nav ? 'fixed top-0 right-0 bg-[#ecf0f3] h-screen p-10 w-[75%] sm-[65%] md-[45%] ease-in duration-500' :
                     "fixed top-0 right-[-100%] ease-in duration-500"}>
            <div>
                <div className='flex justify-between w-full items-center'>
                    <div onClick={handleNav} className='rounded-full cursor-pointer p-3 shadow-lg shadow-gray-400'>
                        <AiOutlineClose size={25}/>
                    </div>
                    <Image  src={"/../public/logo6.png"} alt='/' width={'80'} height={'40'} /> 
                </div>
                <div className='border-b border-gray-400 my-4'>
                    <p className='py-4'>Let us build something legendary together</p>
                </div>
            </div>
            <div className='flex flex-col py-4'>
                <ul className='uppercase'>
                    <Link href={"/"}>
                        <li className='py-4 text-sm hover-border-b border-gray-100'>Home</li>
                    </Link>
                    <Link href={"/#about"}>
                        <li className='py-4 text-sm hover-border-b border-gray-100'>About</li>
                    </Link>
                    <Link href={"/#skills"}>
                        <li className='py-4 text-sm hover-border-b border-gray-100'>Skills</li>
                    </Link>
                    <Link href={"/#projects"}>
                        <li className='py-4 text-sm hover-border-b border-gray-100'>Projects</li>
                    </Link>
                    <Link href={"/#contact"}>
                        <li className='py-4 text-sm hover-border-b border-gray-100'>Contact</li>
                    </Link>
                </ul>
                <div className='pt-20'>
                    <p className='uppercase text-[#5651e5] tracking-widest'>Let us Connect</p>
                    <div className='flex justify-between items-center my-4 w-full sm:w-[88%]'>
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
      </div>
    </div>
  )
}
