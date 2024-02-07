import React from 'react'
import Image from 'next/image'
import { RetailImage, Product, ColorLinks } from '@/interfaces'
import Link from 'next/link'

const ProductCard = ({product}: Product) => {
    const baseUrl = 'https://staging-api.etonshirts.com';
    const { colorLinks } = product;

    return (
        <Link href={`/products/${product.id}`}>
            <div className="overflow-hidden">
                <div className="relative min-h-[200px] w-full">
                    {/* Initial image */}
                    <Image
                        src={`${baseUrl}/v1/retail/image/1080/bynder/${product.productVariants[0].retailImages.thumbnail.mediaKey}/${product.uri}.webp`}
                        alt={product.name}
                        width={400}
                        height={500}
                        priority
                        className="w-full h-full object-cover transition-all duration-500 cursor-pointer hover:opacity-0"
                    />
                    {/* Hover Image */}
                    {product.productVariants[0].retailImages.gallery.map((image: RetailImage) => (
                        <Image
                            key={image.mediaKey}
                            width={400}
                            height={500}
                            src={`${baseUrl}/v1/retail/image/1080/bynder/${image.mediaKey}/${product.uri}.webp`}
                            alt={product.name}
                            priority
                            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-500 cursor-pointer hover:opacity-100"
                        />
                    ))}
                </div>
                {/* Product description */}
                <div className="flex justify-between m-4">
                    <div className='space-y-2'>
                        <div className="text-xs font-semibold">{product.name}</div>
                        {/* Available color amount mobile/tablet */}
                        <div className='block lg:hidden text-sm'>+{colorLinks.length - 1}<span className='mx-1'>colors</span></div>
                        <div className="text-sm">{product.productVariants[0].price.formattedPriceBeforeDiscount}</div>
                    </div>
                    {/* Available colors */}
                    <div className='flex items-center justify-center space-x-1 lg:space-x-2'>
                        {colorLinks.slice(0, 4).map((color: ColorLinks) => (
                            <Image
                                key={color.colorId}
                                width={400}
                                height={500}
                                src={`${baseUrl}/v1/retail/image/1080/bynder/${color.retailImage.mediaKey}/${color.uri}.webp`}
                                alt={product.name}
                                priority
                                className="h-4 w-4 lg:w-10 lg:h-10 rounded-full hidden lg:block"
                            />

                            ))}
                        {/* Available color amount desktop */}
                        {colorLinks.length > 4 && (
                            <div className="hidden lg:block">
                            <p className='text-md'>+{colorLinks.length - 4}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard