import { MapPin } from "lucide-react";
import type { PropertyWithRelations } from '@/types/prisma-types';

interface PropertyHeaderProps {
    property: PropertyWithRelations;
}

export default function PropertyHeader({ property }: PropertyHeaderProps) {
    return (
        <div className="space-y-4">
            <h1 className="text-4xl font-bold">{property.name}</h1>

            <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="h-5 w-5" />
                <span className="text-lg">
                    {property.location.street}, {property.location.city}, {property.location.state} {property.location.zipcode}
                </span>
            </div>

            <div className="border-t pt-4">
                <h2 className="text-2xl font-semibold mb-4">Rates & Options</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-500">Nightly</p>
                        {property.rates.nightly ? (
                            <p className="text-2xl font-bold">${property.rates.nightly}</p>
                        ) : (
                            <p className="text-xl text-gray-400">✖️ Not available</p>
                        )}
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-500">Weekly</p>
                        {property.rates.weekly ? (
                            <p className="text-2xl font-bold">${property.rates.weekly}</p>
                        ) : (
                            <p className="text-xl text-gray-400">✖️ Not available</p>
                        )}
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-500">Monthly</p>
                        {property.rates.monthly ? (
                            <p className="text-2xl font-bold">${property.rates.monthly}</p>
                        ) : (
                            <p className="text-xl text-gray-400">✖️ Not available</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}