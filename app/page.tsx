'use client'
import dataFetch from "@/dataFetch";
import Link from "next/link";
import Image from 'next/image';
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

export default function Home() {
  const baseUrl = 'https://staging-api.etonshirts.com';
  const [products, setProducts] = useState<{}[]>([]);

  const fetchProducts = async () => {
    try {
      const response = await dataFetch.get('/V1/Retail/Catalog/Category?MarketId=9&PriceListId=19&LanguageCode=en&Skip=0&Where.IncludeFacets=false&Take=10&CategorySlug=all');
      setProducts(response.data.displays);

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

    const productList = products;
    console.log({products});

    return (
      <main>
        <div className="text-3xl font-bold text-center my-12">Eton</div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-1">
          {products.map((product: any) => (
            <div key={product.id} className="overflow-hidden">
              <div className="relative min-h-[200px] w-full">
                <img
                  className="w-full h-full object-cover transition-opacity duration-500 cursor-pointer hover:opacity-0"
                  src={`${baseUrl}/v1/retail/image/1080/bynder/${product.productVariants[0].retailImages.thumbnail.mediaKey}/${product.uri}.webp`}
                  alt={product.name}
                />
                {product.productVariants[0].retailImages.gallery.map((image: any) => (
                  <img
                    key={image.mediaKey}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 cursor-pointer hover:opacity-100"
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
