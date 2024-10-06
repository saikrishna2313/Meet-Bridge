import React from 'react'

const RootLayout = ({children}) => {
  return (
   <section className='flex justify-center items-center h-screen w-full'>
    {children}
    
   </section>
   
  )
}

export default RootLayout