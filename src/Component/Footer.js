import React from 'react'

export default function Footer() {
    return (
        <>
            <div className="container">
                <div className="row text-white py-14" >
                    <div className="col-3 px-14">
                        <img src="https://assets-global.website-files.com/610c5007d3b7eec8263e07aa/610c5007d3b7ee97a13e08eb_Colored%20Logo.svg" alt="" />
                        <h1>© 2024 Arc Studio <br /> All rights reserved</h1>
                    </div>
                    <div className="col-3">
                        <h1 className='font-bold text-2xl'>Product</h1>
                        <a href="https://www.arcstudiopro.com/pricing">pricing</a> <br />
                        <a href="https://help.arcstudiopro.com/">Help center</a> <br />
                        <a href="https://www.arcstudiopro.com/download">Download the app</a> <br />
                        <a href="https://app.arcstudiopro.com/login">Sign into the app </a>

                    </div>
                    <div className="col-3">
                        <h1 className='font-bold text-2xl'>Company</h1>
                        <a href="https://www.arcstudiopro.com/how-i-write" >Podcast: How I Write</a> <br />
                        <a href="https://www.arcstudiopro.com/blog">Blog </a> <br />
                        <a href="https://www.arcstudiopro.com/about-us">About us</a> <br />
                        <a href="https://www.arcstudiopro.com/terms">Terms of services</a>
                        <a href="https://www.arcstudiopro.com/privacy">Privancy policy</a>
                    </div>
                    <div className="col-3">
                        <h1 className='font-bold text-2xl'>Socials</h1>
                        <a href="https://twitter.com/arcstudioproapp">Twitter</a> <br />
                        <a href="https://www.facebook.com/arcstudiopro/">Facebook </a> <br />
                        <a href="https://www.instagram.com/arcstudiopro/">Instagram</a> 
                    </div>
                </div>
            </div>
        </>
    )   
}
