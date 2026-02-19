import {
    Wifi,
    Coffee,
    Car,
    Waves,
    Shield,
    Accessibility,
    ArrowUp,
    Utensils,
    Dumbbell,
    Wind,
    Trees,
    Tv,
    FlaskConical,
    Check
} from "lucide-react";

interface PropertyAmenitiesProps {
    amenities: string[];
}

const amenityIcons: { [key: string]: any } = {
    'Wifi': Wifi,
    'Full kitchen': Utensils,
    'Washer & Dryer': FlaskConical,
    'Free Parking': Car,
    'Hot Tub': Waves,
    '24/7 Security': Shield,
    'Wheelchair Accessible': Accessibility,
    'Elevator Access': ArrowUp,
    'Dishwasher': Utensils,
    'Gym/Fitness Center': Dumbbell,
    'Air Conditioning': Wind,
    'Balcony/Patio': Trees,
    'Smart TV': Tv,
    'Coffee Maker': Coffee
};

export default function PropertyAmenities({ amenities }: PropertyAmenitiesProps) {
    return (
        <div className="border-t pt-6">
            <h2 className="text-2xl font-semibold mb-6">Amenities</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {amenities.map((amenity, index) => {
                    const Icon = amenityIcons[amenity] || Check;

                    return (
                        <div
                            key={index}
                            className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            <Icon className="h-5 w-5 text-blue-600 shrink-0" />
                            <span className="text-gray-700">{amenity}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}