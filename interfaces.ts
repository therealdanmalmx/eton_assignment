export interface RetailImage {
    mediaKey: string;
}

export interface ProductVariant {
    retailImages: {
        thumbnail: RetailImage;
        gallery: RetailImage[];
    };
    price: {
        formattedPriceBeforeDiscount: string;
    };
}

export interface Product {
    id: string | number;
    name: string;
    uri: string;
    productVariants: ProductVariant[];
}
