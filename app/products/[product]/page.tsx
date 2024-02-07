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
        notFound();
    };
    return (
        <ProductDetailsPage
            product={productDetail}
            id={productDetail.id}
            name={productDetail.name}
            uri={productDetail.uri}
            type={productDetail.type}
            productVariants={productDetail.productVariants}
            colorLinks={productDetail.colorLinks}
        />
    );
};

export default ProductDetailPage;
