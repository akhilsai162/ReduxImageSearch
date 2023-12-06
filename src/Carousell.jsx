import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Carousell = () => {
  return (
   <>
   <Carousel autoPlay="true" infiniteLoop="true" > 
                <div>
                    <img src="images\home.webp" alt='not found' />
                    
                </div>
                <div>
                    <img src="images\lap.webp" alt='not found' />
                    
                </div>
                <div>
                    <img src="images\ponds.webp"alt='not found' />
                    
                </div>
                <div>
                    <img src="images\tv.webp" alt='not found' />
                </div>
                <div>
                    <img src="images\mobile.jpg" alt='not found' />
                </div>
            </Carousel>

   </>
  )
}

export default Carousell