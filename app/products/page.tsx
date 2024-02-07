'use client'
import dataFetch from "@/dataFetch";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import ProductCard from "../components/ProductCard";
import { Product } from "@/interfaces";


const ProductListPage = () => {
    const baseUrl = 'https://staging-api.etonshirts.com';
    const [products, setProducts] = useState<Product[]>([]);

    const fetchProducts = async () => {
      try {
        // Fetch products trough axios instance. Below endpoint could also have been split into parameters.
        const res = await dataFetch.get('/V1/Retail/Catalog/Category?MarketId=9&PriceListId=19&LanguageCode=en&Skip=0&Where.IncludeFacets=false&Take=10&CategorySlug=all');
        setProducts(res.data.displays);

      } catch (error) {
          toast.error(
            <div>
                <span onClick={() => toast.dismiss()}>Products could not be found.</span>
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
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />

              ))}
            </div>
          <Toaster />
        </main>
    );
}

export default ProductListPage