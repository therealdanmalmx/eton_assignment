'use client'
import dataFetch from "@/dataFetch";
import Link from "next/link";
import Image from 'next/image';
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

export default function Home() {
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


    if (!products) {
      toast.error('No products found');
      return notFound();
    }

    const productList = products;
    console.log({products});

    return (
      <main>
        <div className="text-3xl font-bold text-center my-12">Eton</div>
        <div className="flex min-h-screen flex-wrap items-start justify-between">
          {products.map((product: any) => {
              return (
                <div key={product.id} className="min-h-[725px]">
                  {/* <img
                    src={isHovered ? hoverImage : initialImage}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="transition-all duration-500 ease-in-out h-[625px] w-[500px] object-cover"
                  /> */}
                  <div className="relative w-[500px] h-[625px]">
                    <img
                      className="absolute inset-0 w-full h-full object-cover opacity-100 hover:opacity-0 cursor-pointer transition-all duration-300 ease-in-out"
                      src={`https://staging-api.etonshirts.com/v1/retail/image/1080/bynder/${product.productVariants[0].retailImages.gallery[0].mediaKey}/${product.uri}.webp`}
                      alt="Initial"
                    />
                    {product.productVariants[0].retailImages.gallery.map((image: any) => {
                      console.log({image});
                        return (
                          <img
                            className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 cursor-pointer transition-all duration-500 ease-in-out"
                            src={`https://staging-api.etonshirts.com/v1/retail/image/1080/bynder/${image.mediaKey}/${product.uri}.webp`}
                            alt="Hover"
                          />
                        )
                    })}
                  </div>
                  <div className="m-4 space-y-2">
                    <div className="text-xs font-semibold">{product.name}</div>
                    <div className="text-sm">{product.productVariants[0].price.formattedPriceBeforeDiscount}</div>

                  </div>
                </div>
              );
        })}

        </div>
      <Toaster />

    </main>
  );
}
