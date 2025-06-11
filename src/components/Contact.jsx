import React from 'react'
import { Element } from 'react-scroll'

function Contact() {
  return (
     <Element name="contact" >

    <div className='flex flex-col  text-white my-6'>
        <div>
            <h1 className='text-2xl font-bold my-3'
             style={{
                textAlign: 'center',
                fontFamily: 'Helvetica',
                fontWeight: 'bold',
                color: 'lavender',
                textShadow: '2px 2px #000000'

             }}>Contact</h1>
            <h2 className='text-xl'>Reach out to me at:</h2>
            <p>Email: <a href='mailto:shubhamprd585@gmail.com'>shubhamprd585@gmail.com</a></p>
            <p>Phone: +91 9263951692</p>
            <p>Address: 123 Main St, City, State, ZIP</p>
        </div>
      
    </div>
  </Element>
  )
}

export default Contact
