'use client'
import { Footer, Navbar } from '../components';
import Form from '../components/Form/Form';

const createcampaign = () => {
  return (
    <div className='bg-primary-black '>
       <Navbar/>
    <div className='bg-primary-black flex flex-col items-center pb-6'>
     
      <Form />
    </div>
    
    <Footer />
    </div>
  )
}

export default createcampaign