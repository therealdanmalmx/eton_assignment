import React from 'react'
import Image from 'next/image'
import { Product } from '@/interfaces';

const ProductDetailsPage = ({product}: Product) => {
    const baseUrl = 'https://staging-api.etonshirts.com';

  return (
    <div>
        <div className='flex justify-start gap-2 items-center overflow-scroll'>
            {product?.productVariants[0].retailImages.gallery.map((image) => (
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
        <div className='text-md font-bold mx-24 my-10 space-x-28 flex justify-between items-start'>
            <div>
                <div>{product?.name}<span className='font-normal'><p>{product?.productVariants[0].price.formattedPriceBeforeDiscount}</p></span></div>
                    {product?.productVariants[0].isAvailableCustomMade && (
                        <div className='text-2xl font-bold m-4'>Can be custom made</div>
                    )}
            </div>
            <div>
                <div>Color<p><span className='font-normal'>{product?.name.split(' ')[0]}</span></p></div>
            </div>
            <div className='space-y-4'>
                {product?.productVariants[0].bodyfitName && (
                    <div>{product?.type}<p><span className='font-normal'>{product?.productVariants[0].bodyfitName}</span></p></div>
                    )}
                <div>Article number<p><span className='font-normal'>{product?.productVariants[0].articleNumber}</span></p></div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetailsPage