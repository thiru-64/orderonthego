import React from 'react';
import { Clock, CheckCircle, Truck, MapPin } from 'lucide-react';

const OrdersPage: React.FC = () => {
  // Mock order data
  const orders = [
    {
      id: 'ORD-001',
      date: '2024-01-15',
      status: 'delivered',
      total: 24.97,
      items: [
        { name: 'Margherita Pizza', quantity: 1, price: 12.99 },
        { name: 'Caesar Salad', quantity: 1, price: 8.99 },
      ],
      restaurant: 'Bella Italia',
      deliveryAddress: '123 Main St, Apt 4B',
      estimatedTime: 'Delivered at 2:30 PM',
    },
    {
      id: 'ORD-002',
      date: '2024-01-14',
      status: 'on_the_way',
      total: 16.48,
      items: [
        { name: 'Classic Burger', quantity: 1, price: 9.99 },
        { name: 'Fresh Orange Juice', quantity: 1, price: 4.99 },
      ],
      restaurant: 'Burger Palace',
      deliveryAddress: '123 Main St, Apt 4B',
      estimatedTime: 'Arriving in 15-20 minutes',
    },
    {
      id: 'ORD-003',
      date: '2024-01-13',
      status: 'preparing',
      total: 21.48,
      items: [
        { name: 'Chicken Pad Thai', quantity: 1, price: 14.50 },
        { name: 'Chocolate Brownie', quantity: 1, price: 6.99 },
      ],
      restaurant: 'Spice Garden',
      deliveryAddress: '123 Main St, Apt 4B',
      estimatedTime: 'Ready in 20-25 minutes',
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'preparing':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'on_the_way':
        return <Truck className="w-5 h-5 text-blue-500" />;
      case 'delivered':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      default:
        return <Clock className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'preparing':
        return 'Preparing';
      case 'on_the_way':
        return 'On the way';
      case 'delivered':
        return 'Delivered';
      default:
        return 'Unknown';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'preparing':
        return 'bg-yellow-100 text-yellow-800';
      case 'on_the_way':
        return 'bg-blue-100 text-blue-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Your Orders</h1>
          <p className="text-gray-600 mt-2">Track your current and past orders</p>
        </div>

        {orders.length > 0 ? (
          <div className="space-y-6 animate-fade-in">
            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200"
              >
                {/* Order Header */}
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Order #{order.id}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Placed on {new Date(order.date).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                        {getStatusIcon(order.status)}
                        <span className="ml-2">{getStatusText(order.status)}</span>
                      </div>
                      <p className="text-lg font-bold text-gray-900 mt-1">
                        ${order.total.toFixed(2)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-600 text-sm mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{order.deliveryAddress}</span>
                  </div>

                  <div className="flex items-center text-gray-600 text-sm">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{order.estimatedTime}</span>
                  </div>
                </div>

                {/* Order Items */}
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">
                      From {order.restaurant}
                    </h4>
                  </div>

                  <div className="space-y-3">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <span className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-sm font-medium text-gray-600 mr-3">
                            {item.quantity}
                          </span>
                          <span className="text-gray-900">{item.name}</span>
                        </div>
                        <span className="text-gray-900 font-medium">
                          ${item.price.toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Order Actions */}
                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    {order.status === 'on_the_way' && (
                      <button className="bg-primary-100 text-primary-700 px-4 py-2 rounded-lg hover:bg-primary-200 transition-colors duration-200 font-medium">
                        Track Order
                      </button>
                    )}
                    {order.status === 'delivered' && (
                      <>
                        <button className="bg-secondary-100 text-secondary-700 px-4 py-2 rounded-lg hover:bg-secondary-200 transition-colors duration-200 font-medium">
                          Reorder
                        </button>
                        <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-200 font-medium">
                          Rate Order
                        </button>
                      </>
                    )}
                    <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-200 font-medium">
                      Get Help
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 animate-fade-in">
            <div className="text-gray-400 mb-6">
              <CheckCircle className="w-24 h-24 mx-auto" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">No orders yet</h2>
            <p className="text-gray-600 mb-8">Start by ordering some delicious food!</p>
            <a
              href="/menu"
              className="bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors duration-200"
            >
              Browse Menu
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrdersPage;