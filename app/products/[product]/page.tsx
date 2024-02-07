'use client'
import { useProducts } from '@/ProductContext';
import Image from 'next/image';
import { notFound, useParams } from 'next/navigation';

const ProductDetailPage = () => {
    const baseUrl = 'https://staging-api.etonshirts.com';
    const { products } = useProducts();

    console.log('products from context', products);
    const params = useParams();

    const productId = parseInt(params.product as string, 10);
    console.log({productId});

    const productDetail = products.find((product) => product.id === productId);

    console.log({productDetail});

    if (!productDetail) {
        // toast.error('Product not found');
        return notFound();
    };

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
            <div className='text-md font-bold mx-12 my-4 flex justify-between items-start'>
                <div>
                    <div>{productDetail?.name}<span className='font-normal'>- {productDetail?.productVariants[0].price.formattedPriceBeforeDiscount}</span></div>
                        {productDetail?.productVariants[0].isAvailableCustomMade && (
                            <div className='text-2xl font-bold m-4'>Can be customed made</div>
                        )}
                </div>
                <div>
                    {productDetail?.productVariants[0].bodyfitName && (
                        <div>{productDetail?.type}: <span className='font-normal'>{productDetail?.productVariants[0].bodyfitName}</span>  </div>
                        )}
                    <div>Article number: <span className='font-normal'>{productDetail?.productVariants[0].articleNumber}</span></div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
