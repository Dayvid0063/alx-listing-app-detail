import { useState } from 'react';
import { PropertyProps } from "@/interfaces/index";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = ['What we offer', 'About host', 'Reviews'];

    return (
        <div>
            <h1 className="text-4xl font-bold">{property.name}</h1>
            <div className="flex items-center space-x-2 mt-2">
                <span className="text-yellow-500">★ {property.rating}</span>
                <span>{property.address.city}, {property.address.country}</span>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <img
                    src={property.image}
                    alt={property.name}
                    className="w-full h-96 object-cover rounded-lg"
                />
            </div>

            {/* Custom Tabs */}
            <div className="mt-8">
                <div className="flex space-x-4 border-b">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            className={`py-2 px-4 focus:outline-none ${activeTab === index
                                    ? 'border-b-2 border-blue-500 font-medium'
                                    : 'text-gray-500'
                                }`}
                            onClick={() => setActiveTab(index)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="mt-4">
                    {/* What we offer */}
                    {activeTab === 0 && (
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {property.category.map((amenity, index) => (
                                <div key={index} className="flex items-center space-x-2 p-2">
                                    <span>{amenity}</span>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* About host */}
                    {activeTab === 1 && (
                        <div className="prose max-w-none">
                            <p>Information about the host will be displayed here.</p>
                        </div>
                    )}

                    {/* Reviews tab content will be handled by ReviewSection component */}
                    {activeTab === 2 && (
                        <div className="prose max-w-none">
                            <p>Reviews will be displayed here.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PropertyDetail;
