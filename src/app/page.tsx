
import Navbar from '@/components/global/navbar'
import { InfiniteMovingCards } from '@/components/infinite-moving-cards'
import React from 'react'
import { clients, products } from '../../utils/constant'
import { HeroParallax } from '@/components/connect-parallax'
import { Button } from '@/components/ui/button'
 
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


      <section className='flex items-center flex-col gap-4'>
        <Button>Shop now</Button>
      </section>
    </main>
  )
}

export default page
