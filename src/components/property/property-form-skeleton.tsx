// components/property/property-form-skeleton.tsx
export default function PropertyFormSkeleton() {
    return (
        <div className="space-y-6">
            <div className="h-8 w-48 bg-gray-200 rounded mx-auto"></div>

            <div className="space-y-4">
                <div className="h-10 bg-gray-200 rounded w-full"></div>
                <div className="h-10 bg-gray-200 rounded w-full"></div>
                <div className="h-24 bg-gray-200 rounded w-full"></div>
                <div className="h-32 bg-gray-200 rounded w-full"></div>
                <div className="flex gap-4">
                    <div className="h-10 bg-gray-200 rounded flex-1"></div>
                    <div className="h-10 bg-gray-200 rounded flex-1"></div>
                    <div className="h-10 bg-gray-200 rounded flex-1"></div>
                </div>
                <div className="h-40 bg-gray-200 rounded w-full"></div>
                <div className="h-10 bg-gray-200 rounded w-full"></div>
            </div>
        </div>
    );
}