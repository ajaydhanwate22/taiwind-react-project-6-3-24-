import React from 'react'
import Faq from './Faq'

export default function Christian() {
  return (
    <>
          <div className="davidwain"  >
        <div className="container bg-white rounded-2xl mt-32 mb-16 ">
            <div className="row">
                <div className="col-4">
                    <img className='px-11 py-11' src="https://assets-global.website-files.com/610c5007d3b7eec8263e07aa/637dfbe70c998d38637c1d40_testimonial%202-p-500.webp" alt="" />
                </div>
                <div className="col-8">
                    <div className='mt-11 text-blue-600 text-3xl'>
                    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
              </div>
         
                <p className='text-2xl font-medium mt-4'>Running a writer’s room is all about efficiency. Arc Studio <br /> lets us collaborate across the entire season and manage <br /> incoming notes or changes without ever losing track of a  <br />single thing. Can’t imagine ever going back.</p>
                <h1 className='mt-6 text-4xl '>Christian Linke</h1>
                <h5 className='font-serif mt-4'>Showrunner, Arcane (Netflix)</h5>
                </div>
            </div>
        </div>
        <div className='text-white text-center my-11'> 
        <h1 className='text-2xl font-bold'>Arc Studio is the easiest way to run a writers room.</h1>
        <p className='text-xl font-bold underline cursor-pointer'>See Showrunner Features</p>
        </div>
    </div>
    <Faq/>
    </>
  )
}
