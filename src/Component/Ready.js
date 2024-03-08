import React from 'react'

export default function Ready() {
    return (
        <>
            <div className="container-body">
                <div className="container my-32">
                    <div className="row bg-blue-400 rounded-3xl ">
                        <div className="col-6 mt-52 my-36">
                            <h1 className='text-5xl text-center text-white font-bold'>Ready to get started?</h1>
                            <button className='bg-red-50 ml-40 mt-7 text-xl rounded-lg py-4 px-4 w-52 '>Start Writing</button>
                            <h5 className='text-white  ml-40  text-xl mt-4'>No credit card required</h5>
                        </div>
                        <div className="col-6 mt-32 my-36 text-white">
                      <img className='mx-72 rounded-full size-32' src="https://assets-global.website-files.com/610c5007d3b7eec8263e07aa/616eadbed9b53a3dd4e2d6f6_testimonial%20headshot%201.png" alt="" />
                      <p className='mt-8 text-center text-xl'>The most efficient, elegant, intuitive, and all around  <br />user-friendly screenwriting software I've ever used <br /> — and I've used them all.</p>
                      <h1 className='mt-7 text-center'>Anna Klassen</h1>
                      <h5 className='text-center mt-1'>Screenwriter (Netflix)</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
