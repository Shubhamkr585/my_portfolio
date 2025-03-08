import React from 'react'
import { Element } from 'react-scroll'

export default function About() {
  return (
    <Element className='about'>
    <div className='flex flex-col text-white my-3 mx-4' >
        <h1 className='text-center font-semibold heading my-2'>ABOUT ME</h1>
        <div className='flex flex-row '>
          <div  className='para-container'>
        <p className='para my-2'>I'm a software engineer with a passion for technology and design. I recently graduated from the University of Pennsylvania with a degree in Computer Science.</p>
        <p className='para my-2'>My main interests include web development, graphic design, and data analysis.</p>
        <p className='para my-2'>Feel free to reach out if you'd like to collaborate on a project or have any questions.</p>
        <p className='para my-2'>Email: john.doe@example.com</p>
        <p className='para my-2'>Phone: (123) 456-7890</p>
        <p className='para my-2'>Address: 123 Main St, City, State, ZIP</p>
        </div>
        <div className='Gap'></div>
        <div className='text-white profile'> HERE WE WILL APPLY THE THEME.LET'S WRITE MORE AND SEE WHAT IS HAPPENING WITH THE CONTAINER SIZE.KEEP ON WRITING MORE AND MORE TO SEE THE FINAL RESULT.</div>
        </div>
      
    </div>
    </Element>
  )
}
