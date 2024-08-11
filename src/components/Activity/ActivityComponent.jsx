import React, { useState } from 'react';
import balanceWonder from './balance wonder.png'
import coffeeMaker from './coffee maker.png'
import alphabet from './alphabet.png'
import piano from './piano.png'


function ActivityComponent() {
  const [colors, setColors] = useState({
    brown: 1,
    gray: 1,
    green: 2,
    red: 4,
    white: 1,
  });
  const [priceRange, setPriceRange] = useState([40, 100]);

  const handleColorFilter = (color) => {
    // Handle color filter logic here
    console.log('Selected color:', color);
  };

  const handlePriceFilter = (value) => {
    // Handle price filter logic here
    console.log('Price range:', value);
  };

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
    <div className='flex bg-[#e8f5f6]'>
    <div className="flex flex-col w-[250px] bg-white m-5 p-5">
      <div className="flex flex-col space-y-2">
        <h3 className="text-lg font-bold">COLORS</h3>
        <div className="flex flex-wrap">
          <div className="flex items-center mr-2">
            <div className="w-4 h-4 rounded-full bg-brown" />
            <span>Brown ({colors.brown})</span>
          </div>
          {/* ... other color options */}
        </div>
      </div>
      <div className="flex flex-col space-y-2 mt-4">
        <h3 className="text-lg font-bold">PRICE</h3>
        <div className="flex items-center">
          <span>$40</span>
          <input type="range" min={40} max={100} value={priceRange} onChange={(e) => handlePriceFilter(e.target.value)} className="flex-grow mx-2" />
          <span>$100</span>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-4">Filter</button>
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-bold">TOP RATED PRODUCTS</h3>
        <div className="flex flex-col gap-2">
          {/* Product cards here */}
          <div className="border p-4">
            <img src="/path/to/product-image.jpg" alt="Product image" className="w-full h-40 object-cover mb-2" />
            <h4 className="text-lg font-semibold">Stokke Scoot Stroller</h4>
            <p className="text-gray-500">in Slate Blue</p>
            <p className="text-gray-500">Price: $45</p>
          </div>
          <div className="border p-4">
            <img src="/path/to/product-image.jpg" alt="Product image" className="w-full h-40 object-cover mb-2" />
            <h4 className="text-lg font-semibold">Stokke Scoot Stroller</h4>
            <p className="text-gray-500">in Slate Blue</p>
            <p className="text-gray-500">Price: $45</p>
          </div>
          <div className="border p-4">
            <img src="/path/to/product-image.jpg" alt="Product image" className="w-full h-40 object-cover mb-2" />
            <h4 className="text-lg font-semibold">Stokke Scoot Stroller</h4>
            <p className="text-gray-500">in Slate Blue</p>
            <p className="text-gray-500">Price: $45</p>
          </div>
        </div>
      </div>
    </div>
    <div className="container mx-auto bg-white m-5 p-5">
      <h2 className="text-2xl font-bold text-center mb-4">Activity</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border border-gray-200 p-4">
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
    </div>
  );
}

export default ActivityComponent;
