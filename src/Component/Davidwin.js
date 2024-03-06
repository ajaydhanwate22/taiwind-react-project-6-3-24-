import React from 'react'
import Industry from './Industry'

export default function Davidwin() {
  return (
    <>
    <div className="davidwain"  >
        <div className="container bg-white rounded-2xl my-48 ">
            <div className="row">
                <div className="col-4">
                    <img className='px-11 py-11' src="https://assets-global.website-files.com/610c5007d3b7eec8263e07aa/637d0882a87e08910f2b054f_testimonial%20hero-p-500.webp" alt="" />
                </div>
                <div className="col-8">
                    <div className='mt-11 text-blue-600 text-3xl'>
                    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
              </div>
         
                <p className='text-2xl font-medium mt-4'>For decades I've been searching for a seamless <br />screenwriting app and and everything has come up way <br /> short – until Arc Studio. Writing and collaborating is <br /> easier than ever and it gets better every week. <br />Well done!</p>
                <h1 className='mt-6 text-4xl '>David Wain</h1>
                <h5 className='font-serif'>Writer/Director Role Models, Wet Hot American Summer</h5>
                </div>
            </div>
        </div>
    </div>
    <Industry/>

    </>
  )
}
