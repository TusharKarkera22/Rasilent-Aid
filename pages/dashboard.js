'use client'
import styled from 'styled-components';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PaidIcon from '@mui/icons-material/Paid';
import EventIcon from '@mui/icons-material/Event';
import Image from 'next/image';
import { ethers } from 'ethers';
import CampaignFactory from '../artifacts/contracts/Campaign.sol/CampaignFactory.json'
import { useEffect, useState } from 'react';
import {Footer, Navbar} from '../components'
import Link from 'next/link';

export default function Dashboard() {
  const [campaignsData, setCampaignsData] = useState([]);

  useEffect(() => {
    const Request = async () => {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const Web3provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = Web3provider.getSigner();
      const Address = await signer.getAddress();

      const provider = new ethers.providers.JsonRpcProvider(
        process.env.NEXT_PUBLIC_RPC_URL
      );
  
      const contract = new ethers.Contract(
        process.env.NEXT_PUBLIC_ADDRESS,
        CampaignFactory.abi,
        provider
      );
  
      const getAllCampaigns = contract.filters.campaignCreated(null, null, Address);
      const AllCampaigns = await contract.queryFilter(getAllCampaigns);
      const AllData = AllCampaigns.map((e) => {
      return {
        title: e.args.title,
        image: e.args.imgURI,
        owner: e.args.owner,
        timeStamp: parseInt(e.args.timestamp),
        amount: ethers.utils.formatEther(e.args.requiredAmount),
        address: e.args.campaignAddress
      }
      })  
      setCampaignsData(AllData)
    }
    Request();
  }, [])

  return (
    <>
    <Navbar/>
    <div className='flex flex-col flex-grow-1 min-h-[100vh] justify-between bg-primary-black'>
    <div className='flex flex-col align-center items-center justify-center bg-primary-black pb-6'>
    <p className='font-iowan font-bold text-[20px] my-4 text-secondary-white bg-primary-black'>My DASHBOARD</p>
    
    <HomeWrapper className='bg-white flex flex-col items-center pb-6'>
      
      {/* Filter Section */}
      

      {/* Cards Container */}
      <CardsWrapper className='flex flex-wrap ml-12 justify-normal mt-12 gap-x-8 gap-y-12'>

      {/* Card */}
      {campaignsData.map((e) => {
         
        return (
          <Card className="h-[430px] w-[335px] bg-white" key={e.title}>
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
    </div>
    
    <Footer  />
    
    </div>
    </>
  )
}



const HomeWrapper = styled.div`
flex-grow: 1;
 
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
