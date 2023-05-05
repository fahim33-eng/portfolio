import Image from 'next/image'
import React from 'react'

function Skills() {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] flex flex-col justify-center h-full mx-auto'>
            <h1 className='py-16 tracking-wide'>Languages I am an expert of : </h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='flex justify-between items-center shadow-xl shadow-gray-600 rounded-xl hover:scale-105 ease-in duration-300 p-4'>
                    <Image src={"/skills/javascript.png"} width={"64"} height={"64"} alt="/"/>
                    <h3>Javascript</h3>
                </div>
                <div className='flex justify-between items-center shadow-xl shadow-gray-600 rounded-xl hover:scale-105 ease-in duration-300 p-4'>
                    <Image src={"/skills/html.png"} width={"64"} height={"64"} alt="/"/>
                    <h3>HTML</h3>
                </div>
                
                <div className='flex justify-between items-center shadow-xl shadow-gray-600 rounded-xl hover:scale-105 ease-in duration-300 p-4'>
                    <Image src={"/skills/css.png"} width={"64"} height={"64"} alt="/"/>
                    <h3>CSS</h3>
                </div>
                <div className='flex justify-between items-center shadow-xl shadow-gray-600 rounded-xl hover:scale-105 ease-in duration-300 p-4'>
                    <Image src={"/skills/react.png"} width={"64"} height={"64"} alt="/"/>
                    <h3>React</h3>
                </div>
                <div className='flex justify-between items-center shadow-xl shadow-gray-600 rounded-xl hover:scale-105 ease-in duration-300 p-4'>
                    <Image src={"/skills/python.png"} width={"64"} height={"64"} alt="/"/>
                    <h3>Python</h3>
                </div>
                <div className='flex justify-between items-center shadow-xl shadow-gray-600 rounded-xl hover:scale-105 ease-in duration-300 p-4'>
                    <Image src={"/skills/java.png"} width={"64"} height={"64"} alt="/"/>
                    <h3>Java</h3>
                </div>
                <div className='flex justify-between items-center shadow-xl shadow-gray-600 rounded-xl hover:scale-105 ease-in duration-300 p-4'>
                    <Image src={"/skills/mongo.png"} width={"64"} height={"64"} alt="/"/>
                    <h3>Mongo</h3>
                </div>
                <div className='flex justify-between items-center shadow-xl shadow-gray-600 rounded-xl hover:scale-105 ease-in duration-300 p-4'>
                    <Image src={"/skills/nextjs.png"} width={"64"} height={"64"} alt="/"/>
                    <h3>NextJs</h3>
                </div>
                <div className='flex justify-between items-center shadow-xl shadow-gray-600 rounded-xl hover:scale-105 ease-in duration-300 p-4'>
                    <Image src={"/skills/node.png"} width={"64"} height={"64"} alt="/"/>
                    <h3>NodeJs</h3>
                </div>
                
                <div className='flex justify-between items-center shadow-xl shadow-gray-600 rounded-xl hover:scale-105 ease-in duration-300 p-4'>
                    <Image src={"/skills/tailwind.png"} width={"64"} height={"64"} alt="/"/>
                    <h3>Tailwind</h3>
                </div>
                <div className='flex justify-between items-center shadow-xl shadow-gray-600 rounded-xl hover:scale-105 ease-in duration-300 p-4'>
                    <Image src={"/skills/github1.png"} width={"64"} height={"64"} alt="/"/>
                    <h3>Github</h3>
                </div>
                <div className='flex justify-between items-center shadow-xl shadow-gray-600 rounded-xl hover:scale-105 ease-in duration-300 p-4'>
                    <Image src={"/skills/firebase.png"} width={"64"} height={"64"} alt="/"/>
                    <h3>Firebase</h3>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Skills