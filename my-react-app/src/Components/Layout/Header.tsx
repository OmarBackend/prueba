import React, { useState } from 'react';
import { Menu, X, ShoppingCart, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const menuItems = {
  menu: {
    title: 'Menu',
    categories: {
      burgers: {
        name: 'Burgers',
        items: [
          { name: 'Classic Burgers', path: '/burgers/classic' },
          { name: 'Specialty Burgers', path: '/burgers/specialty' },
          { name: 'Veggie Burgers', path: '/burgers/veggie' },
        ]
      },
      sides: {
        name: 'Sides',
        items: [
          { name: 'French Fries', path: '/sides/fries' },
          { name: 'Onion Rings', path: '/sides/onion-rings' },
          { name: 'Salads', path: '/sides/salads' },
        ]
      },
      drinks: {
        name: 'Drinks',
        items: [
          { name: 'Soft Drinks', path: '/drinks/soft-drinks' },
          { name: 'Milkshakes', path: '/drinks/milkshakes' },
          { name: 'Beer', path: '/drinks/beer' },
        ]
      }
    }
  }
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setActiveCategory(activeCategory === category ? null : category);
    setActiveSubmenu(null);
  };

  const toggleSubmenu = (submenu: string) => {
    setActiveSubmenu(activeSubmenu === submenu ? null : submenu);
  };

  return (
    <header className="bg-red-600 text-white fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-yellow-400">
            BurgerHub
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button
                className="flex items-center hover:text-yellow-400 transition-colors"
                onMouseEnter={() => setActiveCategory('menu')}
                onMouseLeave={() => setActiveCategory(null)}
              >
                Menu <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {activeCategory === 'menu' && (
                <div
                  className="absolute top-full left-0 bg-white text-red-600 py-2 w-56 rounded-md shadow-lg"
                  onMouseEnter={() => setActiveCategory('menu')}
                  onMouseLeave={() => setActiveCategory(null)}
                >
                  {Object.entries(menuItems.menu.categories).map(([key, category]) => (
                    <div key={key} className="relative group/sub">
                      <button
                        className="flex items-center justify-between w-full px-4 py-2 hover:bg-red-50 transition-colors"
                        onMouseEnter={() => setActiveSubmenu(key)}
                      >
                        {category.name}
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      {activeSubmenu === key && (
                        <div className="absolute left-full top-0 bg-white text-red-600 py-2 w-48 rounded-md shadow-lg">
                          {category.items.map((item) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              className="block px-4 py-2 hover:bg-red-50 transition-colors"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <Link to="/cart" className="relative hover:text-yellow-400 transition-colors">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-red-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                0
              </span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {Object.entries(menuItems.menu.categories).map(([key, category]) => (
              <div key={key}>
                <button
                  className="flex items-center justify-between w-full py-2 hover:text-yellow-400 transition-colors"
                  onClick={() => toggleSubmenu(key)}
                >
                  {category.name}
                  <ChevronDown className={`w-4 h-4 transform transition-transform ${
                    activeSubmenu === key ? 'rotate-180' : ''
                  }`} />
                </button>
                {activeSubmenu === key && (
                  <div className="pl-4 py-2 space-y-2 bg-red-700 rounded-md mt-1">
                    {category.items.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block py-1 hover:text-yellow-400 transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link to="/cart" className="flex items-center py-2 hover:text-yellow-400 transition-colors">
              <ShoppingCart className="w-6 h-6 mr-2" />
              Cart (0)
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;