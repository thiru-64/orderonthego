import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';

const CartPage: React.FC = () => {
  const { items, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();
  const { user } = useAuth();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCheckout = async () => {
    if (!user) {
      return;
    }

    setIsProcessing(true);
    // Simulate order processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Clear cart after successful order
    clearCart();
    setIsProcessing(false);
    
    // Show success message
    alert('Order placed successfully! You will receive a confirmation email shortly.');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gray-50">
        <div className="text-center animate-fade-in">
          <div className="text-gray-400 mb-6">
            <ShoppingBag className="w-24 h-24 mx-auto" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Add some delicious items to get started!</p>
          <Link
            to="/menu"
            className="bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors duration-200 inline-flex items-center"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Browse Menu
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            to="/menu"
            className="text-primary-600 hover:text-primary-700 transition-colors duration-200 inline-flex items-center mb-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Continue Shopping
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
          <p className="text-gray-600 mt-2">{items.length} {items.length === 1 ? 'item' : 'items'} in your cart</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-start space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                  />
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 truncate">
                          {item.name}
                        </h3>
                        <p className="text-sm text-primary-600 mt-1">{item.restaurant}</p>
                        <p className="text-sm text-gray-500 mt-1">{item.category}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 transition-colors duration-200 p-1"
                        title="Remove item"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                          className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="text-lg font-semibold text-gray-900 min-w-[2rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full bg-primary-100 hover:bg-primary-200 text-primary-600 flex items-center justify-center transition-colors duration-200"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-gray-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                        <p className="text-sm text-gray-500">
                          ${item.price.toFixed(2)} each
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Delivery Fee</span>
                  <span>$2.99</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span>${(getTotalPrice() * 0.08).toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between text-lg font-bold text-gray-900">
                    <span>Total</span>
                    <span>${(getTotalPrice() + 2.99 + getTotalPrice() * 0.08).toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {user ? (
                <button
                  onClick={handleCheckout}
                  disabled={isProcessing}
                  className="w-full bg-primary-500 text-white py-4 rounded-lg font-semibold text-lg hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  {isProcessing ? 'Processing...' : 'Proceed to Checkout'}
                </button>
              ) : (
                <div className="space-y-3">
                  <p className="text-sm text-gray-600 text-center">
                    Please sign in to complete your order
                  </p>
                  <Link
                    to="/login"
                    className="w-full bg-primary-500 text-white py-4 rounded-lg font-semibold text-lg hover:bg-primary-600 transition-colors duration-200 block text-center"
                  >
                    Sign In to Checkout
                  </Link>
                </div>
              )}

              <div className="mt-4 text-center">
                <p className="text-xs text-gray-500">
                  Free delivery on orders over $25
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;