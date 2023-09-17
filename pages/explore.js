

'use client'
import styled from 'styled-components';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PaidIcon from '@mui/icons-material/Paid';
import EventIcon from '@mui/icons-material/Event';
import Image from 'next/image';
import { ethers } from 'ethers';
import CampaignFactory from '../artifacts/contracts/Campaign.sol/CampaignFactory.json'
import { useState } from 'react';
import Link from 'next/link'
import { Footer, Navbar } from '../components';


export default function Index({AllData, HealthData, EducationData, SocialData, StartupData, PersonalData, CreativeData, OthersData}) {
  
  
  const [filter, setFilter] = useState(AllData);
  
  return (
    <>
    <Navbar/>
    <HomeWrapper className='bg-white flex flex-col items-center pb-6'>
      
      {/* Filter Section */}
      

      {/* Cards Container */}
      <CardsWrapper className='flex flex-wrap ml-12 justify-normal mt-12 gap-x-8 gap-y-12'>

      {/* Card */}
      {filter.map((e) => {
         
        return (
          <Card className="h-[430px] w-[335px]" key={e.title}>
          <CardImg className='w-[302px]  h-[202px] relative '>
            <Image 
              className='object-cover  align-center rounded-lg my-2  mx-4'
              alt="RaiseRocket dapp"
              layout='fill' 
              src={"https://raiserocket.infura-ipfs.io/ipfs/" + e.image} 
            />
          </CardImg>
          <Title className='font-iowan text-[20px] uppercase text-secondary-white cursor-pointer ml-4 mt-6 '>
            {e.title}
          </Title>
          <CardData className='font-iowan text-[12px] flex ml-3 space-x-2 mb-3 pt-2 relative'>
            <Text className='text-#828282 font-iowan text-secondary-white fixed bottom-[24%] left-[5%]'>Owner :</Text> 
            <Text className='text-green font-iowan fixed bottom-[24%] left-[18%]'>{e.owner.slice(0,6)}...{e.owner.slice(39)}</Text>
          </CardData>
          <CardData className='font-iowan text-[12px] flex ml-3 space-x-2 mb-3 relative'>
            <Text className='font-iowan text-secondary-white fixed bottom-[18%] left-[5%]'>Amount : </Text> 
            <Text className='font-iowan text-secondary-white fixed bottom-[18%] left-[20%]'>{e.amount } Matic</Text>
            
            
            {/* <ProgressBar>
            <ProgressFill style={{ width: `${progressPercentage}%` }}></ProgressFill>
          </ProgressBar> */}
          </CardData>
          <CardData className='font-iowan text-[12px] flex ml-3 space-x-2 relative'>
            <Text className=' fixed bottom-[10%] left-[5%]'><img src="Calendar.png"/></Text>
            <Text className='mt-1.5 fixed bottom-[12%] text-secondary-white left-[12%]'>{new Date(e.timeStamp * 1000).toLocaleString()}</Text>
          </CardData>
          <Link passHref href={'/'+ e.address}><Button className='flex felx-row p-2   right-5 transition-all duration-300 cursor-pointer fixed bottom-3
         items-center bg-[#A9CB5B] text-white space-x-2  text-sm font-iowan
         rounded-xl w-[140px] h-[40px]'>
            Go to Campaign<Image className='pl-1' src="/arrow.png" width={20} height={20}/>
          </Button></Link>
        </Card>
        )
      })}
        {/* Card */}

      </CardsWrapper>
    </HomeWrapper>
    <Footer/>
    </>
   
  )
}



export async function getStaticProps() {
  const provider = new ethers.providers.JsonRpcProvider(
    process.env.NEXT_PUBLIC_RPC_URL
  );

  const contract = new ethers.Contract(
    process.env.NEXT_PUBLIC_ADDRESS,
    CampaignFactory.abi,
    provider
  );
  
 
  const getAllCampaigns = contract.filters.campaignCreated();
  const AllCampaigns = await contract.queryFilter(getAllCampaigns);

  const  AllData = AllCampaigns.map((e) => {
  
    
    return {
      title: e.args.title,
      image: e.args.imgURI,
      owner: e.args.owner,
      timeStamp: parseInt(e.args.timestamp),
      amount: ethers.utils.formatEther(e.args.requiredAmount),
      
      address: e.args.campaignAddress

    }
  });

  const getHealthCampaigns = contract.filters.campaignCreated(null,null,null,null,null,null,'Health');
  const HealthCampaigns = await contract.queryFilter(getHealthCampaigns);
  const HealthData = HealthCampaigns.map((e) => {
    return {
      title: e.args.title,
      image: e.args.imgURI,
      owner: e.args.owner,
      timeStamp: parseInt(e.args.timestamp),
      amount: ethers.utils.formatEther(e.args.requiredAmount),
      address: e.args.campaignAddress
    }
  });

  const getEducationCampaigns = contract.filters.campaignCreated(null,null,null,null,null,null,'education');
  const EducationCampaigns = await contract.queryFilter(getEducationCampaigns);
  const EducationData = EducationCampaigns.map((e) => {
    return {
      title: e.args.title,
      image: e.args.imgURI,
      owner: e.args.owner,
      timeStamp: parseInt(e.args.timestamp),
      amount: ethers.utils.formatEther(e.args.requiredAmount),
      address: e.args.campaignAddress
    }
  });

  const getSocialCampaigns = contract.filters.campaignCreated(null,null,null,null,null,null,'Social');
  const SocialCampaigns = await contract.queryFilter(getSocialCampaigns);
  const SocialData = SocialCampaigns.map((e) => {
    return {
      title: e.args.title,
      image: e.args.imgURI,
      owner: e.args.owner,
      timeStamp: parseInt(e.args.timestamp),
      amount: ethers.utils.formatEther(e.args.requiredAmount),
      address: e.args.campaignAddress
    }
  });

  const getStartupCampaigns = contract.filters.campaignCreated(null,null,null,null,null,null,'Startup');
  const StartupCampaigns = await contract.queryFilter(getStartupCampaigns);
  const StartupData = StartupCampaigns.map((e) => {
    return {
      title: e.args.title,
      image: e.args.imgURI,
      owner: e.args.owner,
      timeStamp: parseInt(e.args.timestamp),
      amount: ethers.utils.formatEther(e.args.requiredAmount),
      address: e.args.campaignAddress
    }
  });

  const getPersonalCampaigns = contract.filters.campaignCreated(null,null,null,null,null,null,'Personal');
  const PersonalCampaigns = await contract.queryFilter(getPersonalCampaigns);
  const PersonalData = PersonalCampaigns.map((e) => {
    return {
      title: e.args.title,
      image: e.args.imgURI,
      owner: e.args.owner,
      timeStamp: parseInt(e.args.timestamp),
      amount: ethers.utils.formatEther(e.args.requiredAmount),
      address: e.args.campaignAddress
    }
  });const getCreativeCampaigns = contract.filters.campaignCreated(null,null,null,null,null,null,'Creative');
  const CreativeCampaigns = await contract.queryFilter(getCreativeCampaigns);
  const CreativeData = CreativeCampaigns.map((e) => {
    return {
      title: e.args.title,
      image: e.args.imgURI,
      owner: e.args.owner,
      timeStamp: parseInt(e.args.timestamp),
      amount: ethers.utils.formatEther(e.args.requiredAmount),
      address: e.args.campaignAddress
    }
  });
  const getOthersCampaigns = contract.filters.campaignCreated(null,null,null,null,null,null,'Others');
  const OthersCampaigns = await contract.queryFilter(getOthersCampaigns);
  const OthersData = OthersCampaigns.map((e) => {
    return {
      title: e.args.title,
      image: e.args.imgURI,
      owner: e.args.owner,
      timeStamp: parseInt(e.args.timestamp),
      amount: ethers.utils.formatEther(e.args.requiredAmount),
      address: e.args.campaignAddress
    }
  });




  return {
    props: {
      AllData,
      HealthData,
      EducationData,
      SocialData,
      StartupData,
      PersonalData,
      CreativeData,
      OthersData
    },
    revalidate: 10
  }
}
import React from 'react'






const HomeWrapper = styled.div`
  
`
const FilterWrapper = styled.div`
  
`
const Category = styled.div`
 
`
const CardsWrapper = styled.div`

`
const Card = styled.div`
background:#FFFFFF
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4.5px );
-webkit-backdrop-filter: blur( 4.5px );
border-radius: 30px;
border: 1px solid rgba(192, 192, 192, 0.50);
 
`
const CardImg = styled.div`
 
`
const Title = styled.h2`
 
`
const CardData = styled.div`
  
  `
const Text = styled.p`

`
const Button = styled.button`

`
const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  background-color: #ccc;
  border-radius: 5px;
  margin-top: 10px;
`;

const ProgressFill = styled.div`
  height: 100%;
  background-color: green; // Change this to your desired color
  border-radius: 5px;
`;