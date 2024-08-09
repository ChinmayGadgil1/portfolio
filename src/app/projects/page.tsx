import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

function page() {
  return (
    <>
    
    <div className='hidden sm:flex justify-center items-center'>

      <div className='flex flex-col justify-center items-center gap-5 m-4 w-[60vw] md:w-[40vw]'>

        <div className='flex flex-col justify-center items-center border border-[#702eff] rounded-xl p-10'>
          <div className='text-6xl font-extrabold p-4'>Sticker-Hive</div>
          <Carousel className='border p-4 flex justify-center items-center select-none max-w-[25vw]'>
            <CarouselContent>
              <CarouselItem className='flex justify-center items-center'><Image src={'/sticker-hive.png'} alt='Sticker Hive' width={400} height={200} /></CarouselItem>
              <CarouselItem className='flex justify-center items-center'><Image src={'/sticker-hive-2.png'} alt='Sticker Hive' width={400} height={200} /></CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          <div className=' text-2xl p-4'>Sticker Hive is your one-stop solution for creating custom keyboard key stickers with ease. Our platform allows you to design and personalize stickers for your keyboard keys without the need for any editing software. Whether you&apos;re a gamer, a professional, or just someone who loves a unique setup, Sticker Hive offers endless customization options to make your keyboard truly yours.
          </div>
          <div >
          <div className='flex flex-col m-4 items-center'>
          <p className='text-2xl font-extrabold'>Link:</p>
          <Link href={'http://sticker-hive.vercel.app/'} className='text-xl font-bold'
          >http://sticker-hive.vercel.app</Link>
          </div>
          <div className='flex flex-col m-4 items-center'>
          <p className='text-2xl font-extrabold'>Github Repo:</p>
          <Link href={'https://github.com/ChinmayGadgil1/sticker-hive'} className='text-xl font-bold'
          >https://github.com/ChinmayGadgil1/sticker-hive</Link>
          </div>
          </div>
          
        </div>


      </div>
    </div>




    {/* MOBILE VERSION */}
    <div className='flex w-screen sm:hidden justify-center items-center mt-[40px]'>

      <div className='w-[75vw] flex flex-col justify-center items-center gap-2 m-2  '>

        <div className='flex flex-col justify-center items-center border border-[#702eff] rounded-xl p-2'>
          <div className='text-6xl font-extrabold p-4'>Sticker-Hive</div>
          <Carousel className='border p-4 flex justify-center items-center select-none max-w-[50vw]'>
            <CarouselContent>
              <CarouselItem className='flex justify-center items-center'><Image src={'/sticker-hive.png'} alt='Sticker Hive' width={400} height={200} /></CarouselItem>
              <CarouselItem className='flex justify-center items-center'><Image src={'/sticker-hive-2.png'} alt='Sticker Hive' width={400} height={200} /></CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          <div className=' text-xl p-4'>Sticker Hive is your one-stop solution for creating custom keyboard key stickers with ease. Our platform allows you to design and personalize stickers for your keyboard keys without the need for any editing software. 
          </div>
          <div >
          <div className='flex flex-col m-4 items-center'>
          <p className='text-2xl font-extrabold'>Link:</p>
          <Link href={'http://sticker-hive.vercel.app/'} className='text-xl font-bold'
          >http://sticker-hive.vercel.app</Link>
          </div>
          <div className='flex flex-col m-4 items-center'>
          <p className='text-2xl font-extrabold'>Github Repo:</p>
          <Link href={'https://github.com/ChinmayGadgil1/sticker-hive'} className='text-xl font-bold'
          >https://github.com/ChinmayGadgil1/sticker-hive</Link>
          </div>
          </div>
          
        </div>


      </div>
    </div>

    </>
  )
}

export default page