import React from 'react';
import { Link } from 'react-router-dom';
import BabyBliss from "../Images/BabyBliss.png";
import balanceWonder from './balance wonder.png'
import coffeeMaker from './coffee maker.png'
import alphabet from './alphabet.png'
import piano from './piano.png'


function FeedingComponent() {
  const products = [
    {
      id: 1,
      name: 'Balance Wonder',
      priceRange: '$110 - $99',
      discount: 10,
      image: balanceWonder,
    },
    {
      id: 2,
      name: 'Coffee Maker',
      priceRange: '$56 - $40',
      discount: 29,
      image: coffeeMaker,
    },
    {
      id: 3,
      name: 'Giraffe',
      priceRange: '$45 - $67',
      image: 'https://i.pinimg.com/564x/a3/c6/50/a3c650e414d4c41bb749d9a758e45342.jpg',
    },
    {
        id: 4,
        name: 'Shape Sorter',
        priceRange: '$45 - $67',
        image: 'https://i.pinimg.com/564x/ae/27/c1/ae27c14eaae8d1df69ad52ea33884a1d.jpg',
      },
      {
        id: 5,
        name: 'Jigsaw Puzzle',
        priceRange: '$45 - $67',
        image: 'https://i.pinimg.com/564x/28/b5/a4/28b5a476d6ca0e1aa98edad7abc3a456.jpg',
      },
      {
        id: 6,
        name: 'Alphabet board',
        priceRange: '$45 - $67',
        image: alphabet,
      },
      {
        id: 7,
        name: 'Ice-Cream Cart',
        priceRange: '$45 - $67',
        image: 'https://i.pinimg.com/564x/7d/a5/a3/7da5a3ff8da0b4c62abf6368a70fca78.jpg',
      },
      {
        id: 8,
        name: 'Mini Ball Hoop',
        priceRange: '$45 - $67',
        image: 'https://i.pinimg.com/564x/08/65/b7/0865b7c356e74490748a1cc2c68f1f15.jpg',
      },
      {
        id: 9,
        name: ' Mini Piano',
        priceRange: '$45 - $67',
        image: piano,
      },
  ];
  return (
    <>
    <div className="container mx-auto bg-white p-5">
      <h1 className="text-4xl font-bold text-center mb-4">Feeding Section</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product) => (
          <div key={product.id} className="border border-gray-400 p-4 w-[350px] h-[350px] m-7 shadow-lg rounded-lg">
          {product.discount && (
              <span className="bg-red-200 text-red-700 px-2 py-1 ml-[238px] rounded-full">- {product.discount}%</span>
            )}
            <img src={product.image} alt={product.name} className="w-full h-40 object-contain mb-2" />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-500">{product.priceRange}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2">Add to cart</button>
          </div>
        ))}
      </div>
    </div>

    {/* FOOTER */}
    <div className="container mx-auto">
      <div className="grid grid-cols-4 gap-4">
        <div className="flex flex-col items-start">
        <Link to="/" className="flex items-center">
                <img src={BabyBliss} alt="Logo" className="h-[200px] w-[250px] " />
              </Link>
          <p>555 California str. Suite 100</p>
          <p>San Francisco, CA 94107</p>
          <p>1-800-312-2121</p>
          <p>1-800-310-1010</p>
          <p>babybliss@yahoo.com</p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold mb-4">PRODUCTS</h2>
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold mb-4">FEATURED</h2>
          <div className="flex flex-col space-y-2">
            {products.map((product) => (
              <div key={product.id} className="flex items-center">
                <img src={product.image} alt={product.name} className="w-10 h-10 mr-2" />
                <span>{product.name}</span>
                <span className="ml-2 text-gray-500">${product.price}</span>
                {product.status && <span className="ml-2 text-red-500">{product.status}</span>}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold mb-4">ON SALE</h2>
          {/* On sale products here */}
        </div>
      </div>
    </div>
    <div className='flex justify-between my-5 border-t-2 p-5'>
    <p>© Copyright 2021. BabyBliss-Essential for babies</p>
    <div>
    <i class="ri-facebook-circle-fill text-2xl mr-2 hover:text-blue-500"></i>
    <i class="ri-instagram-fill text-2xl mr-2 hover:text-amber-800"></i>
    <i class="ri-twitter-x-fill text-2xl mr-2 hover:text-blue-950"></i>
    <i class="ri-tiktok-fill text-2xl mr-2"></i>
    </div>
    </div>
    </>
  );
}

export default FeedingComponent;
