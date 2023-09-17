'use client';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
const Hero = () => (


  <section className='font-iowan'>
    <div className='flex justify-center pt-20  text-[#000000] text-[64px] '>Aid for Resilience </div>
        <div className='flex justify-center pt-5 text-[#000000] text-[64px] '>Aid for Life </div>
        <div className='flex justify-center pt-5 font- text-[#000000] text-[20px]'>We raise funds for resilient aid, ensuring communities thrive long</div>
        <div className='flex justify-center  text-[#000000] text-[20px]'>after adversity strikes. Join us in building a resilient world.</div>
        <div className='flex justify-center pt-5 space-x-8'>
        <button className='w-[153px] h-[45px] bg-[#000000] text-[#FFFFFF] rounded-[30px]'>Donate Now</button>
        <button className='w-[153px] h-[45px] bg-[#C0C0C0] text-[#000000] rounded-[30px]'>View Campaign</button>
        </div>
  </section>
);


export default Hero;