import React, { useState } from "react";

const WishlistComponent = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Beanie with Logo",
      price: 18,
      imageUrl: "/images/beanie.jpg",
      stockStatus: "In Stock",
      addedOn: "December 5, 2019",
    },
    {
      id: 2,
      name: "Classy Shirt",
      price: 16,
      imageUrl: "/images/shirt.jpg",
      stockStatus: "In Stock",
      addedOn: "December 6, 2019",
    },
    {
      id: 3,
      name: "Beanie",
      price: 18,
      imageUrl: "/images/beanie.jpg",
      stockStatus: "In Stock",
      addedOn: "December 6, 2019",
    },
  ]);

  const handleAddToCart = (itemId) => {
    // Replace with your cart logic
    console.log(`Adding item with ID ${itemId} to cart`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">My Wishlist</h1>
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Product Name</th>
            <th className="px-4 py-2 text-left">Unit Price</th>
            <th className="px-4 py-2 text-left">Stock Status</th>
            <th className="px-4 py-2 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {wishlistItems.map((item) => (
            <tr key={item.id}>
              <td className="px-4 py-2">
                <div className="flex items-center">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-12 h-12 rounded-md mr-2"
                  />
                  <span>{item.name}</span>
                </div>
              </td>
              <td className="px-4 py-2">${item.price.toFixed(2)}</td>
              <td className="px-4 py-2">{item.stockStatus}</td>
              <td className="px-4 py-2 text-right">
                <button
                  onClick={() => handleAddToCart(item.id)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Add to Cart
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2">
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WishlistComponent;
