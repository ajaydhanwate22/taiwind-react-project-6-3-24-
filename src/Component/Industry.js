import React from 'react'
import Safesaound from './Safesaound'

export default function Industry() {
    return (
        <>
            <div className="container">
                <div className="row " >
                    <div className="col-6">
                        <h1 className='text-fuchsia-600 text-7xl font-bold py-3'>Industry Standard Formatting</h1>
                        <p className='text-white text-2xl mt-14'>Arc Studio automatically formats your script according to <br /> the Hollywood industry standard. You stay focused with  <br /> intuitive shortcuts and a clean visual design, <br /> which removes all distractions. No more clunky apps from the  <br />90s – Arc Studio is a breath of fresh air for the <br /> screenwriting world.</p>
                        <div className="flex mt-10  text-white rounded-2xl h-60 w-96">
                            <div className="icon">
                                <i class="fa-solid fa-file text-8xl py-5 px-6"></i>
                            </div>
                            <div className="icon-para ml-5 py- ">
                                <h1 className='text-2xl font-bold '>Seamless transition from  Final Draft</h1>
                                <p>Seamlessly import & export Final Draft <br /> and keep your formatting 100% <br /> consistent. Switch in less than 10 <br /> minutes.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <img className='justify-center mt-20 h-96 rounded-xl' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsIkSRrBx3FlhFaB3yfNY4ZiQkmD8_YM0qWA&usqp=CAU" alt="" />
                    </div>
                </div>
            </div>
            <Safesaound/>
        </>
    )
}
