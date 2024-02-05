'use client'
import { useEffect, useState } from "react";
import axios from "axios";
import dataFetch from "@/dataFetch";
import toast, { Toaster } from 'react-hot-toast';


export default function Home() {
  const [products, setProducts] = useState<{}[]>([]);
  const fetchProducts = async () => {
    try {
      const response = await dataFetch.get('', {
        params: {
          MarketId: 9,
          PriceListId: 19,
          LanguageCode: 'en',
          Skip: 0,
          'Where.IncludeFacets': false,
          Take: 10,
          CategorySlug: 'all'
        }
      });
      setProducts(response.data);

    } catch (error) {
        toast.error('Something went wrong', {
            duration: 4000,
            position: 'bottom-center',
            className: 'cursor-pointer',
        });

      }
    };

    useEffect(() => {
      fetchProducts();
    }, []);

    console.log({products});

    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Eton Shirts</div>
      <Toaster />

    </main>
  );
}
