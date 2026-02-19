// components/property-card-skeleton.tsx
import {Skeleton} from "@/components/ui/skeleton";
import {Card, CardContent} from "@/components/ui/card";

export function PropertyCardSkeleton() {
    return (
        <Card className="overflow-hidden">
            <Skeleton className="h-48 w-full"/>
            <CardContent className="p-4 space-y-4">
                <div className="flex justify-between">
                    <Skeleton className="h-6 w-24"/>
                    <Skeleton className="h-6 w-16"/>
                </div>
                <Skeleton className="h-4 w-3/4"/>
                <div className="flex gap-4">
                    <Skeleton className="h-4 w-16"/>
                    <Skeleton className="h-4 w-16"/>
                    <Skeleton className="h-4 w-16"/>
                </div>
                <div className="flex gap-2">
                    <Skeleton className="h-8 w-20"/>
                    <Skeleton className="h-8 w-20"/>
                </div>
                <div className="flex justify-between items-center">
                    <Skeleton className="h-4 w-32"/>
                    <Skeleton className="h-8 w-20"/>
                </div>
            </CardContent>
        </Card>
    );
}