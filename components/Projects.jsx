import React from 'react'
import ProjectItem from './ProjectItem'

function Projects() {
  return (
    <div id='projects' className='w-full my-16'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <h1 className='py-4 my-4 tracking-wide'>Projects I have built recently</h1>
        <div className='grid md:grid-cols-2 mt-16 gap-8'>
          <ProjectItem
            title='Google Search Engine'
            bgImg={"/projects/google.jpg"}
            url='/'
          />
          <ProjectItem
            title='Google Search Engine'
            bgImg={"/projects/google.jpg"}
            url='/'
          />
          <ProjectItem
            title='Whatsapp Clone'
            bgImg={"/projects/google.jpg"}
            url='/'
          />
          <ProjectItem
            title='Netflix Like'
            bgImg={"/projects/google.jpg"}
            url='/'
          />
        </div>
      </div>
    </div>

  )
}

export default Projects