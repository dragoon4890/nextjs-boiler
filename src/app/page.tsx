
import Navbar from '@/components/global/navbar'
import { InfiniteMovingCards } from '@/components/infinite-moving-cards'
import React from 'react'
import { clients, products } from '../../utils/constant'
import { HeroParallax } from '@/components/connect-parallax'
 
function page() {
  return (
    <main>
      <Navbar/>
     <InfiniteMovingCards className="md:mt-[18rem] mt-[-100px]"
        items={clients}
        direction="right"
        speed="slow"/>
<section>
        <HeroParallax products={products}></HeroParallax>
      </section>
    </main>
  )
}

export default page
