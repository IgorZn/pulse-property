// components/home-prop.tsx (клиентский компонент)
'use client';

import React, { useState, useEffect } from 'react';
import PropertyCard from "@/components/property-card";
import type { PropertyWithIncludes } from "@/types/prisma-utils";
import { getRandomProperties } from '@/actions/property-actions';
import {Button} from "@/components/ui/button";

export type PropertiesResponse = {
    success: boolean;
    data?: PropertyWithIncludes[];
    error?: string;
};

function HomeProp() {
    const [randomProps, setRandomProps] = useState<PropertyWithIncludes[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        async function fetchRandomProperties() {
            try {
                setIsLoading(true);
                // Вызываем server action
                const result = await getRandomProperties(3);

                if (result.success && result.data) {
                    setRandomProps(result.data);
                } else {
                    setError(result.error || 'Failed to load properties');
                }
            } catch (err) {
                setError('An error occurred while loading properties');
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        }

        fetchRandomProperties();
    }, []);

    if (isLoading) {
        return (
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-2xl font-bold mb-6">Available Properties</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="h-96 w-96 bg-gray-200 animate-pulse rounded-lg" />
                    ))}
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-2xl font-bold mb-6">Available Properties</h2>
                <div className="text-center text-red-500">
                    <p>{error}</p>
                    <Button
                        onClick={() => window.location.reload()}
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Try Again
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-6">Available Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {randomProps.map((property) => (
                    <PropertyCard
                        key={property.id}
                        property={property}
                    />
                ))}
            </div>
        </div>
    );
}

export default HomeProp;