// components/infoboxes-skeleton.tsx
import { Skeleton } from "@/components/ui/skeleton";

export function InfoBoxesSkeleton() {
    return (
        <section className="my-8">
            <div className="container-xl md:container m-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <Skeleton className="h-8 w-40 mb-4" />
                            <Skeleton className="h-4 w-full mb-2" />
                            <Skeleton className="h-4 w-32 mb-4" />
                            <Skeleton className="h-10 w-32" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}