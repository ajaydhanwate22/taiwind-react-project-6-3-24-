import React from 'react'
import Writers from './Writers'

export default function Faq() {
    return (
        <>
        <div className="container">
            <div className="accordion_head">
                <h2 className='text-white text-6xl mx-36 font-bold'>FAQ's</h2>
            </div>

            <div className="container mt-3" style={{ width: "80%" }}>
                <details>
                    <summary>Accordion Section 1</summary>
                    <div className='text-white'>
                        <p>Content for Section 1 goes here.</p>
                    </div>
                </details>

                <details>
                    <summary>Accordion Section 2</summary>
                    <div className='text-white'>
                        <p>Content for Section 2 goes here.</p>
                    </div>
                </details>

                <details>
                    <summary>Accordion Section 3</summary>
                    <div className='text-white'>
                        <p>Content for Section 3 goes here.</p>
                    </div>
                </details>
            </div>
        </div>



            <Writers />

        </>
    )
}

