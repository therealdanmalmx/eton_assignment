'use client'
import { useProducts } from '@/ProductContext';
import ProductDetailsPage from '@/app/components/ProductDetailsPage';
import { notFound, useParams } from 'next/navigation';

const ProductDetailPage = () => {
    const { products } = useProducts();
    const params = useParams();

    const productId = parseInt(params.product as string, 10);

    const productDetail = products.find((product) => product.id === productId);

    if (!products && !productDetail) {
        notFound();
    };
    return (
        <ProductDetailsPage product={productDetail} />
    );
};

export default ProductDetailPage;
