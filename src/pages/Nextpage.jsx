import React from 'react'
import Navbar from '../components/molecules/Navbar'

export default function Nextpage() {
  return (
    <>
    <Navbar type="loggedin" />
    <div className='bg-background-primary mt-40'>
        <h1 className='text-4xl'>"Thank you for submitting your request"</h1>
        <p className='mt-5 text-xl'>Your shipment id: </p>
        <p className='mt-5 text-xl'>Please visit this page one day before your shipment date </p>
    </div>
    </>
  )
}
