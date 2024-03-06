import React from 'react'
import Storytellers from './Storytellers'

export default function Safesaound() {
  return (
    <>
      <div className="container text-white ">
        <div className="row bg-green-400 rounded-3xl py-11 px-24 mx-11 my-11" >
            <div className="col-6">
                <h1 className='text-6xl font-bold'>Safe & Sound</h1>
                <h5 className='text-2xl font-bold mt-16'>Arc Studio puts you at ease while writing, thanks to automatic backups and a seamless editing history.</h5>
                <h1 className='mt-16 text-xl font-bold'>  <i class="fa-solid fa-file"></i> Automatic backups to your device and to the cloud: never lose work again!</h1>
                <h1 className='mt-12 text-xl font-bold'> <i class="fa-solid fa-compass-drafting"></i> Automatic draft history: deleted some text that you want back? We kept it for you.</h1>
                <h1 className='mt-12 text-xl font-bold'> <i class="fa-sharp fa-light fa-earth-americas"></i> The cloud done right: work offline or online seamlessly, and access your script from multiple devices.</h1>
                <h1 className='mt-12 text-xl font-bold'> <i class="fa-solid fa-user-slash"></i> Give access to co-writers with a click and see who has access at a glance</h1>
            </div>
            <div className="col-6">
                <img className='' src="https://assets-global.website-files.com/610c5007d3b7eec8263e07aa/610c5007d3b7ee8e443e08ec_illustration-min-p-800.png" alt="" />
            </div>
        </div>
      </div>
      <Storytellers/>
    </>
  )
}
