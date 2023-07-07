import { CartItemInterface } from 'interfaces/cart-item';
import { SellerInterface } from 'interfaces/seller';
import { GetQueryInterface } from 'interfaces';

export interface ProductInterface {
  id?: string;
  name: string;
  price: number;
  seller_id: string;
  created_at?: any;
  updated_at?: any;
  cart_item?: CartItemInterface[];
  seller?: SellerInterface;
  _count?: {
    cart_item?: number;
  };
}

export interface ProductGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  seller_id?: string;
}
