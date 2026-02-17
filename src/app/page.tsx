import Hero from "@/components/hero";
import InfoBoxes from "@/components/InfoBoxes";

export default function Home() {
    return (
        <div className="flex min-h-screen items-center justify-center  font-sans dark:bg-black">
            <main
                className="flex min-h-screen w-full flex-col items-center justify-between px-16 bg-white dark:bg-black ">
                <div>
                    <Hero />
                    <InfoBoxes />
                </div>
            </main>
        </div>
    );
}
