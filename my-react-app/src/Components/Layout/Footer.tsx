import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const footerSections = {
  help: {
    title: 'Need Help?',
    items: [
      { name: 'FAQ', path: '/faq' },
      { name: 'Contact Us', path: '/contact' },
      { name: 'Order Status', path: '/order-status' },
    ]
  },
  payment: {
    title: 'Payment Methods',
    items: [
      { name: 'Credit Cards', path: '/payment/credit-cards' },
      { name: 'PayPal', path: '/payment/paypal' },
      { name: 'Cash on Delivery', path: '/payment/cash' },
    ]
  },
  shipping: {
    title: 'Shipping & Returns',
    items: [
      { name: 'Delivery Areas', path: '/delivery' },
      { name: 'Delivery Times', path: '/delivery-times' },
      { name: 'Returns Policy', path: '/returns' },
    ]
  }
};

const Footer = () => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <footer className="bg-red-600 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Collapsible Sections */}
        <div className="space-y-2">
          {Object.entries(footerSections).map(([key, { title, items }]) => (
            <div key={key} className="border-b border-red-500">
              <button
                className="flex items-center justify-between w-full py-3"
                onClick={() => toggleSection(key)}
              >
                <span className="text-lg font-semibold">{title}</span>
                {openSections[key] ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openSections[key] ? 'max-h-48' : 'max-h-0'
                }`}
              >
                <div className="space-y-2 pb-4">
                  {items.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block hover:text-yellow-400 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} BurgerHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;