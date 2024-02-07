'use client'
import dataFetch from "@/dataFetch";
import { createContext, useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Product, ProductContextType } from "./interfaces";

const ProductContext = createContext<ProductContextType>({
  products: [],
  fetchProducts: () => {},
});

export const useProducts = () => useContext(ProductContext);

export const ProductProvider = ({ children }: any) => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const res = await dataFetch.get('/V1/Retail/Catalog/Category?MarketId=9&PriceListId=19&LanguageCode=en&Skip=0&Where.IncludeFacets=false&Take=10&CategorySlug=all');
      setProducts(res.data.displays);
    } catch (error) {
      toast.error("Products could not be found.", {
        duration: 2000,
        position: 'bottom-center',
      });
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, fetchProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
