import React from 'react'
import Image from 'next/image'
import Button from '../UI/Buttons/Button'

type Props = {}

const ProfileCard = (props: Props) => {
  return (
    <div className='w-full mt-4'>
      <div className='flex items-center justify-between'>
        <div className='flex justify-center items-center gap-4 ml-4'>
          <Image className='rounded-full bg-indigo-900 p-2' src='/assets/images/hacker.png' alt='avatar' width={100} height={100} />
          <div>
          <h1>TraaxXD</h1>
          <small>@traaxxd</small>
          </div>
        </div>
        <div className='flex justify-center items-center gap-2 mr-4'>
          <Button onClick={()=> console.log("Clicked")}>Follow</Button>
          <Button onClick={()=> console.log("Clicked")}>Subscribe</Button>
        </div>
      </div>
      <div></div>

    </div>
  )
}

export default ProfileCard