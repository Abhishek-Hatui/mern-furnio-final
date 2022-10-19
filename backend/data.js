import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Abhishek',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Sofa',
      slug: 'sofa',
      category: 'Sofa',
      image: '/images/p1.jpeg', // 679px × 829px
      price: 120,
      countInStock: 10,
      brand: 'Abhis',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality sofa',
    },
    {
      // _id: '2',
      name: 'Couch',
      slug: 'couch',
      category: 'Couch',
      image: '/images/p2.jpeg',
      price: 250,
      countInStock: 0,
      brand: 'Hatui',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      // _id: '3',
      name: 'Chair',
      slug: 'chair',
      category: 'Chair',
      image: '/images/p3.jpeg',
      price: 25,
      countInStock: 15,
      brand: 'hatui',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      // _id: '4',
      name: 'Table',
      slug: 'table',
      category: 'Table',
      image: '/images/p4.jpeg',
      price: 65,
      countInStock: 5,
      brand: 'Abhi',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
  ],
};
export default data;
