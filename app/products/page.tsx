'use client'
import { useProducts } from "@/ProductContext";
import { notFound } from "next/navigation";
import toast, { Toaster } from 'react-hot-toast';
import ProductCard from "../components/ProductCard";
import { Product } from "@/interfaces";

const ProductListPage = () => {
    const { products } = useProducts();

    console.log('products from context', products);

    if (!products) {
        toast.error('No products found');
        return notFound();
    }

    return (
        <main>
            <div className="text-3xl font-bold text-center my-12">Eton</div>
            <div className="grid grid-cols-2 gap-1 lg:grid-cols-3 lg:gap-2">
                {products.map((product: Product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        id={product.id}
                        name={product.name}
                        uri={product.uri}
                        type={product.type}
                        productVariants={product.productVariants}
                    />
                ))}
            </div>
            <Toaster />
        </main>
    );
}

export default ProductListPage