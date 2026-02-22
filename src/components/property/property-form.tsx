// components/property/property-form.tsx
'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { createProperty } from '../../../src/actions/property-actions';
import PropertyTypeSelect from './property-type-select';
import PropertyBasicInfo from './property-basic-info';
import PropertyLocation from './property-location';
import PropertyDimensions from './property-dimensions';
import PropertyAmenities from './property-amenities';
import PropertyRates from './property-rates';
import PropertySellerInfo from './property-seller-info';
import PropertyImages from './property-images';
import FormActions from './form-actions';

export default function PropertyForm() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (!session) {
        router.push('/auth/signin');
        return null;
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        const formData = new FormData(e.currentTarget);

        // Добавляем ownerId из сессии
        formData.append('ownerId', session.user.id);

        try {
            const result = await createProperty(formData);

            if (result.success && result.data) {
                router.push(`/properties/${result.data.id}`);
            } else {
                setError(result.error || 'Failed to create property');
            }
        } catch (err) {
            setError('An error occurred while creating the property');
            console.error(err);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-3xl text-center font-semibold mb-6">
                Add Property
            </h2>

            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                    {error}
                </div>
            )}

            <PropertyTypeSelect />
            <PropertyBasicInfo />
            <PropertyLocation />
            <PropertyDimensions />
            <PropertyAmenities amenities={[]} />
            <PropertyRates />
            <PropertySellerInfo session={session} />
            <PropertyImages />
            <FormActions isSubmitting={isSubmitting} />
        </form>
    );
}