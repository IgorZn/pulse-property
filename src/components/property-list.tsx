// components/PropertyList.tsx
import PropertyCard from '@/components/property-card';
import type { PropertyWithIncludes } from "@/types/prisma-utils";

interface PropertyListProps {
    properties: PropertyWithIncludes[]; // 👈 тип из Prisma
}


export default function PropertyList({ properties }: PropertyListProps) {
    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-6">Available Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {properties.map((property) => (
                    <PropertyCard
                        key={property.id}
                        property={property}
                    />
                ))}
            </div>
        </div>
    );
}