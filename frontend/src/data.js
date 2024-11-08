import LotusRisograph from '../assets/risograph-offwhite-purple.jpg';
import AlienChrusty from '../assets/leaning-alien.jpg';
import LotusChrusty from '../assets/lotus-chrusty.jpg';
import GeraniumTwins from '../assets/geranium-twins.jpg';
import TigerCloud from '../assets/tiger-cloud.jpg';
import { nanoid } from 'nanoid';

export const featuredProducts = {
  product1: {
    name: 'Lotus Chrusty Risograph Print',
    price: 8,
    img: LotusRisograph,
    id: nanoid(),
  },
  product2: {
    name: 'Leaning Alien Chrusty Sticker',
    price: 3.5,
    img: AlienChrusty,
  },
  product3: {
    name: 'Geranium Twin Chrusty Sticker',
    price: 3.5,
    img: GeraniumTwins,
  },
  product4: {
    name: 'Lotus Chrusty Sticker',
    price: 3.5,
    img: LotusChrusty,
  },
  product5: {
    name: 'Tiger Cloud Chrusty',
    price: 3.5,
    img: TigerCloud,
  },
};

export const categories = [
  {
    name: 'Stickers',
    link: '/products/stickers',
    img: AlienChrusty,
    id: nanoid(),
  },
  {
    name: 'Prints',
    link: '/products/prints',
    img: LotusRisograph,
    id: nanoid(),
  },
];

export const footerLinks = [
  {
    name: 'Home',
    link: '/',
    id: nanoid(),
  },
  {
    name: 'Products',
    link: '/products',
    id: nanoid(),
  },
  {
    name: 'Contact',
    link: '/contact',
    id: nanoid(),
  },
];
