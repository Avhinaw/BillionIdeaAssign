import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { PiFacebookLogo } from "react-icons/pi";
export default function Footer() {
  return (
    <div className='w-screen text-sm text-gray-600'>
      <div className='flex justify-center gap-36 p-1'>
      <h4>Customer Service</h4>
        <h4>FAQs</h4>
        <h4>About Us</h4>
        <h4>Contact Us</h4>
      </div>
      <div className='text-xl flex gap-4 items-center justify-center p-2'>
        <h5><FaXTwitter /></h5>
        <h5><FaInstagram /></h5>
        <h5><PiFacebookLogo /></h5>
      </div>
      <h5 className='text-center p-1'>@2025 OneBillionCart. All rights reserved</h5>
    </div>
  )
}
