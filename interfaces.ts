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

export interface ProductDetails {
    id: string | number;
    product: Product;
}

export interface ColorLinks {
    colorId: string;
    colorName: string;
    displayId: number;
    inStock: boolean;
    uri: string;
    retailImage: RetailImage;

}