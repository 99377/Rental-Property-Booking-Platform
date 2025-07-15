import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Star, MapPin, Bed, Bath, Square, ArrowRight, Heart, SlidersHorizontal } from 'lucide-react';

const Properties = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const initialSearch = params.get('search') || '';
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [selectedAmenities, setSelectedAmenities] = useState([]);

  useEffect(() => {
    setSearchQuery(initialSearch);
  }, [initialSearch]);

  const properties = [
    {
      id: 1,
      title: "Luxury Villa in Malibu",
      location: "Malibu, California",
      price: 2500,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      beds: 4,
      baths: 3,
      sqft: 3200,
      featured: true,
      amenities: ['Pool', 'Gym', 'Ocean View', 'Private Beach']
    },
    {
      id: 2,
      title: "Modern Penthouse",
      location: "Miami Beach, Florida",
      price: 1800,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
      beds: 3,
      baths: 2,
      sqft: 2400,
      featured: false,
      amenities: ['Balcony', 'City View', 'Gym', 'Concierge']
    },
    {
      id: 3,
      title: "Beachfront Paradise",
      location: "Hawaii, Oahu",
      price: 3200,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
      beds: 5,
      baths: 4,
      sqft: 4200,
      featured: true,
      amenities: ['Private Beach', 'Infinity Pool', 'Spa', 'Helipad']
    },
    {
      id: 4,
      title: "Mountain Retreat",
      location: "Aspen, Colorado",
      price: 2800,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      beds: 4,
      baths: 3,
      sqft: 3800,
      featured: false,
      amenities: ['Ski-in/Ski-out', 'Hot Tub', 'Fireplace', 'Mountain View']
    },
    {
      id: 5,
      title: "Urban Loft",
      location: "New York, NY",
      price: 2200,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      beds: 2,
      baths: 2,
      sqft: 1800,
      featured: false,
      amenities: ['Rooftop Deck', 'Doorman', 'Gym', 'City View']
    },
    {
      id: 6,
      title: "Desert Oasis",
      location: "Palm Springs, California",
      price: 1900,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80",
      beds: 3,
      baths: 2,
      sqft: 2200,
      featured: false,
      amenities: ['Private Pool', 'Desert View', 'Spa', 'Golf Course']
    }
  ];

  const locations = ['All Locations', 'Malibu, California', 'Miami Beach, Florida', 'Hawaii, Oahu', 'Aspen, Colorado', 'New York, NY', 'Palm Springs, California'];
  const amenities = ['Pool', 'Gym', 'Ocean View', 'Private Beach', 'Balcony', 'City View', 'Concierge', 'Spa', 'Helipad', 'Ski-in/Ski-out', 'Hot Tub', 'Fireplace', 'Mountain View', 'Rooftop Deck', 'Doorman', 'Desert View', 'Golf Course'];

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation = !selectedLocation || selectedLocation === 'All Locations' || property.location === selectedLocation;
    const matchesPrice = property.price >= priceRange[0] && property.price <= priceRange[1];
    const matchesAmenities = selectedAmenities.length === 0 || 
                            selectedAmenities.some(amenity => property.amenities.includes(amenity));
    
    return matchesSearch && matchesLocation && matchesPrice && matchesAmenities;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-luxury-600 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Discover Your Perfect Property
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Explore our curated collection of luxury properties and find your ideal getaway
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Search */}
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search properties..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Location Filter */}
            <div>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full py-3 px-4 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>

            {/* Price Range */}
            <div>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  placeholder="Min"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                  className="w-full py-3 px-4 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <span className="text-gray-500">-</span>
                <input
                  type="number"
                  placeholder="Max"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 5000])}
                  className="w-full py-3 px-4 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Amenities Filter */}
          <div className="mt-6">
            <div className="flex items-center space-x-2 mb-4">
              <SlidersHorizontal size={20} className="text-gray-600" />
              <span className="font-medium text-gray-700">Amenities</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {amenities.map(amenity => (
                <button
                  key={amenity}
                  onClick={() => {
                    if (selectedAmenities.includes(amenity)) {
                      setSelectedAmenities(selectedAmenities.filter(a => a !== amenity));
                    } else {
                      setSelectedAmenities([...selectedAmenities, amenity]);
                    }
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedAmenities.includes(amenity)
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {amenity}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredProperties.length} Properties Found
            </h2>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Sort by:</span>
              <select className="py-2 px-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating</option>
                <option>Newest</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link to={`/property/${property.id}`}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-soft card-hover">
                    <div className="relative">
                      <img
                        src={property.image}
                        alt={property.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {property.featured && (
                        <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Featured
                        </div>
                      )}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                        <Heart className="text-gray-600 hover:text-red-500 transition-colors" size={20} />
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                          {property.title}
                        </h3>
                        <div className="flex items-center space-x-1">
                          <Star className="text-yellow-400" size={16} fill="currentColor" />
                          <span className="text-sm font-medium">{property.rating}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-gray-600 mb-4">
                        <MapPin size={16} className="mr-1" />
                        <span className="text-sm">{property.location}</span>
                      </div>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Bed size={16} className="mr-1" />
                            <span>{property.beds}</span>
                          </div>
                          <div className="flex items-center">
                            <Bath size={16} className="mr-1" />
                            <span>{property.baths}</span>
                          </div>
                          <div className="flex items-center">
                            <Square size={16} className="mr-1" />
                            <span>{property.sqft} sqft</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-primary-600">
                          ${property.price.toLocaleString()}
                          <span className="text-sm font-normal text-gray-600">/night</span>
                        </div>
                        <ArrowRight className="text-primary-600 group-hover:translate-x-1 transition-transform" size={20} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredProperties.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-gray-500 text-lg mb-4">No properties found matching your criteria</div>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedLocation('');
                  setPriceRange([0, 5000]);
                  setSelectedAmenities([]);
                }}
                className="btn-primary"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Properties; 