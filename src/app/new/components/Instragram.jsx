import Image from 'next/image'
import React from 'react'

export default function Instragram({image}) {
  return (
    <div className=''>      {/* Instagram Section */}
    
        
        {/* Instagram Image 1 */}
        <div>
          <Image src={image ?? '/placeholder-image.jpg'}
           alt='product'
            height={100}
             width={100}
           />
        </div>

     

     
   
    </div>
  )
}
