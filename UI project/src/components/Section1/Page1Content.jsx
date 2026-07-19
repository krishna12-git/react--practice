import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = () => {
  return (
    <div className='py-18 flex  items-center justify-between h-[90vh] bg-yellow-500 px-10'>
        <LeftContent />
        <RightContent />
    </div>
  )
} 

export default Page1Content