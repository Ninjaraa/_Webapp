export interface ProductItem {
    articleNumber: string;
    id?: string;
    name: string;
    price: number;
    category: string;
    imageName: string;
    label: string;
    description: string;
    quantity?: number;
    rating?: string
}

export interface ProductItemRequest {
    name: string;
    category: string;
    imageName: string;
    price?: number;
    id?: string;
    label?: string;
    rating?: string
}