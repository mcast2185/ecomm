import { client } from '@/app/lib/sanity';
import React from 'react';
import { fullProduct, productParams } from '@/app/interface';
import ImageGallery from '@/components/imageGallery';
import { Button } from '@/components/ui/button';
import { Star, TagIcon, Truck } from 'lucide-react';
import AddToBag from '@/components/addToBag';


export const revalidate = 60;
export async function generateStaticParams() {
  const query = `*[_type == 'product']{
    slug
  }`;
  const slugs= await client.fetch(query);
  const slugRoutes = slugs.map((slug: any) => slug.slug.current);

  return slugRoutes.map((slug: any) => ({
    slug
  }));
};


async function ProductPage({ params: { slug } }: productParams){
// async function ProductPage({ params }: productParams) {
  const productData: fullProduct = await client.fetch(`
    *[_type == 'product' && slug.current == "${slug}"][0]{
      _id,
      price,
      name,
      images,
      description,
      "slug": slug.current,
      "categoryName": categories->title,
      "imageUrl": images[0].asset->url,
      price_id
    }
  `);
  // const productData: fullProduct = await getData(params.slug);


  return (

    <div className="bg-white">
      <div className='mx-auto max-w-screen-xl px-4 md:px-8' >
        <div className='grid gap-8 md:grid-cols-2' >
          <ImageGallery images={productData.images}/>
          <div className='md:py-8'>
            <div className='mb-2 md:mb-3' >
              <span className='mb-0.5 inline-block text-gray-500'>
                {productData.categoryName}
              </span>
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                {productData.name}
              </h2>
            </div>
            <div className='mb-6 flex items-center gap-3 md:mb-10'>
              <Button className="rounded-full gap-x-[5px]">
                <span className='text-sm'> 4.2 </span>  
                <Star className="h-5 w-5"/>
              </Button>
              <span className='text-sm text-gray-500 transition duration-100'>
                56 ratings 
              </span>
            </div>
            <div className='mb-4' >
              <div className='flex items-end gap-2'>
                <div className='flex items-center gap-x-1'>
                  <TagIcon className="h-5 w-5"/>
                  <span className='text-xl font-bold text-gray-800 md:text-2xl'>
                  ${productData.price}.00
                  </span>
                </div>
                <span className='mb-0.5 text-red-500 line-through text-sm' >
                  ${productData.price + 30}.00
                </span>
              </div>
              <span className='text-sm text-gray-500' >
                Incl. Vat plus shipping
              </span>
            </div>
            <div className='mb-6 flex items-center gap-2 text-gray-500' >
              <Truck />
              <span className='text-sm'>2-4 Day Shipping</span>
            </div>
            <div className='flex gap-2.5' >
              <AddToBag 
                key={productData._id}
                currency="USD" 
                description={productData.description} 
                image={productData.images[0]} 
                name={productData.name} 
                price={productData.price}
                price_id={productData.price_id}/>
              <Button variant={"secondary"}> Checkout Now</Button>
            </div>
            <p className='mt-12 text-base text-gray-500 tracking-wide'>
              {productData.description}
            </p>
          </div>
        </div>       
      </div>
    </div>
  );
};

export default ProductPage;