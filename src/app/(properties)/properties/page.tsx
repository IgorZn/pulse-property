'use client'

import properties from "../../../../properties.json";
import PropertyList from "@/components/property-list";
import {useEffect, useState} from "react";
import PropertiesLoading from "@/app/(properties)/properties/loading";

function Page() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(false);
    }, []);


    if (isLoading) {
        return <PropertiesLoading />;
    }

    return (
        <>
            {properties.length > 0
                ? (
                    <div className={'px-4 py-6'}>
                        <PropertyList/>
                    </div>
                )
                : (<div>
                    <p>No properties found</p>
                </div>)
            }
        </>
    );
}

export default Page;