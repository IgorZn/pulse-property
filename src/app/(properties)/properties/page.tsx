'use client'

import PropertyList from "@/components/property-list";
import {useEffect, useState} from "react";
import PropertiesLoading from "@/app/(properties)/properties/loading";
import {Button} from "@/components/ui/button";
import {getProperties} from "@/actions/property-actions";
import type { PropertyWithIncludes } from "@/types/prisma-utils";

function Page() {
    const [properties, setProperties] = useState<PropertyWithIncludes[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchProperties() {
            try {
                setIsLoading(true);
                const result = await getProperties();

                if (result.success && result.data) {
                    setProperties(result.data);
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

        fetchProperties();
    }, []);

    if (isLoading) {
        return <PropertiesLoading />;
    }

    if (error) {
        return (
            <div className="px-4 py-6 text-center">
                <p className="text-red-500">{error}</p>
                <Button
                    onClick={() => window.location.reload()}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Try Again
                </Button>
            </div>
        );
    }

    return (
        <>
            {properties.length > 0 ? (
                <div className={''}>
                    <PropertyList properties={properties} />
                </div>
            ) : (
                <div className="text-center py-10">
                    <p className="text-gray-500">No properties found</p>
                </div>
            )}
        </>
    );
}

export default Page;