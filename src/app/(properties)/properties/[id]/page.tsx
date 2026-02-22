// app/properties/[id]/page.tsx
import { notFound } from 'next/navigation';
import { getProperty } from '@/actions/property-actions';
import PropertyHeader from '@/components/property/property-header';
import PropertyDetails from '@/components/property/property-details';
import PropertyAmenities from '@/components/property/property-amenities';
import PropertyContact from '@/components/property/property-contact';
import PropertyActions from '@/components/property/property-actions';
import { Suspense } from 'react';
import type { PropertyWithIncludes } from "@/types/prisma-utils";
import {
    PropertyHeaderSkeleton,
    PropertyDetailsSkeleton,
    PropertyAmenitiesSkeleton,
    PropertyContactSkeleton,
    PropertyActionsSkeleton
} from '@/components/property/property-skeletons';

interface PageProps {
    params: {
        id: string;
    };
}

// Тип для ответа от getProperty
interface PropertyResponse {
    success: boolean;
    data?: PropertyWithIncludes;
    error?: string;
}

export default async function PropertyPage({ params }: PageProps) {
    const { id } = await params;
    const result: PropertyResponse  = await getProperty(id);

    if (!result.success || !result.data) {
        notFound();
    }

    const property: PropertyWithIncludes = result.data;

    return (
        <div className="container mx-auto px-4 py-8 max-w-6xl">
            <div className="space-y-8">
                <Suspense fallback={<PropertyHeaderSkeleton />}>
                    <PropertyHeader property={property} />
                </Suspense>

                <Suspense fallback={<PropertyDetailsSkeleton />}>
                    <PropertyDetails property={property} />
                </Suspense>

                <Suspense fallback={<PropertyAmenitiesSkeleton />}>
                    <PropertyAmenities amenities={property.amenities} />
                </Suspense>

                <Suspense fallback={<PropertyContactSkeleton />}>
                    <PropertyContact sellerInfo={property.sellerInfo} />
                </Suspense>

                <Suspense fallback={<PropertyActionsSkeleton />}>
                    <PropertyActions propertyId={property.id} />
                </Suspense>
            </div>
        </div>
    );
}