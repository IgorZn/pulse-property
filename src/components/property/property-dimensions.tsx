// components/property/property-dimensions.tsx
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export default function PropertyDimensions() {
    return (
        <div className="mb-4 flex flex-wrap">
            <div className="w-full sm:w-1/3 pr-2">
                <Label htmlFor="beds" className="block text-gray-700 font-bold mb-2">
                    Beds
                </Label>
                <Input
                    type="number"
                    id="beds"
                    name="beds"
                    min="0"
                    step="1"
                    className="border rounded w-full py-2 px-3"
                    required
                />
            </div>
            <div className="w-full sm:w-1/3 px-2">
                <Label htmlFor="baths" className="block text-gray-700 font-bold mb-2">
                    Baths
                </Label>
                <Input
                    type="number"
                    id="baths"
                    name="baths"
                    min="0"
                    step="0.5"
                    className="border rounded w-full py-2 px-3"
                    required
                />
            </div>
            <div className="w-full sm:w-1/3 pl-2">
                <Label htmlFor="square_feet" className="block text-gray-700 font-bold mb-2">
                    Square Feet
                </Label>
                <Input
                    type="number"
                    id="square_feet"
                    name="squareFeet"
                    min="0"
                    step="1"
                    className="border rounded w-full py-2 px-3"
                    required
                />
            </div>
        </div>
    );
}