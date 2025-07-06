import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, Clock, MapPin, Phone } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const RestaurantPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Mock restaurant data
  const restaurant = {
    id: '1',
    name: 'Bella Italia',
    cuisine: 'Italian',
    rating: 4.8,
    deliveryTime: '25-35 min',
    deliveryFee: 2.99,
    minimumOrder: 15.00,
    image: 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=800',
    address: '123 Italian Street, Food District',
    phone: '+1 (555) 123-4567',
    description: 'Authentic Italian cuisine made with the finest ingredients. Experience the taste of Italy with our traditional recipes passed down through generations.',
  };

  const menuItems = [
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
      id: '5',
      name: 'Spaghetti Carbonara',
      description: 'Creamy pasta with pancetta, eggs, parmesan cheese, and black pepper',
      price: 13.99,
      image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Pasta',
      restaurant: 'Bella Italia',
      rating: 4.9,
      prepTime: '20-25 min',
    },
    {
      id: '9',
      name: 'Fettuccine Alfredo',
      description: 'Rich and creamy pasta with parmesan cheese and butter sauce',
      price: 14.99,
      image: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Pasta',
      restaurant: 'Bella Italia',
      rating: 4.7,
      prepTime: '20-25 min',
    },
    {
      id: '10',
      name: 'Tiramisu',
      description: 'Classic Italian dessert with coffee-soaked ladyfingers and mascarpone',
      price: 7.99,
      image: 'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Dessert',
      restaurant: 'Bella Italia',
      rating: 4.9,
      prepTime: '5 min',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Restaurant Header */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{restaurant.name}</h1>
            <p className="text-lg text-gray-200 mb-4">{restaurant.description}</p>
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                <span>{restaurant.rating}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>{restaurant.deliveryTime}</span>
              </div>
              <div className="flex items-center">
                <span>${restaurant.deliveryFee} delivery fee</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Menu</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 animate-fade-in">
                {menuItems.map(item => (
                  <ProductCard key={item.id} product={item} />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Restaurant Info</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Address</p>
                    <p className="text-sm text-gray-600">{restaurant.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Phone</p>
                    <p className="text-sm text-gray-600">{restaurant.phone}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Delivery Time</p>
                    <p className="text-sm text-gray-600">{restaurant.deliveryTime}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Delivery Fee</span>
                    <span className="text-gray-900">${restaurant.deliveryFee}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Minimum Order</span>
                    <span className="text-gray-900">${restaurant.minimumOrder}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center space-x-2 mb-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-gray-900">{restaurant.rating} Rating</span>
                </div>
                <p className="text-xs text-gray-600">
                  Based on 150+ customer reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantPage;