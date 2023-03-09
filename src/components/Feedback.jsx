import React from 'react'

const Feedback = (props) => {
  const {feedbackDetails} = props

  return (
    <div className='ml-4'>
        <h2 className='mb-4 text-[22px] font-semibold'>Customer Complaints Details</h2>

        <h5 className='font-semibold mt-4'>Name of Customer</h5>
        <p>{feedbackDetails.fullName}</p>

        <h5 className='font-semibold mt-4'>Email</h5>
        <p>{feedbackDetails.email}</p>

        <h5 className='font-semibold mt-4'>Reason</h5>
        <p>{feedbackDetails.reason}</p>

        <h5 className='font-semibold mt-4'>Description</h5>
        <p>{feedbackDetails.description}</p>
    </div>
  )
}

export default Feedback