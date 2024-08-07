import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
  const navigate=useNavigate();
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className='p-6 shadow-md shadow-black hover:shadow-2xl border'>
      <Grid container spacing={2} sx={{justifyContent:"space-between"}} >
        <Grid item xs={6}>
            <div className='flex cursor-pointer'>
                <img className='w-[5rem] h-[5rem] object-cover object-top'  src="https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/24d23c9b-6dcd-4b3e-bc23-9301fde0ca64_425x425.jpg" alt="" />
                <div className='ml-5 space-y-2'>
                    <p>Avocado</p>
                    <p className='opacity-50 text-xs font-sembold'>Weight:500g</p>
                    <p className='opacity-50 text-xs font-sembold'>Pack 3Pc (Approx 550-700G)</p>              
                </div>
            </div>
        </Grid>
        <Grid item xs={2}>
            <p>1063</p>
        </Grid>
        <Grid item xs={4}>
           {true &&
           <div>
            <p>
            <AdjustIcon sx={{width:"15px",height:"15px"}} className='text-green-600 mr-2 text-sm'/>
                <span>
                    Delivered On march 03
                </span>
            </p>
            <p className='text-xs'>Your Item Has Been Delivered</p>
           </div>
           }
           {false && <p>
                <span>
                Delivered On march 03
                </span>
            </p> }
        </Grid>
      </Grid>
    </div>
  )
}

export default OrderCard
