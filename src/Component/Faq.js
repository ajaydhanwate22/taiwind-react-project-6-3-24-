import React from 'react'
import Writers from './Writers'

export default function Faq() {
    return (
        <>
        <div className="containe bg-black py-48 px-16">
            <div className="accordion_head">
                <h2 className='text-white text-6xl mx-40 font-bold'>FAQ's</h2>
            </div>

            <div className="container mt-3 text-3xl " style={{ width: "80%" }}>
                <details className='bg-black '>
                    <summary className='bg-black text-white'>Coming from Final Draft, isn't learning a new program very hard?</summary>
                    <div className='text-white'>
                        <p>No, all the shortcuts work the same and you can seamlessly import and export Final Draft files. The average time for an experienced screenwriter to go from skeptical to sold is 7.8 minutes.</p>
                    </div>
                </details>

                <details>
                    <summary className='bg-black text-white'>Is Arc Studio only for professionals?</summary>
                    <div className='text-white'>
                        <p>No, Arc Studio is used by thousands of non-professionals to write screenplays. Because of its intuitive, distraction-free design, it's actually a particularly good choice for beginners to write their first script. We offer lots of resources and tools inside the app to get you up and running on your screenwriting journey.</p>
                    </div>
                </details>

                <details>
                    <summary className='bg-black text-white'>Can I work offline?</summary>
                    <div className='text-white'>
                        <p>Yes. Arc Studio has been built to collaborate together online, while offering a seamless offline experience. Whenever you lose internet connection (either momentarily or for longer, e.g. on a weekend off the grid), we save your work on your computer and sync it to your co-writers once you come back online.</p>
                    </div>
                </details>
            </div>
        </div>



            <Writers />

        </>
    )
}

