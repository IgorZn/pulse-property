// components/property/property-rates.tsx
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";

export default function PropertyRates() {
    return (
        <div className="mb-4 bg-blue-50 p-4">
            <Label className="block text-gray-700 font-bold mb-2">
                Rates (Leave blank if not applicable)
            </Label>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <div className="flex items-center">
                    <Label htmlFor="weekly_rate" className="mr-2">Weekly</Label>
                    <Input
                        type="number"
                        id="weekly_rate"
                        name="weekly"
                        className="border rounded w-full py-2 px-3"
                    />
                </div>
                <div className="flex items-center">
                    <Label htmlFor="monthly_rate" className="mr-2">Monthly</Label>
                    <Input
                        type="number"
                        id="monthly_rate"
                        name="monthly"
                        className="border rounded w-full py-2 px-3"
                    />
                </div>
                <div className="flex items-center">
                    <Label htmlFor="nightly_rate" className="mr-2">Nightly</Label>
                    <Input
                        type="number"
                        id="nightly_rate"
                        name="nightly"
                        className="border rounded w-full py-2 px-3"
                    />
                </div>
            </div>
        </div>
    );
}