'use client';
import Image from 'next/image';

const About = () => (
  <section className='flex flex-col items-center mb-8'  >
    <div className="flex flex-row items-center justify-between pl-8 pr-8 pt-16 space-x-6">
      <Image className='mb-[180px]' src="/card.png" width={260} height={283} />
      <Image className='mb-[80px]' src="/card1.png" width={260} height={283} />
      <Image src="/card2.png" width={260} height={283} />
      <Image className='mb-[80px]' src="/card3.png" width={260} height={283} />
      <Image className='mb-[180px]' src="/card4.png" width={260} height={283} />
    </div>
    <div className=' w-[979px] h-[578px] bg-[#C9F06A] rounded-lg font-iowan'>
      <div className='font-inter flex flex-col items-center p-12 text-[32px] text-[#000000] font-medium'>
      <p className='font-bold'>Fundraising on Resilient aid</p>
      <p className='font-bold'> Takes just a few minutes</p>
      </div>
      <div className='flex flex-row items-center justify-between '>
        <div className='flex flex-col items-center pl-10 pr-10 pt-20'>
          <Image src="/happiness.png" width={94} height={100}/>
          <div className='p-4 text-[20px] text-[#000000] font-medium'>Give Happiness</div>
          <div className='text-center text-[14px] text-[#000000] font-regular w-[225px] '>Giving happiness to others is one of the most fulfilling things you can do in life.</div>
        </div>
        <div className='flex flex-col items-center pl-10 pr-10 pt-20'>
          <Image src="/heart.png" width={94} height={100}/>
          <div className='p-4 text-[20px] text-[#000000] font-medium'>Share Love</div>
          <div className='text-center text-[14px] text-[#000000] font-regular w-[225px] '>When you share love with those around you, you create a ripple effect of kindness.</div>
        </div>
        <div className='flex flex-col items-center pl-10 pr-10 pt-20'>
          <Image src="/society.png" width={94} height={100}/>
          <div className='p-4 text-[20px] text-[#000000] font-medium'>Build Socially</div>
          <div className='text-center text-[14px] text-[#000000] font-regular w-[225px] '>Building Socially requires not just connecting with others, but also actively contributing.</div>
        </div>
      </div>
     
      

    </div>
    <div className='pt-12'>
        <Image src="/ope.png" width={1724} height={334}/>
    </div>

    <div className="flex flex-col items-start justify-start ">
    
    <p className="text-center font-iowan font-20 text-secondary-white pt-[10%]">WHAT IS <span className=' text-green font-iowan text-green '>RASILIENT AID</span> ?</p>
    <hr className="w-[22rem] h-0.5 mt-1 border-0  rounded bg-light-green"></hr>
    <p className='text-start leading-[17px]  w-[1082px] font-kross text-[14px] text-secondary-white pt-6'>Resilient aid is sustainable support that empowers communities<span className=' text-green font-kross text-[14px] text-green '>to withstand and recover from challenges,  </span> fostering long-term self-sufficiency and growth. <span className='text-green font-kross text-[14px] font-green '>Its about providing resources, skills, and infrastructure that endure,</span> 
  
        ensuring lasting resilience in the face of adversity.</p>
    <div className="bg-[url('/Polygon logo.png')]">

    </div>

    <p className="text-start font-iowan font-20 text-secondary-white pt-[6%]">WHY TO USE <span className=' text-green font-iowan text-green '>RASILIENT AID</span> ?</p>
    <hr className="w-[22rem] h-0.5 mt-1 border-0  rounded bg-light-green"></hr>
    <p className='leading-[17px]   text-start w-[1082px] font-kross text-[14px] text-green pt-6'>Resilient aid is essential because it doesnt just offer short-term relief; it equips communities to bounce back stronger from adversity. By using resilient aid, we invest in lasting solutions that create self-reliant, empowered, and self-sustaining communities, ensuring a brighter future for all.</p>
    
    
    <p className="text-start font-iowan font-20 text-secondary-white pt-[6%] ">FOR WHOM IS <span className=' text-green font-iowan text-green '>RASILIENT AID</span> ?</p>
    <hr className="w-[22rem] h-0.5 mt-1 border-0  rounded bg-light-green"></hr>
    <p className='leading-[17px]   text-start w-[1082px] font-kross text-[14px] text-green pt-6 pb-[6%]'>Resilient aid is for communities and individuals facing adversity, from natural disasters to economic challenges. Its for anyone seeking sustainable support to build resilience and secure a better, more self-reliant future.</p>
    </div>
  
    
   
  
 

  
  </section>
);

export default About;