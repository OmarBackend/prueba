import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import ProductSlider from './Components/ProductSlider';
import Cart from './pages/Cart';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <div className="pt-16">
                  <div className="bg-red-600 text-white py-20">
                    <div className="container mx-auto px-4 text-center">
                      <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Delicious Burgers
                      </h1>
                      <p className="text-xl md:text-2xl mb-8">
                        Made with love, served with passion
                      </p>
                      <button className="bg-yellow-400 text-red-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-300 transition-colors">
                        Order Now
                      </button>
                    </div>
                  </div>
                  <ProductSlider />
                </div>
              </>
            } />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;