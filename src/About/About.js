import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className='text-center'>
            <h1 className='text-3xl mt-3 text-gray-400'><span className="text-5xl ">NBlog</span> is a online bogging platform</h1>
            <p>Coming soon....</p>
            <Link to="/">go to home</Link>
        </div>
    )
}

export default About