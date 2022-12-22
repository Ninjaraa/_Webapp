export interface ListProducts {
    item: any;
    name: string;
    category: string;
    imageName: string;
    articleNumber: string;
    price?: number;
    label: string;
    description: string;
    quantity?: number;
    rating?: string;
}

export interface ProductRequest {
    name: string;
    category: string;
    imageName: string;
    label: string;
    price?: number;
    articleNumber?: string;
    rating?: string
}