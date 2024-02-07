import React from 'react'
import Image from 'next/image'
import { RetailImage, Product } from '@/interfaces'
import Link from 'next/link'

const ProductCard = ({product}: Product) => {
    const baseUrl = 'https://staging-api.etonshirts.com';

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
                <div className="m-4 space-y-2">
                    <div className="text-xs font-semibold">{product.name}</div>
                    <div className="text-sm">{product.productVariants[0].price.formattedPriceBeforeDiscount}</div>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard