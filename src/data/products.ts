export interface Laptop {
  id: string;
  name: string;
  brand: 'Dell' | 'HP' | 'Lenovo' | 'Apple' | 'Accessories';
  specs: string;
  category: 'Business' | 'High Performance' | 'Graphics' | 'Student' | 'Developer' | 'Accessories';
  tag?: 'Best Seller' | 'New' | 'Offer';
  price?: string;
  image: string;
}

export const products: Laptop[] = [
  {
    id: '1',
    name: 'Dell Latitude 3570',
    brand: 'Dell',
    specs: 'i3 6th Gen | 8GB | 256GB SSD',
    category: 'Student',
    tag: 'Offer',
    image: '/Dell Latitude  3570.png'
  },
  {
    id: '2',
    name: 'Dell Latitude 5570',
    brand: 'Dell',
    specs: 'i5 6th Gen | 8GB | 256GB SSD',
    category: 'Business',
    image: '/Dell Latitude  5570.png'
  },
  {
    id: '3',
    name: 'Dell Precision 7540',
    brand: 'Dell',
    specs: 'i7 9th Gen | 16GB | 512GB SSD',
    category: 'High Performance',
    tag: 'Best Seller',
    image: '/Dell Latitude  7540.png'
  },
  {
    id: '4',
    name: 'Dell Latitude 5420',
    brand: 'Dell',
    specs: 'i5 11th Gen | 8GB | 256GB SSD',
    category: 'Business',
    tag: 'New',
    image: '/Dell Latitude 5420.png'
  },
  {
    id: '5',
    name: 'Dell Latitude 5490',
    brand: 'Dell',
    specs: 'i5 8th Gen | 8GB | 256GB SSD',
    category: 'Business',
    image: '/Dell latitude  5490.png'
  },
  {
    id: '6',
    name: 'Dell Latitude 5580',
    brand: 'Dell',
    specs: 'i7 7th Gen | 8GB | 256GB SSD',
    category: 'High Performance',
    image: '/Dell latitude  5580.png'
  },
  {
    id: '7',
    name: 'Dell Latitude 3400',
    brand: 'Dell',
    specs: 'i5 8th Gen | 8GB | 256GB SSD',
    category: 'Student',
    image: '/Dell latitude 3400.png'
  },
  {
    id: '8',
    name: 'Dell Latitude 3480',
    brand: 'Dell',
    specs: 'i5 7th Gen | 8GB | 256GB SSD',
    category: 'Student',
    image: '/Dell latitude 3480.png'
  },
  {
    id: '9',
    name: 'Dell Latitude 5400',
    brand: 'Dell',
    specs: 'i5 8th Gen | 8GB | 256GB SSD',
    category: 'Business',
    tag: 'Best Seller',
    image: '/Dell latitude 5400.png'
  },
  {
    id: '10',
    name: 'Dell Precision 5530',
    brand: 'Dell',
    specs: 'i7 8th Gen | 16GB | 512GB SSD | 4GB GPU',
    category: 'Developer',
    image: '/Dell precision 5530.png'
  },
  {
    id: '11',
    name: 'HP EliteBook 745 G6',
    brand: 'HP',
    specs: 'Ryzen 5 | 8GB | 256GB SSD',
    category: 'Business',
    image: '/Hp Elitebook  745 G6.png'
  },
  {
    id: '12',
    name: 'HP EliteBook 840 G3',
    brand: 'HP',
    specs: 'i5 6th Gen | 8GB | 256GB SSD',
    category: 'Business',
    tag: 'Offer',
    image: '/Hp Elitebook 840 G3.png'
  },
  {
    id: '13',
    name: 'HP EliteBook 840 G5',
    brand: 'HP',
    specs: 'i5 8th Gen | 8GB | 256GB SSD',
    category: 'Business',
    image: '/Hp Elitebook 840 G5.png'
  },
  {
    id: '14',
    name: 'HP ProBook 640 G5',
    brand: 'HP',
    specs: 'i5 8th Gen | 8GB | 256GB SSD',
    category: 'Business',
    image: '/Hp probook 640 G5.png'
  },
  {
    id: '15',
    name: 'Lenovo ThinkPad T490',
    brand: 'Lenovo',
    specs: 'i5 8th Gen | 8GB | 256GB SSD',
    category: 'Business',
    tag: 'Best Seller',
    image: '/T490.png'
  },
  {
    id: '16',
    name: 'Dell Latitude 5550',
    brand: 'Dell',
    specs: 'i5 5th Gen | 8GB | 256GB SSD',
    category: 'Business',
    image: '/dell latitude 5550.png'
  }
];
