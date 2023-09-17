'useclient'

import styled from 'styled-components';
import { FormState } from '../Form';
import { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import {TailSpin} from 'react-loader-spinner'
import {create as IPFSHTTPClient} from 'ipfs-http-client';

const projectId = process.env.NEXT_PUBLIC_IPFS_ID
const projectSecret = process.env.NEXT_PUBLIC_IPFS_KEY
const auth = 'Basic ' + Buffer.from(projectId + ":" + projectSecret).toString('base64')

const client = IPFSHTTPClient({
  host:'ipfs.infura.io',
  port:5001,
  protocol: 'https',
  headers: {
    authorization: auth
  }
})

const FormRightWrapper = () => {
  const Handler = useContext(FormState);

  const [uploadLoading, setUploadLoading] = useState(false);
  const [uploaded, setUploaded] = useState(false);

  const uploadFiles = async (e) => {
    e.preventDefault();
    setUploadLoading(true);

    if(Handler.form.story !== "") {
      try {
        const added = await client.add(Handler.form.story);
        Handler.setStoryUrl(added.path)
      } catch (error) {
        toast.warn(`Error Uploading Story`);
      }
    }


      if(Handler.image !== null) {
          try {
              const added = await client.add(Handler.image);
              Handler.setImageUrl(added.path)
          } catch (error) {
            toast.warn(`Error Uploading Image`);
          }
      }

      setUploadLoading(false);
      setUploaded(true);
      Handler.setUploaded(true);
      toast.success("Files Uploaded Sucessfully")
}

  return (
    <FormRight>
      <FormInput  className='flex flex-col mt-5 border-dashed text-secondary-white'>
        <FormRow>
          <RowFirstInput>
            <label className='font-iowan text-[16px] text-secondary-white'>Required Amount</label>
            <Input className='mt-3 p-[15px] ml-4 bg-white font-iowan border border-black border-2  border-#D9D9D9 rounded' onChange={Handler.FormHandler} value={Handler.form.requiredAmount} name="requiredAmount" type={'number'} placeholder='Required Amount'></Input>
          </RowFirstInput>
          <RowSecondInput className='mt-6'>
            <label className='font-iowan text-[16px] text-secondary-white'>Choose Category</label>
            <Select  className=' my-2 bg-white space-x-2 px-[70px] py-[15px] text-secondary-white font-iowan border border-black ml-6 border-2  border-#D9D9D9 rounded' onChange={Handler.FormHandler} value={Handler.form.category} name="category">
              <option>Education</option>
              <option>Health</option>
              <option>Social</option>
              <option>Startup</option>
              <option>Personal</option>
              <option>Creative</option>
              <option>Others</option>
            </Select>
          </RowSecondInput>
        </FormRow>
      </FormInput>
      {/* Image */}
      <div className='flex flex-row'>
      <FormInput className='mt-3 text-secondary-white'>
        <label className='font-iowan text-[16px] text-secondary-white'>Select Image</label>
        <Image className='mt-3 p-[15px] font-iowan border border-black ml-5 border-2 bg-white border-black rounded' alt="dapp" onChange={Handler.ImageHandler} type={'file'} accept='image/*'>
        </Image>
      </FormInput>
      {uploadLoading == true ? <Button><TailSpin color='#D9D9D9' height={20} /></Button> :
        uploaded == false ? 
        <Button  className='mt-8  items-center cursor-ponter ml-4 w-[200px] bg-green p2 text-sm font-iowan
         rounded-lg ' onClick={uploadFiles}>
          Upload Files to IPFS
        </Button>
        : <Button style={{cursor: "no-drop"}}>Files uploaded Sucessfully</Button>
      }
      </div>
      <Button className='mt-6 ml-6 bg-green cursor-pointer  space-x-2   px-2 py-2.5 text-sm focus:outline-none  font-iowan 
         rounded-lg' onClick={Handler.startCampaign}>
        Start Campaign
      </Button>
    </FormRight>
  )
}

const FormRight = styled.div`
  width:45%;
`

const FormInput = styled.div`
  
`

const FormRow = styled.div`
  
`

const Input = styled.input`

` 

const RowFirstInput = styled.div`
 
`

const RowSecondInput = styled.div`
 
`

const Select = styled.select`
 
`

const Image = styled.input`
  
  &::-webkit-file-upload-button {
    padding: 15px ;
    background-color: ${(props) => props.theme.bgSubDiv} ;
    color: ${(props) => props.theme.color} ;
    
    font-weight:bold ;
  }  
`

const Button = styled.button`

`

export default FormRightWrapper