import React from 'react'

export default function Help() {
    return (
        <>
            <p className=' mx-52 my-36 text-white text-3xl  '>Arc Studio first launched in late 2018 as a prototype, with a handful of early adopters who used it and gave feedback as we developed it further. Since then, we've evolved to serve thousands of screenwriters every day and are growing quickly. We are used by beginners and professionals alike, such as the team behind the Netflix show Arcane and David Wain, Writer/Director of Wet Hot American Summer and Role Models.</p>
            <h1 className='text-center text-white text-3xl  font-bold'>Want to help?</h1>
            <div className="container mt-14">
                <div className="row text-center text-white">
                    <div className="col-6">
                        <h1 className='text-2xl font-bold'>Have questions, feedback, or ideas on how we might make screenwriting more joyful?</h1>
                        <button className='rounded-2xl bg-green-600 px-48 py-7 text-xl mt-6'>Reach out</button>
                    </div>
                    <div className="col-6">
                        <h1 className='text-2xl font-bold'>Want to work with us?</h1>
                        <button className='rounded-lg bg-green-600 px-48 py-7 text-xl mt-12'> Let us Know</button>
                    </div>
                </div>
            </div>
            <div className='text-center text-white mt-16 '>
                <h1 className='text-2xl py-3 font-bold'>Arc Studio Labs, Inc.</h1>
                <p className='text-2xl'>2810 N Church St PMB 65228 <br />
                    19802 Wilmington, Delaware</p>
            </div>
            <div className="container-body">
                <div className="container my-32">
                    <div className="row bg-blue-400 rounded-3xl ">
                        <div className="col-6 mt-52 my-36">
                            <h1 className='text-5xl text-center text-white font-bold'>Ready to get started?</h1>
                            <button className='bg-red-50 ml-40 mt-7 text-xl rounded-lg py-4 px-4 w-52 '>Start Writing</button>
                            <h5 className='text-white  ml-40  text-xl mt-4'>No credit card required</h5>
                        </div>
                        <div className="col-6 mt-32 my-36 text-white">
                            <img className='mx-72 rounded-full size-32' src="https://assets-global.website-files.com/610c5007d3b7eec8263e07aa/631efbcbaf19c47eecc5421c_Group%20133-min.png" alt="" />
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
