import Product from '../models/Product';

const products = [
  new Product(1, 'Sneaker X'),
  new Product(2, 'T-Shirt Y'),
];

export default {
  getProducts() {
    return products;
  },
  getProductById(id) {
    return products.find((p) => p.id === id);
  },
};
