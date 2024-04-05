
import Navbar from '@/components/global/navbar'
import { InfiniteMovingCards } from '@/components/infinite-moving-cards'
import React from 'react'
import { clients, products } from '../../utils/constant'
import { HeroParallax } from '@/components/connect-parallax'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import { CardBody, CardContainer, CardItem } from '@/components/3d-card'
import { CheckIcon } from 'lucide-react'
 
function page() {
  return (
    <main>
      <Navbar/>
      <section className='flex flex-row items-center'>
     
        </section>
<section>
        <HeroParallax products={products}></HeroParallax>
      </section>


      <section className='flex items-center flex-row justify-center gap-4'>
      

       

           <CardContainer className="inter-var ">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white "
              >
                
        <Image src="/1.png"
        className=''
      width={500}
      height={500}
      alt="Picture of the author"/>
              </CardItem>
              
            </CardBody>
            </CardContainer>
          <aside className='flex flex-col gap-8 mx-8 '>
            <h1 className='text-6xl'> Pike Jordans</h1>
          <Button className='w-52'>Shop now</Button>
          </aside>
           
      </section>
      
      <section className='flex items-center flex-row-reverse justify-center gap-4'>
      

       

           <CardContainer className="inter-var ">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white "
              >
                
        <Image src="/1.png"
        className=''
      width={500}
      height={500}
      alt="Picture of the author"/>
              </CardItem>
              
            </CardBody>
            </CardContainer>
          <aside className='flex flex-col gap-8 mx-8 '>
            <h1 className='text-6xl'> Pike Jordans</h1>
          <Button className='w-52'>Shop now</Button>
          </aside>
           
      </section>

      <section className='flex items-center flex-row justify-center gap-4'>
      

       

           <CardContainer className="inter-var ">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white "
              >
                
        <Image src="/1.png"
        className=''
      width={500}
      height={500}
      alt="Picture of the author"/>
              </CardItem>
              
            </CardBody>
            </CardContainer>
          <aside className='flex flex-col gap-8 mx-8 '>
            <h1 className='text-6xl'> Pike Jordans</h1>
          <Button className='w-52'>Shop now</Button>
          </aside>
           
      </section>
      <InfiniteMovingCards className="md:mt-[18rem] mt-[-100px] "
        items={clients}
        direction="right"
        speed="slow"/>
    </main>
  )
}

export default page
