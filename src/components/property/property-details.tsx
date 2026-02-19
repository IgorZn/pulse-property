// components/property/property-details.tsx
import { Bed, Bath, Square, Home } from "lucide-react";
import { Property } from "@/types/app-types";

interface PropertyDetailsProps {
    property: Property;
}

export default function PropertyDetails({ property }: PropertyDetailsProps) {
    return (
        <div className="border-t pt-6">
            <h2 className="text-2xl font-semibold mb-4">Description & Details</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Характеристики */}
                <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-blue-50 p-4 rounded-lg text-center">
                            <Bed className="h-6 w-6 mx-auto text-blue-600 mb-2" />
                            <p className="text-2xl font-bold">{property.beds}</p>
                            <p className="text-sm text-gray-600">Beds</p>
                        </div>

                        <div className="bg-green-50 p-4 rounded-lg text-center">
                            <Bath className="h-6 w-6 mx-auto text-green-600 mb-2" />
                            <p className="text-2xl font-bold">{property.baths}</p>
                            <p className="text-sm text-gray-600">Baths</p>
                        </div>

                        <div className="bg-purple-50 p-4 rounded-lg text-center">
                            <Square className="h-6 w-6 mx-auto text-purple-600 mb-2" />
                            <p className="text-2xl font-bold">{property.squareFeet}</p>
                            <p className="text-sm text-gray-600">sqft</p>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-gray-700 leading-relaxed">
                            {property.description}
                        </p>
                    </div>
                </div>

                {/* Дополнительная информация */}
                <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3">Property Details</h3>
                    <ul className="space-y-2 text-gray-600">
                        <li className="flex justify-between">
                            <span>Property Type:</span>
                            <span className="font-medium">{property.type}</span>
                        </li>
                        <li className="flex justify-between">
                            <span>Year Built:</span>
                            <span className="font-medium">2020</span>
                        </li>
                        <li className="flex justify-between">
                            <span>Parking:</span>
                            <span className="font-medium">Available</span>
                        </li>
                        <li className="flex justify-between">
                            <span>Pets Allowed:</span>
                            <span className="font-medium">Yes</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}