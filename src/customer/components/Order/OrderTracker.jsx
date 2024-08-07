import { Label } from '@mui/icons-material'
import { Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'

const steps=[
  "Placed",
  "Order Confirmed",
  "Shipped",
  "Out For Delivery",
  "Delivered"
]
  



const OrderTracker = ({activeStap}) => {
  return (
    <div className='w-full'>
      <Stepper activeStep={activeStap} alternativeLabel>
      {steps.map((label)=> <Step>
        <StepLabel sx={{color:"#9155FO",fontSize:"44px"}}>{label}</StepLabel>
      </Step>)}
      </Stepper>
    </div>
  )
}

export default OrderTracker
