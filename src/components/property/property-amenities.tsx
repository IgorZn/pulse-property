// components/property/property-amenities.tsx
'use client';

import { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

const amenitiesList = [
    { id: 'wifi', label: 'Wifi', value: 'Wifi' },
    { id: 'kitchen', label: 'Full kitchen', value: 'Full kitchen' },
    { id: 'washer_dryer', label: 'Washer & Dryer', value: 'Washer & Dryer' },
    { id: 'free_parking', label: 'Free Parking', value: 'Free Parking' },
    { id: 'pool', label: 'Swimming Pool', value: 'Swimming Pool' },
    { id: 'hot_tub', label: 'Hot Tub', value: 'Hot Tub' },
    { id: 'security', label: '24/7 Security', value: '24/7 Security' },
    { id: 'wheelchair', label: 'Wheelchair Accessible', value: 'Wheelchair Accessible' },
    { id: 'elevator', label: 'Elevator Access', value: 'Elevator Access' },
    { id: 'dishwasher', label: 'Dishwasher', value: 'Dishwasher' },
    { id: 'gym', label: 'Gym/Fitness Center', value: 'Gym/Fitness Center' },
    { id: 'ac', label: 'Air Conditioning', value: 'Air Conditioning' },
    { id: 'balcony', label: 'Balcony/Patio', value: 'Balcony/Patio' },
    { id: 'smart_tv', label: 'Smart TV', value: 'Smart TV' },
    { id: 'coffee_maker', label: 'Coffee Maker', value: 'Coffee Maker' },
];

export default function PropertyAmenities() {
    const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

    const handleAmenityChange = (value: string, checked: boolean | 'indeterminate') => {
        if (checked === true) {
            setSelectedAmenities(prev => [...prev, value]);
        } else {
            setSelectedAmenities(prev => prev.filter(a => a !== value));
        }
    };

    const isChecked = (value: string) => {
        return selectedAmenities.includes(value);
    };

    return (
        <div className="mb-4">
            <Label className="block text-gray-700 font-bold mb-2">
                Amenities
            </Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {amenitiesList.map((amenity) => (
                    <div key={amenity.id} className="flex items-center space-x-2">
                        <Checkbox
                            id={`amenity_${amenity.id}`}
                            checked={isChecked(amenity.value)}
                            onCheckedChange={(checked) =>
                                handleAmenityChange(amenity.value, checked)
                            }
                        />
                        <Label
                            htmlFor={`amenity_${amenity.id}`}
                            className="text-sm font-medium leading-none"
                        >
                            {amenity.label}
                        </Label>
                    </div>
                ))}
            </div>
            <input
                type="hidden"
                name="amenities"
                value={selectedAmenities.join(',')}
            />
        </div>
    );
}