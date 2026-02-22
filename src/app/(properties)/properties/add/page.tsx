// app/properties/add/page.tsx
import { Suspense } from 'react';
import PropertyForm from '@/components/property/property-form';
import PropertyFormSkeleton from '@/components/property/property-form-skeleton';

export default function AddPropertyPage() {
    return (
        <section className="min-h-screen py-8">
            <div className="container m-auto max-w-6xl">
                <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
                    <Suspense fallback={<PropertyFormSkeleton />}>
                        <PropertyForm />
                    </Suspense>
                </div>
            </div>
        </section>
    );
}