export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  secondaryImages?: string[];
  badge?: string;
  badgeType?: 'bestseller' | 'embellished' | 'silk' | 'festive';
  description: string;
  fabric: string;
  craft: string;
  origin: string;
  artisanHours: number;
  availableSizes: string[];
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  size: string;
  quantity: number;
  customMeasurements?: string;
  bespokeConsultation: boolean;
}

export interface CheckoutDetails {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  apartment?: string;
  city: string;
  state: string;
  pincode: string;
  paymentMethod: 'cod' | 'upi' | 'card' | 'netbanking';
  giftWrap: boolean;
  giftMessage?: string;
}

export interface PlacedOrder {
  orderId: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  shippingDetails: CheckoutDetails;
  date: string;
  estimatedDelivery: string;
}
