// components/property/property-actions.tsx
'use client';

import { Button } from "@/components/ui/button";
import { Heart, Share2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface PropertyActionsProps {
    propertyId: string;
}

export default function PropertyActions({ propertyId }: PropertyActionsProps) {
    const [isFavorite, setIsFavorite] = useState(false);

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: 'Check out this property',
                url: window.location.href
            });
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
        }
    };

    return (
        <div className="border-t pt-6 flex flex-col sm:flex-row gap-4 justify-between items-center">
            <Button variant="ghost" asChild>
                <Link href="/properties">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Properties
                </Link>
            </Button>

            <div className="flex gap-3">
                <Button
                    variant="outline"
                    onClick={() => setIsFavorite(!isFavorite)}
                    className={isFavorite ? 'text-red-500 border-red-200' : ''}
                >
                    <Heart className={`mr-2 h-4 w-4 ${isFavorite ? 'fill-current' : ''}`} />
                    {isFavorite ? 'Saved' : 'Save'}
                </Button>

                <Button variant="outline" onClick={handleShare}>
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                </Button>
            </div>
        </div>
    );
}