import Hero from "@/components/hero";
import InfoBoxes from "@/components/InfoBoxes";
import properties from '../../properties.json'
import PropertyList from "@/components/property-list";

export default function Home() {
    return (
        <div className="flex min-h-screen items-center justify-center  font-sans dark:bg-black">
            <main
                className="flex min-h-screen w-full flex-col items-center justify-between px-16 bg-white dark:bg-black ">
                <div>
                    <Hero />
                    <InfoBoxes />
                    {properties.length > 0
                        ? (
                        <div className={'px-4 py-6'}>
                            <PropertyList />
                        </div>
                    )
                    : (<div>
                            <p>No properties found</p>
                        </div>)
                    }

                </div>
            </main>
        </div>
    );
}
