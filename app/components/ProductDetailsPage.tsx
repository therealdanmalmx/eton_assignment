import React from 'react'
import Image from 'next/image'
import { Product } from '@/interfaces';

const ProductDetailsPage = ({product}: Product) => {
    const baseUrl = 'https://staging-api.etonshirts.com';

  return (
    <div>
        <div className='flex justify-start gap-2 items-center overflow-scroll'>
            {product.productVariants[0].retailImages.gallery.map((image) => (
                <Image
                    key={image.mediaKey}
                    width={400}
                    height={500}
                    src={`${baseUrl}/v1/retail/image/1080/bynder/${image.mediaKey}/${product?.uri}.webp`}
                    alt={product?.name}
                    priority
                    className="min-h-[200px] object-cover"
                />
                ))}
        </div>
        <div className='text-md font-bold lg:mx-24 lg:my-10 m-8 space-y-4 lg:space-x-28 flex flex-col lg:flex-row justify-between items-start'>
            <div>
                <div>{product.name}
                    <p className='font-normal'>{product.productVariants[0].price.formattedPriceBeforeDiscount}</p>
                </div>
                <div className='my-2'>
                    {product.productVariants[0].isAvailableCustomMade && (
                        <div className='font-bold'>Can be custom made</div>
                    )}
                </div>
            </div>
            <div>
                <div>Color
                    <p className='font-normal'>{product.name.split(' ')[0]}</p>
                </div>
            </div>
            <div className='space-y-4'>
                {product.productVariants[0].bodyfitName && (
                    <div>{product.type}
                        <p className='font-normal'>{product.productVariants[0].bodyfitName}</p>
                    </div>
                )}
                <div>Article number
                    <p className='font-normal'>{product.productVariants[0].articleNumber}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetailsPage