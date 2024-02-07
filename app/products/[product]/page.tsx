'use client'
import { useProducts } from '@/ProductContext';
import ProductDetailsPage from '@/app/components/ProductDetailsPage';
import { Product } from '@/interfaces';
import { notFound, useParams } from 'next/navigation';

const ProductDetailPage = () => {
    const { products } = useProducts();
    const params = useParams();

    const productId = parseInt(params.product as string, 10);

    const productDetail = products.find((product:Product) => product.id === productId);

    if (!products || !productDetail) {
        return (
            <div className="flex items-center justify-center h-screen w-11/12">
                <div className="text-center text-2xl">
                    Loading product detail page...
                </div>
            </div>
        );
    }
    return (
        <ProductDetailsPage
            product={productDetail!}
            id={productDetail!.id}
            name={productDetail!.name}
            uri={productDetail!.uri}
            type={productDetail!.type}
            productVariants={productDetail!.productVariants}
            colorLinks={productDetail!.colorLinks}
        />
    );
};

export default ProductDetailPage;
