import React from 'react'
import { Link } from 'react-router-dom'

export default function Download() {
  return (
    <>
      <h1 className='text-center text-white text-7xl mt-11 font-bold'>Arc Studio for macOS, Windows, and iOS</h1>

      <div className="container mt-5">
        <div className="flex text-black space-x-7">
          <div className="col-4 bg-white rounded-xl">
            <div className='flex mx-11' >
              <img src="https://assets-global.website-files.com/610c5007d3b7eec8263e07aa/62e9394164ef9542cbe5dce8_Vector-1.svg" alt="" />
            <h1 className='text-2xl font-bold mx-10'>Windows</h1>
            </div>
            <h1 className='text-xl font-bold mx-11 my-10'>Windows desktop application, for Windows 10 and Windows 11.</h1>
            <button className='bg-red-800  mt-72  text-2xl font-bold w-96 h-14 mx-8 rounded-xl my-8 '>Download for Windows</button>
          </div>
          <div className="col-4 bg-white rounded-xl">
            <div className='flex mx-11' >
              <img src="https://assets-global.website-files.com/610c5007d3b7eec8263e07aa/62e93941b2c14f466ef28f9c_Vector-2.svg" alt="" />
            <h1 className='text-2xl font-bold mx-10'>Mac OS</h1>
            </div>
            <h1 className='text-xl font-bold mx-11 my-10'>Optimized for both Intel and Apple Silicon processors. Don't know which you have? Click here to find out.</h1>
            <button className='bg-red-800  mt-44  text-2xl font-bold w-96 h-14 mx-8 rounded-xl  '>Download for Intel mac</button>
            <button className='bg-red-800  text-2xl font-bold w-96 h-14 mx-8 rounded-xl mt-4'>Apple silicon</button>
          </div>
          <div className="col-4 bg-white rounded-xl">
            <div className='flex mx-11' >
              <img src="https://assets-global.website-files.com/610c5007d3b7eec8263e07aa/62e9394164ef9542cbe5dce8_Vector-1.svg" alt="" />
            <h1 className='text-2xl font-bold mx-10'>iOS App Store</h1>
            </div>
            <h1 className='text-xl font-bold mx-11 my-10'>Optimized for iPad and iPhone.</h1>
            <img className='h-36 mx-36 cursor-pointer' src="https://assets-global.website-files.com/610c5007d3b7eec8263e07aa/610c5007d3b7ee9c203e08f9_qr-code-p-500.png" alt="" />
            <img className='mx-36 mt-12 cursor-pointer' src="https://assets-global.website-files.com/610c5007d3b7eec8263e07aa/610c5007d3b7eedb813e08fa_App%20Store.svg" alt="" />
          </div>
        </div>
      </div>
      <div className='text-center mx-44 mt-20 text-xl'>
      <Link className='py-4  text-white underline ' to="https://www.arcstudiopro.com/pricing">Or use the app directly from your browser</Link>
      </div>
      <div className="container-body">
                <div className="container my-32">
                    <div className="row bg-blue-400 rounded-3xl ">
                        <div className="col-6 mt-24 ">
                            <h1 className='text-5xl text-center text-white font-bold'>Ready to get started?</h1>
                            <button className='bg-red-50 ml-40 mt-7 text-xl rounded-lg py-4 px-4 w-52 '>Start Writing</button>
                            <h5 className='text-white  ml-40  text-xl mt-4 my-20'>No credit card required</h5>
                        </div>
                        <div className="col-6 mt-32 my-36 text-white  font-semibold">
                      <h1 className='text-2xl'>Questions?</h1>
                      <h1 className='text-2xl mt-4'>Reach us at</h1>
                      <h1 className='text-2xl mt-2'>‍team@arcstudiopro.com</h1>
                      <h1 className='text-2xl mt-2' >we'd love to hear from you!</h1>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}
