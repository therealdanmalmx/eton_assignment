// 'use client'
// import { useProducts } from '@/ProductContext'
// import dataFetch from '@/dataFetch'
// import { Product } from '@/interfaces'
// import { formatUrlName } from '@/utilities'
// import { useParams, usePathname } from 'next/navigation'
// import React from 'react'



// const ProducDetailPage = async () => {
//     const { products } = useProducts();
//     const pathName = usePathname();
//     const params = useParams();
//     console.log(params.product);
//     console.log({pathName});

//     const productDetail = products.find((product) => formatUrlName(product) === params.product);

//     return (
//         <div>{productDetail}</div>
//     )
// }

// export default ProducDetailPage

'use client'
import { useProducts } from '@/ProductContext';
import { Product } from '@/interfaces';
import { useParams } from 'next/navigation';
import Image from 'next/image';

const ProductDetailPage = () => {
    const baseUrl = 'https://staging-api.etonshirts.com';
    const { products } = useProducts();

    console.log('products from context', products);
    const params = useParams();

    const productId = parseInt(params.product as string, 10);
    console.log({productId});

    const productDetail = products.find((product) => product.id === productId);

    console.log({productDetail});

    // if (!productDetail) {
    //     toast.error('Product not found');
    //     return notFound();
    // };

    return (
        <div>
            <div className='flex justify-start gap-2 items-center overflow-scroll'>
                {productDetail?.productVariants[0].retailImages.gallery.map((image) => (
                    <Image
                    key={image.mediaKey}
                    width={400}
                    height={500}
                    src={`${baseUrl}/v1/retail/image/1080/bynder/${image.mediaKey}/${productDetail?.uri}.webp`}
                    alt={productDetail?.name}
                    priority
                    className="min-h-[200px] object-cover"
                    />
                    ))}
            </div>
            <div className='text-2xl font-bold m-4 space-y-4'>
            <div>{productDetail?.name}<span className='text-xl font-normal'>- {productDetail?.productVariants[0].price.formattedPriceBeforeDiscount}</span></div>
                {productDetail?.productVariants[0].isAvailableCustomMade && (
                    <div className='text-2xl font-bold m-4'>Can be customed made</div>
                )}
                {productDetail?.productVariants[0].bodyfitName && (
                    <div>{productDetail?.type}: <span className='text-xl font-normal'>{productDetail?.productVariants[0].bodyfitName}</span>  </div>
                )}
            </div>
        </div>
    );
};

export default ProductDetailPage;
