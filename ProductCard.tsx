import React from 'react';
import { Plus, Star } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  restaurant: string;
  rating: number;
  prepTime: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      restaurant: product.restaurant,
      category: product.category,
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-700">
          {product.prepTime}
        </div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
          <Star className="w-3 h-3 text-yellow-500 fill-current" />
          <span className="text-xs font-medium text-gray-700">{product.rating}</span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-2">
          <span className="text-xs text-primary-600 font-medium uppercase tracking-wide">
            {product.restaurant}
          </span>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-xs text-gray-500 uppercase tracking-wide">
              {product.category}
            </span>
          </div>
          
          <button
            onClick={handleAddToCart}
            className="bg-primary-500 hover:bg-primary-600 text-white p-3 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;