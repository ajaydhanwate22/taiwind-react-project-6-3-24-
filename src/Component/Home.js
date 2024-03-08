import React from 'react'
import Davidwin from './Davidwin'

export default function Home() {
  return (
    <>
    <div className='my-20'>
                <h1 className='text-white text-center text-8xl font-bold head_resp'>The New Industry Standard  <br />for Professional Screenwriting
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
