export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  images: {
    url: string;
    alt: string;
  }[];
  category: string;
  tags: string[];
  specifications: {
    [key: string]: string;
  };
  stock: number;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export const dummyProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Vape Device X1',
    slug: 'premium-vape-device-x1',
    description: 'High-end vaping device with temperature control and long-lasting battery life.',
    price: 59.99,
    originalPrice: 79.99,
    discountPercentage: 25,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&auto=format&fit=crop&q=60',
        alt: 'Premium Vape Device X1 - Main View'
      }
    ],
    category: 'devices',
    tags: ['premium', 'temperature-control', 'new'],
    specifications: {
      batteryLife: '8 hours',
      capacity: '5ml',
      power: '5-80W'
    },
    stock: 50,
    featured: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '2',
    name: 'Classic Tobacco Blend',
    slug: 'classic-tobacco-blend',
    description: 'Rich and smooth tobacco flavor with subtle notes of caramel.',
    price: 24.99,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?w=800&auto=format&fit=crop&q=60',
        alt: 'Classic Tobacco Blend'
      }
    ],
    category: 'e-liquids',
    tags: ['tobacco', 'bestseller'],
    specifications: {
      volume: '30ml',
      nicotineStrength: '3mg',
      vgPgRatio: '70/30'
    },
    stock: 100,
    featured: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '3',
    name: 'Fruit Paradise Collection',
    slug: 'fruit-paradise-collection',
    description: 'A delightful mix of tropical and exotic fruit flavors.',
    price: 49.99,
    originalPrice: 59.99,
    discountPercentage: 15,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?w=800&auto=format&fit=crop&q=60',
        alt: 'Fruit Paradise Collection'
      }
    ],
    category: 'collections',
    tags: ['fruits', 'collection', 'popular'],
    specifications: {
      flavors: '4 x 30ml bottles',
      nicotineStrength: 'Various',
      vgPgRatio: '70/30'
    },
    stock: 30,
    featured: true,
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

export const categories = [
  {
    id: '1',
    name: 'Devices',
    slug: 'devices',
    description: 'High-quality vaping devices and hardware',
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: '2',
    name: 'E-Liquids',
    slug: 'e-liquids',
    description: 'Premium e-liquid flavors and collections',
    image: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: '3',
    name: 'Collections',
    slug: 'collections',
    description: 'Curated sets and special editions',
    image: 'https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?w=800&auto=format&fit=crop&q=60'
  }
];