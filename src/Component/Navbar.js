import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <nav className=' '>
                <ul className=' flex justify-end space-x-14 px-48 font-bold py-3   '>
                    <img className='pr-96 h-10 ' src="https://assets-global.website-files.com/610c5007d3b7eec8263e07aa/610c5007d3b7ee87b03e08d1_Navbar%20Logo.svg" alt="" />
                    <Link className='py-4 text-white bg-#4d1158' to="about">About Us</Link>
                    <Link className='py-4 text-white bg-#4d1158' to="https://www.arcstudiopro.com/pricing">Pricing</Link>
                    <Link className='py-4 text-white bg-#4d1158' to="download">Download</Link>
                    <Link className='py-4 text-white bg-#4d1158' to="https://www.arcstudiopro.com/blog">Blog</Link>
                    <Link className='py-4 text-white bg-#4d1158 cursor-pointer' to="https://app.arcstudiopro.com/login">Sign in</Link>
                    <button className='w-36 h-14  rounded-2xl mt-2  ' type="button" class="btn btn-light  bg-red-200 text-black">Start writing</button>
                </ul>
            </nav>
        </>
    )
}
