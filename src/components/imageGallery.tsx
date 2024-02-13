'use client'

import { imgProps } from "@/app/interface";
import { urlFor } from "@/app/lib/sanity";
import Image from 'next/image';
import { useState } from "react";


const ImageGallery = ({images}: imgProps) => {
  const [resizedImg, setResizedImg] = useState(images[0]);
  const handleImgSize = (image: any) => {
    setResizedImg(image);
  };

  return (
    <div className='grid gap-4 lg:grid-cols-5'>
      <div className='order-last flex gap-4 lg:order-none lg:flex-col'>
        {images.map((image: any, index: any) => (
          <div className='overflow-hidden rounded-lg bg-gray-100' key={index}>
            <Image src={urlFor(image).url()} 
              width={400} 
              height={400} 
              alt={`product image ${image.title}`}
              onClick={() => handleImgSize(image)}
              className="h-full w-full object-cover object-center cursor-pointer"/>
          </div>
        ))}
      </div>
      <div className='relative overflow-hidden rounded-lg  lg:col-span-4'>
        <Image src={urlFor(resizedImg).url()} 
          alt={`resized large image ${resizedImg.title}`} 
          width={800} 
          height={800} 
          className=" w-full object-cover object-center"/>
        <span className='absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white' >
          Sale
        </span>
      </div>
    </div>
  )
};

export default ImageGallery;