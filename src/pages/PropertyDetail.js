import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, MapPin, Bed, Bath, Square, Heart, Share2, Users, Wifi, Car, Coffee, Utensils, Tv, Snowflake, Dumbbell, Shield } from 'lucide-react';

const PropertyDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  // Mock property data - in a real app, this would come from an API
  const property = {
    id: parseInt(id),
    title: "Luxury Villa in Malibu",
    location: "Malibu, California",
    price: 2500,
    rating: 4.9,
    reviews: 127,
    images: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80"
    ],
    beds: 4,
    baths: 3,
    sqft: 3200,
    guests: 8,
    featured: true,
    amenities: [
      { name: 'WiFi', icon: Wifi },
      { name: 'Free Parking', icon: Car },
      { name: 'Kitchen', icon: Utensils },
      { name: 'Coffee Maker', icon: Coffee },
      { name: 'TV', icon: Tv },
      { name: 'Air Conditioning', icon: Snowflake },
      { name: 'Gym', icon: Dumbbell },
      { name: 'Security', icon: Shield }
    ],
    description: "Experience the epitome of luxury living in this stunning Malibu villa. Perched on a private bluff with panoramic ocean views, this architectural masterpiece offers the perfect blend of sophistication and comfort. The open-concept design seamlessly connects indoor and outdoor living spaces, creating an ideal setting for both relaxation and entertainment.",
    host: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      rating: 4.9,
      responseTime: "1 hour"
    },
    guestReviews: [
      {
        id: 1,
        user: "Michael Chen",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        rating: 5,
        date: "March 2024",
        comment: "Absolutely stunning property! The ocean views are breathtaking and the amenities are top-notch. Sarah was an excellent host and made our stay unforgettable."
      },
      {
        id: 2,
        user: "Emma Rodriguez",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        rating: 5,
        date: "February 2024",
        comment: "This villa exceeded all our expectations. The attention to detail is remarkable and the location is perfect for a luxury getaway."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Image Gallery */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {/* Main Image */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden"
              >
                <img
                  src={property.images[selectedImage]}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                    <Share2 size={20} className="text-gray-700" />
                  </button>
                  <button 
                    onClick={() => setIsLiked(!isLiked)}
                    className={`p-2 rounded-full transition-colors ${
                      isLiked 
                        ? 'bg-red-500 text-white' 
                        : 'bg-white/90 backdrop-blur-sm text-gray-700 hover:bg-white'
                    }`}
                  >
                    <Heart size={20} fill={isLiked ? 'currentColor' : 'none'} />
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Thumbnail Images */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 gap-4 h-96 lg:h-[500px]">
                {property.images.slice(1).map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
                    className="relative rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-transform"
                    onClick={() => setSelectedImage(index + 1)}
                  >
                    <img
                      src={image}
                      alt={`${property.title} ${index + 2}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Info */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h1 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                      {property.title}
                    </h1>
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin size={16} className="mr-1" />
                      <span>{property.location}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Star className="text-yellow-400" size={16} fill="currentColor" />
                        <span className="font-medium">{property.rating}</span>
                        <span className="text-gray-600">({property.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Property Stats */}
                <div className="flex items-center space-x-8 mb-8 p-6 bg-white rounded-2xl shadow-soft">
                  <div className="flex items-center space-x-2">
                    <Bed size={20} className="text-primary-600" />
                    <span className="font-medium">{property.beds} bedrooms</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Bath size={20} className="text-primary-600" />
                    <span className="font-medium">{property.baths} bathrooms</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Square size={20} className="text-primary-600" />
                    <span className="font-medium">{property.sqft} sqft</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users size={20} className="text-primary-600" />
                    <span className="font-medium">Up to {property.guests} guests</span>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">About this place</h2>
                  <p className="text-gray-700 leading-relaxed">{property.description}</p>
                </div>

                {/* Amenities */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">What this place offers</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {property.amenities.map((amenity, index) => (
                      <motion.div
                        key={amenity.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-soft"
                      >
                        <amenity.icon size={20} className="text-primary-600" />
                        <span className="font-medium text-gray-700">{amenity.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Reviews */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Reviews</h2>
                  <div className="space-y-6">
                    {property.guestReviews.map((review, index) => (
                      <motion.div
                        key={review.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="bg-white p-6 rounded-2xl shadow-soft"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <img
                              src={review.avatar}
                              alt={review.user}
                              className="w-12 h-12 rounded-full object-cover"
                            />
                            <div>
                              <div className="font-semibold text-gray-900">{review.user}</div>
                              <div className="text-sm text-gray-600">{review.date}</div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="text-yellow-400" size={16} fill="currentColor" />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Booking Card */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="sticky top-24"
              >
                <div className="bg-white rounded-2xl shadow-luxury p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-3xl font-bold text-gray-900">
                        ${property.price.toLocaleString()}
                        <span className="text-lg font-normal text-gray-600">/night</span>
                      </div>
                      <div className="flex items-center space-x-1 mt-1">
                        <Star className="text-yellow-400" size={16} fill="currentColor" />
                        <span className="font-medium">{property.rating}</span>
                        <span className="text-gray-600">({property.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>

                  {/* Quick Booking Form */}
                  <div className="space-y-4 mb-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Check-in</label>
                        <input
                          type="date"
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Check-out</label>
                        <input
                          type="date"
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Guests</label>
                      <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
                        {[...Array(property.guests)].map((_, i) => (
                          <option key={i + 1} value={i + 1}>{i + 1} guest{i + 1 !== 1 ? 's' : ''}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <Link to={`/booking/${property.id}`} className="w-full btn-primary text-center">
                    Reserve Now
                  </Link>

                  <div className="text-center text-sm text-gray-600 mt-4">
                    You won't be charged yet
                  </div>

                  {/* Host Info */}
                  <div className="border-t border-gray-200 pt-6 mt-6">
                    <div className="flex items-center space-x-3">
                      <img
                        src={property.host.avatar}
                        alt={property.host.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold text-gray-900">{property.host.name}</div>
                        <div className="text-sm text-gray-600">Response time: {property.host.responseTime}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyDetail; 