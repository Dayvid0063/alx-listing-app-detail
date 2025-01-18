import React from 'react';
import Image from 'next/image';
import Card from '../components/common/Card';
import { PROPERTYLISTINGSAMPLE } from '../constants';

export default function Home() {
  const filters = ['Top Villa', 'Self Checkin', 'Beach Access', 'Mountain View', 'Pet Friendly'];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center">
        <Image
          src="/assets/hero.jpg"
          alt="Hero background"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative text-center text-white z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-xl md:text-2xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex gap-4 overflow-x-auto pb-4">
          {filters.map((filter) => (
            <button
              key={filter}
              className="px-4 py-2 bg-red-500 rounded-full shadow-sm hover:shadow-md transition-shadow whitespace-nowrap text-white hover:text-gray-500"
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Listings Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PROPERTYLISTINGSAMPLE.map((property, index) => (
            <Card
              key={index}
              title={property.name}
              description={property.category.join(' • ')}
              price={property.price}
              image={property.image}
              location={`${property.address.city}, ${property.address.country}`}
              rating={property.rating}
              onClick={() => console.log(`Selected property: ${property.name}`)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
