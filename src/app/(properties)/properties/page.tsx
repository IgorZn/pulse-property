'use client'

import properties from "../../../../properties.json";
import PropertyList from "@/components/property-list";

function Page() {
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