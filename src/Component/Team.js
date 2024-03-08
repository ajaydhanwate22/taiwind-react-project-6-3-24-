import React from 'react'
import Help from './Help'

export default function Team() {
    return (
        <>
        <h1 className='text-center text-white text-7xl font-bold mt-20'>The Team</h1>
            <div className="container">
                <div className="row ">
                    <div className="col-3 ">
                        <div class="card bg-[#4d1158]" style={{width:"18rem"}}>
                            <img src="https://assets-global.website-files.com/610c5007d3b7eec8263e07aa/62766f663c3926c3c937ce44_Flo-min-p-500.png" class="card-img-top" alt="..." />
                            <div class="card-body bg-white text-black rounded-lg text-center">
                                <h1 className='text-2xl font-bold'>Flo</h1>
                                <p class="card-text">Engineering</p>
                                <h5>Breaking Bad</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 mt-96 ">
                        <div class="card bg-[#4d1158]"  style={{width:"18rem"}}>
                            <img src="https://assets-global.website-files.com/610c5007d3b7eec8263e07aa/62766f66757549d0bf410bb2_Oliver-min-p-500.png" class="card-img-top " alt="..." />
                            <div class="card-body bg-white text-black rounded-lg text-center">
                                <h1 className='text-2xl font-bold'>Michi</h1>
                                <p class="card-text">Product</p>
                                <h5>The Sopranos</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 mt-28">
                        <div class="card bg-[#4d1158]"  style={{width:"18rem"}}>
                            <img src="https://assets-global.website-files.com/610c5007d3b7eec8263e07aa/629d9435175235901d7a9f06_me_512-p-500.jpeg" class="card-img-top rounded-[50%]" alt="..." />
                            <div class="card-body bg-white text-black rounded-lg text-center">
                                <h1 className='text-2xl font-bold'>Oliver</h1>
                                <p class="card-text">Design</p>
                                <h5>Inherent Vice</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 mt-80">
                        <div class="card bg-[#4d1158]"  style={{width:"18rem"}}>
                            <img src="https://assets-global.website-files.com/610c5007d3b7eec8263e07aa/62766a979c4d28bb9b69a85b_Amanda-min-p-500.png" class="card-img-top" alt="..." />
                          <div class="card-body bg-white text-black rounded-lg text-center">
                                <h1 className='text-2xl font-bold'>Amanda</h1>
                                <p class="card-text">Customer Support</p>
                                <h5>The Last Kingdom</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-3 -mt-32">
                        <div class="card bg-[#4d1158]" style={{width:"18rem"}}>
                            <img src="https://assets-global.website-files.com/610c5007d3b7eec8263e07aa/62766f66a98ae74c776b8f03_Alessio-min-p-500.png" class="card-img-top" alt="..." />
                            <div class="card-body bg-white text-black rounded-lg text-center">
                                <h1 className='text-2xl font-bold'>Alessio</h1>
                                <p class="card-text">Web Design</p>
                                <h5>Better Call Saul</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-3  ">
                        <div class="card bg-[#4d1158]"  style={{width:"18rem"}}>
                            <img src="https://assets-global.website-files.com/610c5007d3b7eec8263e07aa/63ad5dfc910c709802b22407_Harry-min-p-500.png" class="card-img-top" alt="..." />
                            <div class="card-body bg-white text-black rounded-lg text-center">
                                <h1 className='text-2xl font-bold'>Harry</h1>
                                <p class="card-text">Screenwriting Resources</p>
                                <h5>For All Man Kind</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 -mt-36">
                        <div class="card bg-[#4d1158]"  style={{width:"18rem"}}>
                            <img src="https://assets-global.website-files.com/610c5007d3b7eec8263e07aa/62766f66ce3e9e203f2bf30b_Bruno-min-p-500.png" class="card-img-top rounded-[50%]" alt="..." />
                            <div class="card-body bg-white text-black rounded-lg text-center">
                                <h1 className='text-2xl font-bold'>Bruno</h1>
                                <p class="card-text">Engineering</p>
                                <h5>Game of Thrones</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 ">
                        <div class="card bg-[#4d1158]"  style={{width:"18rem"}}>
                            <img src="https://assets-global.website-files.com/610c5007d3b7eec8263e07aa/62766f66f2bbb43563591763_Savannah-min-p-500.png" class="card-img-top" alt="..." />
                          <div class="card-body bg-white text-black rounded-lg text-center">
                                <h1 className='text-2xl font-bold'>Savannah</h1>
                                <p class="card-text">Marketing</p>
                                <h5>The Princess Bride</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Help/>


        </>
    )
}
