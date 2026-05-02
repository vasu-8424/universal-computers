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

const dellImage = "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=800";
const hpImage = "https://images.unsplash.com/photo-1544006659-f0b21f04cb1d?auto=format&fit=crop&q=80&w=800";
const lenovoImage = "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?auto=format&fit=crop&q=80&w=800";
const appleImage = "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=800";
const genericWindowImage = "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=800";

export const products: Laptop[] = [
  {
    id: '1',
    name: 'Dell Latitude 3570',
    brand: 'Dell',
    specs: 'i3 6th Gen | 8GB | 256GB SSD | 15.6"',
    category: 'Student',
    tag: 'Offer',
    image: dellImage
  },
  {
    id: '2',
    name: 'Dell Latitude 5490',
    brand: 'Dell',
    specs: 'i3 8th Gen | 8GB | 256GB SSD | 14"',
    category: 'Business',
    tag: 'Best Seller',
    image: dellImage
  },
  {
    id: '3',
    name: 'Dell Latitude 5480',
    brand: 'Dell',
    specs: 'i3 7th Gen | 8GB | 256GB SSD | 14"',
    category: 'Business',
    image: dellImage
  },
  {
    id: '4',
    name: 'Dell Latitude 5580',
    brand: 'Dell',
    specs: 'i7 7th Gen | 8GB | 256GB SSD | 15.6"',
    category: 'High Performance',
    image: genericWindowImage
  },
  {
    id: '5',
    name: 'Dell Latitude 3480',
    brand: 'Dell',
    specs: 'i7 7th Gen | 8GB | 256GB SSD | 14"',
    category: 'High Performance',
    image: genericWindowImage
  },
  {
    id: '6',
    name: 'Dell Latitude 3400',
    brand: 'Dell',
    specs: 'i3 8th Gen | 8GB | 256GB SSD',
    category: 'Student',
    image: dellImage
  },
  {
    id: '7',
    name: 'Dell Latitude 5570',
    brand: 'Dell',
    specs: 'i5 6th Gen | 8GB | 256GB SSD',
    category: 'Business',
    image: dellImage
  },
  {
    id: '8',
    name: 'Dell Latitude 5400',
    brand: 'Dell',
    specs: 'i5 8th Gen | 8GB | 256GB SSD',
    category: 'Business',
    tag: 'Best Seller',
    image: dellImage
  },
  {
    id: '9',
    name: 'Dell Latitude 5401',
    brand: 'Dell',
    specs: 'i7 9th Gen | 8GB | 256GB SSD',
    category: 'Developer',
    tag: 'New',
    image: genericWindowImage
  },
  {
    id: '10',
    name: 'Dell Latitude 7310',
    brand: 'Dell',
    specs: 'i5 10th Gen | 16GB | 256GB SSD',
    category: 'Business',
    image: dellImage
  },
  {
    id: '11',
    name: 'Dell Latitude 7410',
    brand: 'Dell',
    specs: 'i7 10th Gen | 32GB | 256GB SSD',
    category: 'Developer',
    image: dellImage
  },
  {
    id: '12',
    name: 'Dell Precision 5550',
    brand: 'Dell',
    specs: 'i7 10th Gen | 16GB | 512GB SSD | 4GB NVIDIA',
    category: 'Graphics',
    tag: 'New',
    image: genericWindowImage
  },
  {
    id: '13',
    name: 'Dell Precision 7540',
    brand: 'Dell',
    specs: 'i7 9th Gen | 8GB | 256GB SSD | RTX 3000',
    category: 'Graphics',
    image: genericWindowImage
  },
  {
    id: '14',
    name: 'Dell Precision 5530',
    brand: 'Dell',
    specs: 'i7 8850H | 8GB | 256GB SSD | P2000 GPU',
    category: 'Developer',
    image: dellImage
  },
  {
    id: '15',
    name: 'HP EliteBook 745 G6',
    brand: 'HP',
    specs: 'Ryzen 5 | 8GB | 256GB SSD | 2GB GPU',
    category: 'Business',
    image: hpImage
  },
  {
    id: '16',
    name: 'HP EliteBook 840 G6',
    brand: 'HP',
    specs: 'i5 8th Gen | 8GB | 256GB SSD',
    category: 'Business',
    image: hpImage
  },
  {
    id: '17',
    name: 'Dell Latitude 5420',
    brand: 'Dell',
    specs: 'i5 11th Gen | 8GB | 256GB SSD',
    category: 'Business',
    image: dellImage
  },
  {
    id: '18',
    name: 'Lenovo ThinkPad T490',
    brand: 'Lenovo',
    specs: 'i5 8th Gen | 8GB | 256GB SSD | Touch',
    category: 'Business',
    tag: 'Best Seller',
    image: lenovoImage
  },
  {
    id: '19',
    name: 'Lenovo ThinkPad X1 Carbon',
    brand: 'Lenovo',
    specs: 'i7 8th Gen | 16GB | 512GB SSD',
    category: 'High Performance',
    tag: 'Offer',
    image: lenovoImage
  },
  {
    id: '20',
    name: 'MacBook Pro M1',
    brand: 'Apple',
    specs: 'M1 Chip | 8GB | 256GB SSD',
    category: 'Developer',
    tag: 'Best Seller',
    image: appleImage
  }
];

const genericLaptops = [
  dellImage,
  hpImage,
  lenovoImage,
  genericWindowImage
];

for (let i = 21; i <= 50; i++) {
  const brands: ('Dell' | 'HP' | 'Lenovo')[] = ['Dell', 'HP', 'Lenovo'];
  const cats: Laptop['category'][] = ['Business', 'Student', 'Developer', 'High Performance'];
  const brand = brands[Math.floor(Math.random() * brands.length)];
  const cat = cats[Math.floor(Math.random() * cats.length)];
  
  let selectedImage = genericWindowImage;
  if (brand === 'Dell') selectedImage = dellImage;
  if (brand === 'HP') selectedImage = hpImage;
  if (brand === 'Lenovo') selectedImage = lenovoImage;

  products.push({
    id: i.toString(),
    name: `${brand} Series ${i * 10}`,
    brand,
    specs: `i5 ${Math.floor(Math.random() * 4) + 8}th Gen | 8GB | 512GB SSD`,
    category: cat,
    image: selectedImage
  });
}
