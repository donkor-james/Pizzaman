import React from 'react'
import sellers from './../assets/truck.jpg'
import SellersData from '../Data/Sellers'
const BestSellers = () => {
  return (
    <div className='relative w-screen h-screen'>
      <div className="absolute top-0 left-0 w-full h-full overflw-x-hidden"
        style={{
            backgroundImage: `url(${sellers})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        
        }}
        >
     

       
       </div>
       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80"></div>
          <div className='relative flex flex-col justify-center items-center pt-20'>
            <h4 className='font-custom font-bold text-6xl text-white'>Best Sellers</h4> 
            <div className='relative flex flex-row gap-10 jsu'>
              {SellersData.map(seller => (
                <div className='' key={seller.id} >
                  <div className='h-64 w-64'
                  style={{
                    backgroundImage:`url(${seller.img})`,
                    backgroundRepeat:'no-repeat',
                    backgroundSize:'contain'
                  }}
                  >
                    
                  </div>
                  <span>{seller.title}</span>
                  <span>${seller.price}</span>
                </div>
              ))}

            </div>
          </div>
    </div>
  )
}

export default BestSellers
