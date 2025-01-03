import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center'>
       <Image src={assets.logo_light} alt='' width={180} />
       <p className='text-white text-sm'>&copyright; 2024 @blogger . All rights reserved.</p>
       <div className='flex'>
        <Image src={assets.facebook_icon} alt='' width={40} />
        <Image src={assets.googleplus_icon} alt='' width={40} />
        <Image src={assets.twitter_icon} alt='' width={40} />
       </div>
       </div>
  );
}

export default Footer
