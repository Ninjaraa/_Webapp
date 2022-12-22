import { ProductItem } from './productsModel'

export interface CartItem {
  articleNumber: string;
  product: ProductItem;
  quantity: number;
  imageName?: string;
  name?: string;
  price?: number;
  category?: string
}