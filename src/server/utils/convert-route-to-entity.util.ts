const mapping: Record<string, string> = {
  carts: 'cart',
  'cart-items': 'cart_item',
  orders: 'order',
  products: 'product',
  sellers: 'seller',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
