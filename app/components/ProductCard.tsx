import React from 'react'
import Image from 'next/image'
import { RetailImage, Product, ColorLinks } from '@/interfaces'
import Link from 'next/link'

const ProductCard = ({product}: Product) => {
    const baseUrl = 'https://staging-api.etonshirts.com';
    const { colorLinks } = product;
    console.log({product});

    return (
        <Link href={`/products/${product.id}`}>
            <div className="overflow-hidden">
                <div className="relative min-h-[200px] w-full">
                <Image
                    src={`${baseUrl}/v1/retail/image/1080/bynder/${product.productVariants[0].retailImages.thumbnail.mediaKey}/${product.uri}.webp`}
                    alt={product.name}
                    width={400}
                    height={500}
                    priority
                    className="w-full h-full object-cover transition-all duration-500 cursor-pointer hover:opacity-0"
                />
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
                <div className="flex justify-between m-4">
                    <div>
                        <div className="text-xs font-semibold">{product.name}</div>
                        <div className="text-sm">{product.productVariants[0].price.formattedPriceBeforeDiscount}</div>
                    </div>
                    <div className='flex items-center justify-center space-x-2'>
                        {colorLinks.slice(0, 4).map((color: ColorLinks) => (
                            <>
                                <Image
                                    width={400}
                                    height={500}
                                    src={`${baseUrl}/v1/retail/image/1080/bynder/${color.retailImage.mediaKey}/${color.uri}.webp`}
                                    alt={product.name}
                                    priority
                                    className="w-8 h-8 object-cover rounded-full"
                                />
                            </>
                        ))}
                        {colorLinks.length > 4 && (
                            <div className="text-sm">
                            +{colorLinks.length - 4}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard