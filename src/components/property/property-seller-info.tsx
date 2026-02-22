// components/property/property-seller-info.tsx
import { Session } from 'next-auth';
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";

interface PropertySellerInfoProps {
    session: Session;
}

export default function PropertySellerInfo({ session }: PropertySellerInfoProps) {
    return (
        <>
            <div className="mb-4">
                <Label htmlFor="seller_name" className="block text-gray-700 font-bold mb-2">
                    Seller Name
                </Label>
                <Input
                    type="text"
                    id="seller_name"
                    name="sellerName"
                    className="border rounded w-full py-2 px-3"
                    placeholder="Name"
                    defaultValue={session.user?.name || ''}
                />
            </div>

            <div className="mb-4">
                <Label htmlFor="seller_email" className="block text-gray-700 font-bold mb-2">
                    Seller Email
                </Label>
                <Input
                    type="email"
                    id="seller_email"
                    name="sellerEmail"
                    className="border rounded w-full py-2 px-3"
                    placeholder="Email address"
                    required
                    defaultValue={session.user?.email || ''}
                />
            </div>

            <div className="mb-4">
                <Label htmlFor="seller_phone" className="block text-gray-700 font-bold mb-2">
                    Seller Phone
                </Label>
                <Input
                    type="tel"
                    id="seller_phone"
                    name="sellerPhone"
                    className="border rounded w-full py-2 px-3"
                    placeholder="Phone"
                />
            </div>
        </>
    );
}