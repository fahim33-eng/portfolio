import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ProjectItem({ title, bgImg, url}) {
  return (
    <div className='relative my-4 flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl ease-in duration-300 group hover:bg-gradient-to-r from-[#242020] to-[#81b9da]'>
        <Image className='rounded-xl group-hover:opacity-10' src={bgImg} alt='/' width={"600"} height={"400"}/> 
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ease-in duration-300'>
            <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
            <Link href={url}>
                <p className='text-center px-4 py-3 my-6 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>Visit Code Repo</p>
            </Link>
        </div>
    </div>
  )
}

export default ProjectItem