import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const router = useRouter();

  // Load cart items from localStorage on page load
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  // Update cart in localStorage and state when quantity changes
  const updateQuantity = (id, quantity) => {
    const updatedCart = cartItems.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Remove an item from the cart
  const removeItem = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Calculate total price of items in the cart
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  // Navigate back to the menu
  const goToMenu = () => {
    router.push('/menu-of-the-week');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Shopping Cart</h1>

      {cartItems.length > 0 ? (
        <div className="cart">
          <table className="w-full text-left table-auto mb-8">
            <thead>
              <tr className="border-b">
                <th className="p-4">Product</th>
                <th className="p-4">Price</th>
                <th className="p-4">Quantity</th>
                <th className="p-4">Total</th>
                <th className="p-4"></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item => (
                <tr key={item.id} className="border-b">
                  <td className="p-4 flex items-center">
                    <Image src={item.image} alt={item.name} width={60} height={60} objectFit="cover" />
                    <span className="ml-4">{item.name}</span>
                  </td>
                  <td className="p-4">${item.price.toFixed(2)}</td>
                  <td className="p-4">
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      className="w-16 border p-2"
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    />
                  </td>
                  <td className="p-4">${(item.price * item.quantity).toFixed(2)}</td>
                  <td className="p-4">
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="text-right">
            <h2 className="text-2xl font-bold mb-4">Total: ${calculateTotal()}</h2>
            <button className="bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600">
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        <div>
          <p className="text-lg mb-4">Your cart is currently empty.</p>
          <button 
            onClick={goToMenu}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Go Back to Menu
          </button>
        </div>
      )}
    </div>
  );
}
