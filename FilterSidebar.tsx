import React from 'react';
import { Filter, X } from 'lucide-react';

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
  selectedRating: number;
  onRatingChange: (rating: number) => void;
}

const categories = [
  'All',
  'Pizza',
  'Burger',
  'Asian',
  'Italian',
  'Mexican',
  'Healthy',
  'Dessert',
  'Beverages'
];

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  isOpen,
  onClose,
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
  selectedRating,
  onRatingChange,
}) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed lg:static top-0 left-0 h-full lg:h-auto w-80 bg-white shadow-lg z-50
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          lg:shadow-none lg:bg-transparent
        `}
      >
        <div className="p-6 lg:p-0">
          {/* Header */}
          <div className="flex items-center justify-between mb-6 lg:hidden">
            <h3 className="text-lg font-semibold flex items-center">
              <Filter className="w-5 h-5 mr-2" />
              Filters
            </h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-6">
            {/* Categories */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-4">Categories</h4>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => onCategoryChange(category)}
                    className={`
                      w-full text-left px-3 py-2 rounded-lg transition-colors duration-200
                      ${selectedCategory === category
                        ? 'bg-primary-100 text-primary-700 font-medium'
                        : 'text-gray-600 hover:bg-gray-50'
                      }
                    `}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-4">Price Range</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={priceRange[1]}
                  onChange={(e) => onPriceRangeChange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    min="0"
                    max="50"
                    value={priceRange[0]}
                    onChange={(e) => onPriceRangeChange([parseInt(e.target.value), priceRange[1]])}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    placeholder="Min"
                  />
                  <span className="text-gray-500">-</span>
                  <input
                    type="number"
                    min="0"
                    max="50"
                    value={priceRange[1]}
                    onChange={(e) => onPriceRangeChange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    placeholder="Max"
                  />
                </div>
              </div>
            </div>

            {/* Rating Filter */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-4">Minimum Rating</h4>
              <div className="space-y-2">
                {[4.5, 4.0, 3.5, 3.0, 0].map((rating) => (
                  <button
                    key={rating}
                    onClick={() => onRatingChange(rating)}
                    className={`
                      w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 flex items-center
                      ${selectedRating === rating
                        ? 'bg-primary-100 text-primary-700 font-medium'
                        : 'text-gray-600 hover:bg-gray-50'
                      }
                    `}
                  >
                    <span className="flex items-center">
                      {rating === 0 ? 'All Ratings' : `${rating}+ ⭐`}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;