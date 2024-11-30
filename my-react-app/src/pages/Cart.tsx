import React, { useState } from 'react';
import { Minus, Plus, X } from 'lucide-react';

const Cart = () => {
  const [couponCode, setCouponCode] = useState('');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            {/* Sample Cart Item */}
            <div className="flex items-center border-b border-gray-200 py-4">
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800"
                alt="Classic Burger"
                className="w-24 h-24 object-cover rounded"
              />
              <div className="flex-1 ml-4">
                <h3 className="text-lg font-semibold">Classic Cheese Burger</h3>
                <p className="text-gray-600">SKU: BRG-001</p>
                <div className="flex items-center mt-2">
                  <button className="text-red-600 hover:text-red-700">
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="mx-4">1</span>
                  <button className="text-red-600 hover:text-red-700">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold">$12.99</p>
                <p className="text-sm text-gray-500 line-through">$15.99</p>
                <button className="text-red-600 hover:text-red-700 mt-2">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            
            {/* Coupon Code */}
            <div className="mb-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter coupon code"
                  className="flex-1 border border-gray-300 rounded px-3 py-2"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                />
                <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                  Apply
                </button>
              </div>
            </div>

            {/* Summary Details */}
            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>$12.99</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>$5.00</span>
              </div>
              <div className="flex justify-between font-semibold text-lg border-t border-gray-200 pt-2 mt-2">
                <span>Total</span>
                <span>$17.99</span>
              </div>
            </div>

            <button className="w-full bg-red-600 text-white py-3 rounded-md mt-6 hover:bg-red-700">
              Proceed to Checkout
            </button>

            {/* Help Sections */}
            <div className="mt-6 space-y-4">
              <div className="border-t border-gray-200 pt-4">
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleSection('help')}
                >
                  <span className="font-semibold">Need Help?</span>
                  {expandedSection === 'help' ? <Minus /> : <Plus />}
                </button>
                {expandedSection === 'help' && (
                  <div className="mt-2 text-gray-600">
                    <p>Contact our customer support:</p>
                    <p>Phone: (555) 123-4567</p>
                    <p>Email: support@burgerhub.com</p>
                  </div>
                )}
              </div>

              <div className="border-t border-gray-200 pt-4">
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleSection('payment')}
                >
                  <span className="font-semibold">Payment Methods</span>
                  {expandedSection === 'payment' ? <Minus /> : <Plus />}
                </button>
                {expandedSection === 'payment' && (
                  <div className="mt-2 text-gray-600">
                    <p>We accept:</p>
                    <ul className="list-disc ml-4">
                      <li>Credit/Debit Cards</li>
                      <li>PayPal</li>
                      <li>Cash on Delivery</li>
                    </ul>
                  </div>
                )}
              </div>

              <div className="border-t border-gray-200 pt-4">
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleSection('shipping')}
                >
                  <span className="font-semibold">Shipping & Returns</span>
                  {expandedSection === 'shipping' ? <Minus /> : <Plus />}
                </button>
                {expandedSection === 'shipping' && (
                  <div className="mt-2 text-gray-600">
                    <p>Free delivery for orders over $30</p>
                    <p>Standard delivery: 30-45 minutes</p>
                    <p>Express delivery: 15-25 minutes</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;