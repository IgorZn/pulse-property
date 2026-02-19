// components/hero-skeleton.tsx
import { Skeleton } from "@/components/ui/skeleton";

export function HeroSkeleton() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <Skeleton className="h-12 w-96 mb-4" />
                    <Skeleton className="h-6 w-[500px]" />
                    <div className="w-full max-w-3xl mt-8">
                        <div className="flex gap-3">
                            <Skeleton className="h-12 flex-1" />
                            <Skeleton className="h-12 w-[180px]" />
                            <Skeleton className="h-12 w-[100px]" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}