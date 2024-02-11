export interface RetailImage {
    mediaKey: string;
}

export interface ProductVariant {
    retailImages: {
        thumbnail: RetailImage;
        gallery: RetailImage[];
    };
    price: {
        formattedPrice: string;
        showAsOnSale: boolean;
        discountPercent: number;
        formattedPriceBeforeDiscount: string;
    };
    isAvailableCustomMade: boolean;
    bodyfitName: string;
    articleNumber: string;
}

export interface Product {
    product: {
        id: number;
        name: string;
        uri: string;
        type: string;
        productVariants: ProductVariant[];
        colorLinks: ColorLinks[];
    }
    id: number;
    name: string;
    uri: string;
    type: string;
    productVariants: ProductVariant[];
    colorLinks: ColorLinks[];
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