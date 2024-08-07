import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetail = () => {
  return (
    <div className='px:5 lg:px-20 pb-5'>
        <div> 
            <h1 className='font-semibold text-lg py-7'></h1>
            <AddressCard />
        </div>
     <div className='py-20'>
      <OrderTracker activeStap={3} />
     </div>
     <Grid className='space-y-5' container>
      {[1,1,1,1].map((item)=><Grid item container className='shadow-xl roumded-md p-5 border' sx={{alignItems:"center",justifyContent:'space-between'}}>
        <Grid item xs={6}>
          <div className='flex items-center space-x-4'>
            <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/24d23c9b-6dcd-4b3e-bc23-9301fde0ca64_425x425.jpg" alt="" />
            <div className='space-y-2 ml-5'>
              <p className='font-semibold'>Avocado</p>
              <p className='space-x-5 opacity-50 text-xs font-semibold '> <span>Pack 3Pc (Approx 550-700G)</span>
              <span>Weight:500g</span>
              </p>
              <p>Seller:AVOCADO VALUE PACK</p>
              <p>1063</p>
             
            </div>
          </div>

        </Grid>
        <Grid item>
          <Box sx={{color:deepPurple[500]}}>
            < StarBorderIcon sx={{fontSize:"2rem"}} className='px-2' />
            <span>Rate & Product</span>

          </Box>

        </Grid>
      </Grid>)}
      
     </Grid>
    </div>
  )
}

export default OrderDetail
