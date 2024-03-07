import React from 'react'
import Ready from './Ready'

export default function Writers() {
    return (
        <>
            <div className="container text-white my-52">
                <div className="row  ">
                    <div className="col-6 " >
                        <h1 className='text-6xl my-6 font-bold'>  Your virtual <br /> writers’ room</h1>
                        <p className='text-3xl mt-11'>Arc Studio has real-time collaboration, like Google Docs.  Invite co-writers with a click. Give notes and manage them right inside your script. Manage drafts effortlessly. Assign writers, set deadlines, track progress.</p>
                        <h1 className='text-2xl mt-9'>Everybody stays on the same page, crafting stories as <br /> a team.</h1>

                    </div>
                    <div className="col-6  ">
                        <img src="https://www.idp.com/medias/what-is-act-mob-banner.jpg?context=bWFzdGVyfHJvb3R8OTc1MDF8aW1hZ2UvanBlZ3xhR1ZqTDJnMFlTOHhNVGMwTkRFME1ESTJNelExTkM5M2FHRjBMV2x6TFdGamRDMXRiMkl0WW1GdWJtVnlMbXB3Wnd8OTY4N2I5ZmIwMzMzM2JiY2U4ZjdhMDVhNTc2MTBiZDhmZjM1NWJkMTU3NWQ5ODM5MWViNjc1MDdiYzk4MTA5OA" alt="" />
                    </div>
                </div>
            </div>
            <Ready />
        </>
    )
}

