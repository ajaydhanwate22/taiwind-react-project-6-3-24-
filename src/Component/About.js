import React from 'react'
import Team from './Team'

export default function About() {
  return (
    <>
    <div className='text-white '>
    <h1 className='text-8xl font-bold mt-4 text-center'>About Us</h1>
      <p className='text-2xl px-96 mt-10 font-bold  '>Arc Studio's mission is to build the easiest way to run a writers' room. We research how creatives collaborate when telling stories and create the tools that make this messy process as simple as possible: less technical frustrations and more creative collaboration.</p>
      <p className='mt-72 text-2xl px-96 font-bold '>We were frustrated with the existing screenwriting software options designed to be a formatting tool and not much else. Arc Studio was founded to show that we can do better. Our mission is to help teams organize their ideas and help guide their writing process as they develop stories together, with as little friction as possible. Formatting is only the starting point; collaboration and the exchanging of ideas should be central to this process.</p>
    </div>
    <Team/>
    </>
  )
}
