import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'Royal Maroon Anarkali',
    subtitle: 'Silk Zardozi Set',
    category: 'Royal Anarkalis',
    price: 18500,
    originalPrice: 22000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzRK9NQHEErO5_2s1abxO6erSxWY87V3TtUNsBCvHkCM9IvYE9O_u1tkH0oSx5khN-DqeuCVj9y4uoBmVqhVpCMSdIsP_UMmMX5_JQOv6CLmIPPbxFuPWcKxAY6uyYOF5FPOuHgLbmbFS6G1Rs3PfmC2oY0m4fqE6SCWyxsTCXyoqnmDsMJMdrqImt7CfPtu_KE7I4mg3_EKkAUDnIhg5a6S9fbMTTb63qjOkFCN-18_TjGD7sCPpS',
    badge: 'Bestseller',
    badgeType: 'bestseller',
    description: 'Imbued with the grandeur of imperial Mughal courts, this floor-grazing anarkali is handwoven in pure mulberry silk. It features intricate real dabka, nakshi, and antique zardozi borders crafted over 320 artisan hours.',
    fabric: 'Pure Mulberry Silk & Handloom Organza Dupatta',
    craft: 'Authentic Hand Zardozi with Real Gilded Metal Threads',
    origin: 'Varanasi Master Atelier',
    artisanHours: 320,
    availableSizes: ['XS', 'S', 'M', 'L', 'XL', 'Custom Royal Drape'],
    inStock: true
  },
  {
    id: 'prod-2',
    name: 'Rose Gold Ethnic Dress',
    subtitle: 'Occasion Gown',
    category: 'Occasion Gowns',
    price: 24900,
    originalPrice: 28500,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-Bw-XgraNuZ2eeOrQzp0QFyu1ks2jAqZjVCEgPPpB9nuYBbs4h43RWM6hWpIaX1YxSgZRf0zJCVmbKfOVoGnoyJ-P2zTcAWyy0EzCcIwlIgtfzTYWEfqC3fLuLxeyygy13FeT7RRVO-FYzRKrc2bgg9b0MkBiWLeS-7rd_u-ZyY0Kw8GpG8J55r8l60lewk1qZdpFO-evilKC8XJ9Rinu-n1ZIpdtOm91feuDsxCocOjUE3QUjJDr',
    badge: 'Hand-embellished',
    badgeType: 'embellished',
    description: 'A poetic confluence of celestial rose hues and delicate floral vines. Hand-embroidered with luminous micro-pearls, cutwork sequins, and gossamer gotta patti over a gossamer silk tissue silhouette.',
    fabric: 'Tissue Silk & Chanderi Brocade Lining',
    craft: 'Chikankari Phanda Knots & Micro-Pearl Embellishment',
    origin: 'Lucknow Atelier',
    artisanHours: 280,
    availableSizes: ['XS', 'S', 'M', 'L', 'XL', 'Custom Royal Drape'],
    inStock: true
  },
  {
    id: 'prod-3',
    name: 'Classic Wine Kurta Set',
    subtitle: 'Tilla Embroidery',
    category: 'Festive Kurta Sets',
    price: 12800,
    originalPrice: 15500,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBbTSOo2tbSVi8YM402PVOLdmovf9RvPn0uWEHCNJeJZJyQtgmiAu1eOWZEoCbAuyn0dKs8-UI7rb_U0A7Kkzdea0_3WUPzm-4nF7UMgxEabei86WPjN5CqP4JR651RPh7IRKPw-1YcSz1AyHEXUI80b_Lec8CnX8NQ707k13R68gAdkuM3TU7BoETjGe3VJDYOme3_SRU01cQJ9USflZuMvvqvInuztrt9ZMTyaNcAWypWfttbDhj',
    badge: 'Pure Raw Silk',
    badgeType: 'silk',
    description: 'Deep plum and royal wine hues meet Kashmiri tilla needlework. Tailored in structured raw silk with straight trousers and a contrasting gold-border dupatta, perfect for festive gatherings.',
    fabric: 'Heavy Raw Silk & Hand-Spun Katan Silk',
    craft: 'Kashmiri Gilded Tilla Needlework',
    origin: 'Kashmir & Varanasi Weavers Guild',
    artisanHours: 190,
    availableSizes: ['XS', 'S', 'M', 'L', 'XL', 'Custom Royal Drape'],
    inStock: true
  },
  {
    id: 'prod-4',
    name: 'Heritage Embroidered Dress',
    subtitle: 'Zari Festive Suit',
    category: 'Festive Suits',
    price: 21000,
    originalPrice: 25000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9HRlUaugQ5cH_j7HmD5F0bIv2wBeUCZfIIubSEepa4iyA3gYgavUr9hKOgqgCQzimbdXUcdEL-kh8UOkoZnEu_4HHY4iqRLF1K_hB5yceiL-IuJvvcEYARBeBj4QiYMsCbmk_xKrT1zCANCx0FnAcVfJKk-P-GGCYZteUrnriZiq2YA39o65wVXvIav2wjeKo3Vu5jZhNmY8yNp2xoiGJtB8XCl1btq4IbPp_aWFk7zu2bIsZwY5Y',
    badge: 'Festive Edit',
    badgeType: 'festive',
    description: 'Evoking the evergreen forests of royal estates, this emerald and gold creation blends heritage meenakari woven borders with sparkling hand-done marodi zari work along the neckline and cuffs.',
    fabric: 'Emerald Brocade Silk with Banarasi Buti Weave',
    craft: 'Handloom Kadwa Weave & Marodi Zari Border',
    origin: 'Kashi Heritage Loom Guild',
    artisanHours: 340,
    availableSizes: ['XS', 'S', 'M', 'L', 'XL', 'Custom Royal Drape'],
    inStock: true
  },
  {
    id: 'prod-5',
    name: 'Kashi Ivory Bridal Lehenga',
    subtitle: 'Heirloom Trousseau',
    category: 'Bridal Couture',
    price: 48500,
    originalPrice: 56000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVZw2TUHtWkzts87EdA_kTUDkSSK0KMOKQlm5zBaTjiSCOay2on1PtXnc9liFsMhig2g_VYW3aq2VP4gPcpXqLcjosXZ4V8XszJBPllzZ0X0iAvGu1B2bRd9tukQI7_kPO4SbblRbjY8VtRwVOnA6AgBUb5d8L_Uf7gJF5CVNdS4FMNGJfAzoRAzZjJNpFmYCySPdn5QBTYBiPPFClzJZuLJMzS5R6k3SUBd9i1hUReIwAdS_821zt',
    badge: 'Haute Couture',
    badgeType: 'bestseller',
    description: 'The pinnacle of bespoke wedding artistry. Hand-spun tissue lehenga adorned with pure silver and gold dipped zardozi embroidery, celebrating centuries of royal court heritage.',
    fabric: 'Pure Gold Tissue Silk & Organza Veil',
    craft: 'Royal Zardozi, French Knots & Cutdana Work',
    origin: 'Varanasi Master Loom',
    artisanHours: 520,
    availableSizes: ['XS', 'S', 'M', 'L', 'XL', 'Custom Royal Drape'],
    inStock: true
  },
  {
    id: 'prod-6',
    name: 'Noor Emerald Kalidar Set',
    subtitle: 'Festive Anarkali',
    category: 'Royal Anarkalis',
    price: 23500,
    originalPrice: 27000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9HRlUaugQ5cH_j7HmD5F0bIv2wBeUCZfIIubSEepa4iyA3gYgavUr9hKOgqgCQzimbdXUcdEL-kh8UOkoZnEu_4HHY4iqRLF1K_hB5yceiL-IuJvvcEYARBeBj4QiYMsCbmk_xKrT1zCANCx0FnAcVfJKk-P-GGCYZteUrnriZiq2YA39o65wVXvIav2wjeKo3Vu5jZhNmY8yNp2xoiGJtB8XCl1btq4IbPp_aWFk7zu2bIsZwY5Y',
    badge: 'Limited Edition',
    badgeType: 'festive',
    description: 'Graceful thirty-two-kali silhouette in jewel-toned emerald. Highlights subtle dabka touches on scalloped borders, accompanied by an embroidered Banarasi dupatta.',
    fabric: 'Pure Silk Georgette & Banarasi Silk Border',
    craft: 'Scalloped Dabka & Mukaish Work',
    origin: 'Jaipur Royal Atelier',
    artisanHours: 240,
    availableSizes: ['XS', 'S', 'M', 'L', 'XL', 'Custom Royal Drape'],
    inStock: true
  }
];

export const BRAND_STATS = [
  { value: '120+', label: 'Heritage Artisans' },
  { value: '18', label: 'Loom Villages' },
  { value: '100%', label: 'Natural Dyes & Silks' },
  { value: 'Global', label: 'White-Glove Delivery' }
];

export const BRAND_PILLARS = [
  {
    icon: 'palette',
    title: 'Artisanal Zari & Zardozi Handwork',
    description: 'Meticulous metallic couching, real gilded micro-motifs, and heirloom French knots crafted by seventh-generation master zardoz artisans.',
    badge: 'Imperial Authenticity',
    badgeIcon: 'verified'
  },
  {
    icon: 'texture',
    title: 'Pure Raw Silk & Chanderi Handlooms',
    description: 'Spun exclusively on certified wooden looms across Varanasi and Chanderi. Lustrous, breathable, and woven to endure generations.',
    badge: 'Natural Fibres Only',
    badgeIcon: 'eco'
  },
  {
    icon: 'design_services',
    title: 'Complimentary Bespoke Tailoring',
    description: 'Every creation is adjusted to your exact drape and proportion through personal trousseau consultations with our in-house master cutters.',
    badge: 'Custom Royal Fit',
    badgeIcon: 'straighten'
  }
];
