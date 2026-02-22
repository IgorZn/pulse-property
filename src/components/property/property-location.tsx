// components/property/property-location.tsx
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";

export default function PropertyLocation() {
    return (
        <div className="mb-4 bg-blue-50 p-4">
            <Label className="block text-gray-700 font-bold mb-2">
                Location
            </Label>
            <Input
                type="text"
                id="street"
                name="street"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Street"
            />
            <Input
                type="text"
                id="city"
                name="city"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="City"
                required
            />
            <Input
                type="text"
                id="state"
                name="state"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="State"
                required
            />
            <Input
                type="text"
                id="zipcode"
                name="zipcode"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Zipcode"
            />
        </div>
    );
}