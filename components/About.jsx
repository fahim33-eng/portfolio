import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function About() {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <h1 className='my-4 tracking-widest'>Who Am I?</h1>
                <p className='my-4 text-gray-600'>
                Great to have you here! I am a sophomore year student of Computer Science & Engineering at University of Dhaka.
                As a full stack web developer, I am passionate about building innovative and 
                user-friendly applications that solve real-world problems. Although I do not have any formal job 
                experience yet,
                 I have honed my skills through a variety of projects and self-directed learning.
                </p>
                <p className='my-2 text-gray-600'>
                I am a fast learner and enjoy tackling new challenges, and I am always seeking out
                 opportunities to expand my knowledge and skills.
                </p>
                <p className='my-2 text-gray-600'>
                Ultimately, my goal as a full stack web developer is to create applications 
                that make a positive impact on peoples lives. Whether it is streamlining a business process,
                providing a better user experience, or facilitating communication and collaboration,
                I believe that technology can be a powerful force for good. I am excited to see where 
                my career in web development takes me, and I am committed to delivering high-quality work and building strong
                relationships with clients and colleagues alike.
                </p>
                <Link href={"/"}><p className='text-[#5651e3] font-bold'>Check Out Some of My Latest Projects</p></Link>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image src={"/myPhoto.jpg"} className='rounded-xl' width={"400"} height={"400"} alt='/'/> 
            </div> 
        </div>
    </div>
  )
}

export default About