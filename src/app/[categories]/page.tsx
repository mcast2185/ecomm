import Image from "next/image";
import { categoryInterface, categoryParams } from "../interface";
import { client } from "../lib/sanity";
import Link from "next/link";


export const revalidate = 60;
async function generateStaticParams() {
  const query = `
    *[_type == 'product']{
      categories
    }
  `;

  const data = await client.fetch(query);
  const category = data.map((categories: any) => categories.categories)

  return category.map((categories: any) => ({categories}));
};


const CategoryPage = async ({ params: { categories } }: categoryParams) => {
  const categoryData: categoryInterface[] = await client.fetch(`
    *[_type == 'product' && categories->title == "${categories}"]{
      _id,
      price,
      name,
      description,
      "slug": slug.current,
      "categoryName": categories->title,
      "imageUrl": images[0].asset->url
    }
  `)

  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
        <div className='flex justify-between items-center'>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our Newest Gear
          </h2>
        </div>
        <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>

          {categoryData.map((product) => (
            <div className='group relative' key={product._id}>
              <div className='aspect-square w-full overflow-hidden object-contain rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80'>
                <Image src={product.imageUrl}
                  alt="New product gear image"
                  width={300}
                  height={300}
                  className="w-[300px] h-[300px] object-cover object-center lg:h-[300px] lg:w-[300px]" />
              </div>
              <div className='mt-4 flex justify-between'>
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link href={`/product/${product.slug}`}>
                      {product.name}
                    </Link>
                  </h3>
                  <p className='mt-1 text-sm text-gray-500'>
                    {product.categoryName}
                  </p>
                </div>
                <p className='text-sm font-md text-gray-900'>
                  ${product.price}.00
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default CategoryPage