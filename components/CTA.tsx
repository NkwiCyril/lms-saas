import Image from 'next/image'
import React from 'react'

const CTA = () => {
  return (
    <article className='cta-section'>
        <span className='cta-badge'>Start learning your way</span>
        <h2 className="text-2xl font-bold">Build a Personalized Learning Companion</h2>
        <h3 className='text-xl'>Pick a name, subject, voice and personality - and start learning through voice conversations that feel natural and fun.</h3>
        <div>
            <Image
                src="images/cta.svg"
                alt='call-to-action'
                width={90}
                height={90}
                className='w-full'
            />
        </div>
        <button className='btn-primary bg-[#fe5933] '>
            <div>
               <Image
                src="icons/plus.svg"
                alt='add a companion'
                width={15}
                height={15}
            /> 
            </div>
            <p>Build New Companion</p>
        </button>
    </article>
  )
}

export default CTA