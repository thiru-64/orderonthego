import React, { useState, useMemo } from 'react';
import { Search, Filter } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';

const MenuPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50]);
  const [selectedRating, setSelectedRating] = useState(0);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Mock product data
  const products = [
    {
      id: '1',
      name: 'Margherita Pizza',
      description: 'Classic Italian pizza with fresh mozzarella, tomatoes, and basil',
      price: 12.99,
      image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Pizza',
      restaurant: 'Bella Italia',
      rating: 4.8,
      prepTime: '25-30 min',
    },
    {
      id: '2',
      name: 'Classic Burger',
      description: 'Juicy beef patty with lettuce, tomato, cheese, and our special sauce',
      price: 9.99,
      image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Burger',
      restaurant: 'Burger Palace',
      rating: 4.6,
      prepTime: '15-20 min',
    },
    {
      id: '3',
      name: 'Chicken Pad Thai',
      description: 'Authentic Thai stir-fried noodles with chicken, vegetables, and tamarind sauce',
      price: 14.50,
      image: 'https://images.pexels.com/photos/1199958/pexels-photo-1199958.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Asian',
      restaurant: 'Spice Garden',
      rating: 4.7,
      prepTime: '20-25 min',
    },
    {
      id: '4',
      name: 'Caesar Salad',
      description: 'Fresh romaine lettuce with parmesan cheese, croutons, and caesar dressing',
      price: 8.99,
      image: 'https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Healthy',
      restaurant: 'Green Bowl',
      rating: 4.4,
      prepTime: '10-15 min',
    },
    {
      id: '5',
      name: 'Spaghetti Carbonara',
      description: 'Creamy pasta with pancetta, eggs, parmesan cheese, and black pepper',
      price: 13.99,
      image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Italian',
      restaurant: 'Bella Italia',
      rating: 4.9,
      prepTime: '20-25 min',
    },
    {
      id: '6',
      name: 'Fish Tacos',
      description: 'Grilled fish with cabbage slaw, pico de gallo, and chipotle crema',
      price: 11.99,
      image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Mexican',
      restaurant: 'Taco Fiesta',
      rating: 4.5,
      prepTime: '15-20 min',
    },
    {
      id: '7',
      name: 'Chocolate Brownie',
      description: 'Rich chocolate brownie with vanilla ice cream and chocolate sauce',
      price: 6.99,
      image: 'https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Dessert',
      restaurant: 'Sweet Treats',
      rating: 4.8,
      prepTime: '10-15 min',
    },
    {
      id: '8',
      name: 'Fresh Orange Juice',
      description: 'Freshly squeezed orange juice, no added sugar or preservatives',
      price: 4.99,
      image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Beverages',
      restaurant: 'Fresh Bar',
      rating: 4.3,
      prepTime: '5-10 min',
    },
  ];

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.restaurant.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchesRating = selectedRating === 0 || product.rating >= selectedRating;

      return matchesSearch && matchesCategory && matchesPrice && matchesRating;
    });
  }, [searchTerm, selectedCategory, priceRange, selectedRating]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Browse Menu</h1>
          <p className="text-gray-600">Discover delicious food from our partner restaurants</p>
        </div>

        {/* Search and Filter Bar */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search for food or restaurants..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
            />
          </div>
          <button
            onClick={() => setIsFilterOpen(true)}
            className="lg:hidden bg-white border border-gray-300 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center"
          >
            <Filter className="w-5 h-5 mr-2" />
            Filters
          </button>
        </div>

        <div className="flex gap-8">
          {/* Filter Sidebar */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <FilterSidebar
              isOpen={true}
              onClose={() => {}}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              priceRange={priceRange}
              onPriceRangeChange={setPriceRange}
              selectedRating={selectedRating}
              onRatingChange={setSelectedRating}
            />
          </div>

          {/* Mobile Filter Sidebar */}
          <FilterSidebar
            isOpen={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            priceRange={priceRange}
            onPriceRangeChange={setPriceRange}
            selectedRating={selectedRating}
            onRatingChange={setSelectedRating}
          />

          {/* Products Grid */}
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-gray-600">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'item' : 'items'} found
              </p>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 animate-fade-in">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No items found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;