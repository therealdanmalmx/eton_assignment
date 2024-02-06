'use client'
import dataFetch from "@/dataFetch";
import Image from 'next/image';
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

interface RetailImage {
  mediaKey: string;
}

interface ProductVariant {
  retailImages: {
    thumbnail: RetailImage;
    gallery: RetailImage[];
  };
  price: {
    formattedPriceBeforeDiscount: string;
  };
}
interface Product {
  id: string | number;
  name: string;
  uri: string;
  productVariants: ProductVariant[];
}

export default function Home() {
  const baseUrl = 'https://staging-api.etonshirts.com';
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const res = await dataFetch.get('/V1/Retail/Catalog/Category?MarketId=9&PriceListId=19&LanguageCode=en&Skip=0&Where.IncludeFacets=false&Take=10&CategorySlug=all');
      setProducts(res.data.displays);

    } catch (error) {
        toast.error(
          <div>
              <span onClick={() => toast.dismiss()}>Something went wrong</span>
          </div> , {
            duration: 2000,
            position: 'bottom-center',
            style: {
              cursor: 'pointer',
            },
        });
      }
    };

    useEffect(() => {
      fetchProducts();
    }, []);


    if (products.length < 0) {
      toast.error('No products found');
      return notFound();
    }
    console.log({products});

    return (
      <main>
        <div className="text-3xl font-bold text-center my-12">Eton</div>
        <div className="grid grid-cols-2 gap-1 lg:grid-cols-3 lg:gap-2">
          {products.map((product: Product) => (
            <div key={product.id} className="overflow-hidden">
              <div className="relative min-h-[200px] w-full">
                <Image
                  src={`${baseUrl}/v1/retail/image/1080/bynder/${product.productVariants[0].retailImages.thumbnail.mediaKey}/${product.uri}.webp`}
                  alt={product.name}
                  width={400}
                  height={500}
                  className="w-full h-full object-cover transition-all duration-500 cursor-pointer hover:opacity-0"
                  />
                {product.productVariants[0].retailImages.gallery.map((image: any) => (
                  <Image
                    key={image.mediaKey}
                    width={400}
                    height={500}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-500 cursor-pointer hover:opacity-100"
                    src={`${baseUrl}/v1/retail/image/1080/bynder/${image.mediaKey}/${product.uri}.webp`}
                    alt={product.name}
                  />
                ))}
              </div>
              <div className="m-4 space-y-2">
                <div className="text-xs font-semibold">{product.name}</div>
                <div className="text-sm">{product.productVariants[0].price.formattedPriceBeforeDiscount}</div>
              </div>
            </div>
          ))}
        </div>
        <Toaster />
      </main>
  );
}
