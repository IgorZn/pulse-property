// components/property/property-basic-info.tsx
import {Textarea} from "@/components/ui/textarea";
import {Label} from "@/components/ui/label";

export default function PropertyBasicInfo() {
    return (
        <>
            <div className="mb-4">
                <Label className="block text-gray-700 font-bold mb-2">
                    Listing Name
                </Label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="border rounded w-full py-2 px-3 mb-2"
                    placeholder="eg. Beautiful Apartment In Miami"
                    required
                />
            </div>

            <div className="mb-4">
                <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
                    Description
                </label>
                <Textarea
                    id="description"
                    name="description"
                    className="border rounded w-full py-2 px-3"
                    rows={4}
                    placeholder="Add an optional description of your property"
                />
            </div>
        </>
    );
}