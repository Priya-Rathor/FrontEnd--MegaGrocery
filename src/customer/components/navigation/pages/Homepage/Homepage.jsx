import React from 'react'
import MainCarosel from '../../HomeCarocel/MainCarosel'
import HomeSectionCarocel from '../../../HomeSectionCarocel/HomeSectionCarocel';
import { fruits } from '../../../../../Data/fruits';
import HomeLast from '../../HomeLast';
const Homepage = () => {
  return (
    <div>
        <MainCarosel />

        <div className='space-y-10 py-20 flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCarocel data={fruits} sectionName={"Fruits"}/>
            <HomeSectionCarocel data={fruits} sectionName={"Vagetable"}/>
            <HomeSectionCarocel data={fruits} sectionName={"Vagetable"}/>
            
            <HomeLast />
            
            
        </div>
    </div>
  )
}

export default Homepage;