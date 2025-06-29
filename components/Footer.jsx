import { serviceData } from '@/assets/assets'
import { assets, infoList, toolsData } from '@/assets/assets'
import React,{useState,useRef} from 'react'
import Image from 'next/image'




const Footer = () => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <Image src={assets.logo} alt='' className='w-36 mx-auto mb-2'/>


            <div className='w-max flex items-center gap-2 mx-auto'>
                <Image src={assets.mail_icon} alt='' className='w-6'/>priyanshubhati.dev@gmail.com
            </div>
        </div>


        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>© 2025 PB Mark. All rights reserved</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a href="https://www.instagram.com/priyanshu_bhati23/" target="_blank">Instagram</a></li>
                <li><a href="https://www.instagram.com/priyanshu_bhati23/" target="_blank">X</a></li>
                <li><a href="https://github.com/Priyanshu-bhati23" target="_blank">Github </a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer