// src/data/products.js
import { withBase } from '../utils/basePath';

const products = [
  { id: 'aloe',      name: 'Aloe Vera',            price: 199.9, category: 'Succulents', thumb: withBase('plants/aloe.jpg') },
  { id: 'monstera',  name: 'Monstera Deliciosa',   price: 449.9, category: 'Tropical',   thumb: withBase('plants/monstera.webp') },
  { id: 'snake',     name: 'Snake Plant',          price: 299.9, category: 'Low-Light',  thumb: withBase('plants/snake.webp') },
  { id: 'cactus',    name: 'Cactus Mix',           price: 149.9, category: 'Succulents', thumb: withBase('plants/cactus.webp') },
  { id: 'zz',        name: 'ZZ Plant',             price: 349.9, category: 'Low-Light',  thumb: withBase('plants/zz.avif') },
  { id: 'peperomia', name: 'Peperomia',            price: 189.9, category: 'Tabletop',   thumb: withBase('plants/peperomia.jpg') },
];

export default products;