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
    isAvailableCustomMade: boolean;
    bodyfitName: string;
    articleNumber: string;
}

export interface Product {
    product: {
        id: string | number;
        name: string;
        uri: string;
        type: string;
        productVariants: ProductVariant[];
    }
    id: string | number;
    name: string;
    uri: string;
    type: string;
    productVariants: ProductVariant[];
}

export interface ProductList {
    products: Product[];
}

export interface ProductContextType {
    products: Product[];
    fetchProducts: () => void;
  }