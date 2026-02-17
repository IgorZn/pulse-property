// components/PropertyList.tsx
import PropertyCard from '@/components/property-card';
import properties from '../../properties.json'



export default function PropertyList() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-6">Available Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {properties.map((property) => (
                    <PropertyCard
                        key={property._id}
                        id={property._id}
                        type={property.type}
                        title={property.description}
                        rates={property.rates}
                        beds={property.beds}
                        baths={property.baths}
                        sqft={property.square_feet}
                        location={property.location}
                        images={property.images}
                    />
                ))}
            </div>
        </div>
    );
}