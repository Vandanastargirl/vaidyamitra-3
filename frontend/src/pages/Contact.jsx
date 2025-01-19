import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className=' font-semibold text-lg text-gray-600'>OUR OFFICE</p>
          <p className=' text-gray-500'>VP Software Pvt Limited, Pattanagere <br />RR Nagar, Bengaluru, India</p>
          <p className=' text-gray-500'>Tel: +91 6363 549 538 <br /> Email: vandanap2327@gmail.com</p>
          {/* <p className=' font-semibold text-lg text-gray-600'>CAREERS AT VaidyaMitra </p> */}
          <p className='text-gray-500'>Stay updated with the latest news and offers.</p>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              className='border border-gray-300 px-4 py-2 text-sm mr-2'
            />
            <button
              type="submit"
              className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'
            >
              Subscribe
            </button>
          </form>

        </div>
      </div>

    </div>
  )
}

export default Contact
