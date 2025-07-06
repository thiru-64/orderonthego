import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Shield, Truck, Star } from 'lucide-react';

const HomePage: React.FC = () => {
  const featuredRestaurants = [
    {
      id: '1',
      name: 'Bella Italia',
      cuisine: 'Italian',
      rating: 4.8,
      deliveryTime: '25-35 min',
      image: 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: '2',
      name: 'Spice Garden',
      cuisine: 'Asian Fusion',
      rating: 4.6,
      deliveryTime: '30-40 min',
      image: 'https://images.pexels.com/photos/1199958/pexels-photo-1199958.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: '3',
      name: 'Burger Palace',
      cuisine: 'American',
      rating: 4.7,
      deliveryTime: '20-30 min',
      image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
              Delicious Food
              <span className="block text-primary-200">Delivered Fast</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100 max-w-3xl mx-auto animate-slide-up">
              Order from your favorite restaurants and get fresh, hot meals delivered right to your doorstep
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Link
                to="/menu"
                className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-50 transition-colors duration-200 flex items-center justify-center"
              >
                Order Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/register"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-primary-600 transition-colors duration-200"
              >
                Join Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Foodie Express?
            </h2>
            <p className="text-lg text-gray-600">
              We make food delivery simple, fast, and reliable
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors duration-200">
                <Clock className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Get your food delivered in 30 minutes or less from your favorite restaurants
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-secondary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary-200 transition-colors duration-200">
                <Shield className="w-8 h-8 text-secondary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Safe & Secure</h3>
              <p className="text-gray-600">
                Your payments and personal information are protected with enterprise-grade security
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-200 transition-colors duration-200">
                <Truck className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time Tracking</h3>
              <p className="text-gray-600">
                Track your order in real-time from kitchen to your doorstep
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Restaurants */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Restaurants
            </h2>
            <p className="text-lg text-gray-600">
              Discover amazing food from top-rated restaurants
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredRestaurants.map((restaurant) => (
              <Link
                key={restaurant.id}
                to={`/restaurant/${restaurant.id}`}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                    <span className="text-xs font-medium text-gray-700">{restaurant.rating}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {restaurant.name}
                  </h3>
                  <p className="text-gray-600 mb-3">{restaurant.cuisine}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{restaurant.deliveryTime}</span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      Delivery
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/menu"
              className="bg-primary-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-600 transition-colors duration-200 inline-flex items-center"
            >
              View All Restaurants
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-secondary-600 to-secondary-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to satisfy your cravings?
          </h2>
          <p className="text-xl mb-8 text-secondary-100">
            Join thousands of happy customers who choose Foodie Express for their food delivery needs
          </p>
          <Link
            to="/register"
            className="bg-white text-secondary-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-secondary-50 transition-colors duration-200 inline-flex items-center"
          >
            Get Started Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;