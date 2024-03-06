import React from 'react'
import Davidwin from './Davidwin'

export default function Navbar() {
    return (
        <>
            <nav>
                <ul className='text-white bg-#4d1158 flex justify-end space-x-14 px-48 font-bold py-3'>
                    <img className='pr-96 h-16' src="https://assets-global.website-files.com/610c5007d3b7eec8263e07aa/610c5007d3b7ee87b03e08d1_Navbar%20Logo.svg" alt="" />
                    <li className='py-4'>About Us</li>
                    <li className='py-4'>pricing</li>
                    <li className='py-4'>Download</li>
                    <li className='py-4'>blog</li>
                    <li className='py-4'>sign in</li>
                    <button className='w-36 h-14 bg-red-400 text-black rounded-2xl mt-2  ' type="button" class="btn btn-primary">Start writing</button>
                </ul>
            </nav>
            <div className='my-20'>
                <h1 className='text-white text-center text-8xl font-bold'>The New Industry Standard  <br />for Professional Screenwriting
                </h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-6 text-left">
                        <h1 className='text-white text-2xl px-20 mx-10'>Arc Studio is the easiest way to outline, write, and edit screenplays and television scripts, for solo-writers, large writing staffs, and everything in between.</h1>
                        <button type="button" class="btn btn-lg btn-primary my-10 bg-blue-950 mx-28" disabled>Start writing free</button>
                        <h5 className='text-white  mx-28'>Sign up for free. No credit card required.</h5>
                    </div>
                    <div className="col-6 justify-center">
                      <video className='justify-center h-80  cursor-pointer' src="https://assets-global.website-files.com/610c5007d3b7eec8263e07aa/6115608452036610642d7b4b_Hero%20BG%20Video-transcode.mp4"></video>
                    </div>
                </div>
            </div>
            <Davidwin/>
        </>
    )
}
