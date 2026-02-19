import { Skeleton } from "@/components/ui/skeleton";

export function PropertyHeaderSkeleton() {
    return (
        <div className="space-y-4">
            <Skeleton className="h-10 w-96" />
            <Skeleton className="h-6 w-[500px]" />
            <div className="border-t pt-4">
                <Skeleton className="h-8 w-48 mb-4" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="bg-gray-50 p-4 rounded-lg">
                            <Skeleton className="h-4 w-16 mb-2" />
                            <Skeleton className="h-8 w-24" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export function PropertyDetailsSkeleton() {
    return (
        <div className="border-t pt-6">
            <Skeleton className="h-8 w-64 mb-4" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="bg-gray-50 p-4 rounded-lg">
                                <Skeleton className="h-8 w-8 mx-auto mb-2" />
                                <Skeleton className="h-6 w-12 mx-auto" />
                            </div>
                        ))}
                    </div>
                    <Skeleton className="h-24 w-full" />
                </div>
                <Skeleton className="h-48 w-full" />
            </div>
        </div>
    );
}

export function PropertyAmenitiesSkeleton() {
    return (
        <div className="border-t pt-6">
            <Skeleton className="h-8 w-48 mb-6" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <Skeleton className="h-5 w-5 rounded-full" />
                        <Skeleton className="h-4 w-24" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export function PropertyContactSkeleton() {
    return (
        <div className="border-t pt-6">
            <Skeleton className="h-8 w-64 mb-6" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Skeleton className="h-48 w-full" />
                <div className="md:col-span-2 space-y-4">
                    {[1, 2, 3, 4].map(i => (
                        <Skeleton key={i} className="h-12 w-full" />
                    ))}
                    <Skeleton className="h-10 w-32" />
                </div>
            </div>
        </div>
    );
}

export function PropertyActionsSkeleton() {
    return (
        <div className="border-t pt-6 flex justify-between items-center">
            <Skeleton className="h-10 w-32" />
            <div className="flex gap-3">
                <Skeleton className="h-10 w-24" />
                <Skeleton className="h-10 w-24" />
            </div>
        </div>
    );
}