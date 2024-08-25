import { useState } from 'react';

function CartItem({ item, onQuantityChange }) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity);
    onQuantityChange(item, newQuantity);
  };

  return (
    <div className="border-b py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img src={item.image} alt={item.name} className="w-16 h-16 rounded" />
          <div className="ml-4">
            <h3 className="text-lg font-medium">{item.name}</h3>
            {item.description && (
              <p className="text-gray-600">{item.description}</p>
            )}
          </div>
        </div>
        <div className="flex items-center">
          <div className="mr-4">
            <span className="text-gray-600">Price:</span>
            <span className="font-medium">${item.price.toFixed(2)}</span>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => handleQuantityChange(quantity - 1)}
              disabled={quantity === 1}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              -
            </button>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
              className="w-12 text-center font-medium"
            />
            <button
              onClick={() => handleQuantityChange(quantity + 1)}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cart({ items }) {
  const [cart, setCart] = useState(items);
  const [subtotal, setSubtotal] = useState(
    cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  );
  const [salesTax, setSalesTax] = useState(
    (subtotal * 0.0825).toFixed(2) // Example tax rate
  );
  const [grandTotal, setGrandTotal] = useState(
    (parseFloat(subtotal) + parseFloat(salesTax)).toFixed(2)
  );

  const handleQuantityChange = (item, newQuantity) => {
    const updatedCart = cart.map((cartItem) => {
      if (cartItem.name === item.name) {
        return { ...cartItem, quantity: newQuantity };
      }
      return cartItem;
    });
    setCart(updatedCart);
    setSubtotal(
      updatedCart.reduce((acc, item) => acc + item.price * item.quantity, 0)
    );
    setSalesTax((parseFloat(subtotal) * 0.0825).toFixed(2));
    setGrandTotal(
      (parseFloat(subtotal) + parseFloat(salesTax)).toFixed(2)
    );
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      <div className="border rounded p-4">
        {cart.map((item) => (
          <CartItem key={item.name} item={item} onQuantityChange={handleQuantityChange} />
        ))}
      </div>
      <div className="mt-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-600">Subtotal:</span>
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-600">Sales Tax:</span>
          <span className="font-medium">${salesTax}</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-600">Grand Total:</span>
          <span className="font-bold text-xl">${grandTotal}</span>
        </div>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4">
        Check Out
      </button>
    </div>
  );
}

const items = [
  {
    name: 'Pi Pizza Oven',
    description: 'Fuel Source: Wood Only',
    image: 'https://www.example.com/pizza-oven.jpg', // Replace with actual image URL
    price: 469.99,
    quantity: 1,
  },
  {
    name: 'Grill Ultimate Bundle',
    description: 'Includes everything you need to grill like a pro!',
    image: 'https://www.example.com/grill-bundle.jpg', // Replace with actual image URL
    price: 549.99,
    quantity: 1,
  },
  {
    name: 'Starters (4 pack)',
    description: 'Get your grilling started with these delicious starters!',
    image: 'https://www.example.com/starters.jpg', // Replace with actual image URL
    price: 0.00,
    quantity: 1,
  },
  {
    name: 'Charcoal Grill Pack',
    description: 'High-quality charcoal for your grill',
    image: 'https://www.example.com/charcoal.jpg', // Replace with actual image URL
    price: 0.00,
    quantity: 1,
  },
];

export default function App() {
  return <Cart items={items} />;
}
