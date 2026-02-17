// components/PropertyCard.tsx
'use client';

import {useState} from "react";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {
    Bath,
    Bed,
    Square,
    MapPin,
    Calendar,
    Heart,
    Share2,
    ChevronLeft,
    ChevronRight
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface PropertyCardProps {
    id: string;
    type: string;
    title: string;
    rates: { weekly?: number, monthly?: number, nightly?: number };
    beds: number;
    baths: number;
    sqft: number;
    location: Record<string, string>;
    images?: string[];
    isFavorite?: boolean;
    onFavoriteToggle?: (id: string) => void;
}

export default function PropertyCard({
                                         id,
                                         type,
                                         title,
                                         rates,
                                         beds,
                                         baths,
                                         sqft,
                                         location,
                                         images = ["/properties/property-placeholder.jpg"],
                                         isFavorite = false,
                                         onFavoriteToggle
                                     }: PropertyCardProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const nextImage = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const handleFavoriteClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        onFavoriteToggle?.(id);
    };

    return (
        <Card
            className="overflow-hidden hover:shadow-xl transition-all duration-300 group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Изображение с навигацией */}
            <div className="relative h-48 w-full bg-gray-100">
                {images?.includes('property-placeholder')
                    ? (
                        <Image
                            src={`/properties/${images[currentImageIndex]}`}
                            alt={title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    )
                    : (
                        <div>
                            {images.length > 0 && (
                                <div>
                                    <Image
                                        src={`/properties/${images[currentImageIndex]}`}
                                        alt={title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />

                                    {/* Навигация по изображениям */}
                                    {images.length > 1 && isHovered && (
                                        <>
                                            <Button
                                                onClick={prevImage}
                                                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 transition-colors"
                                            >
                                                <ChevronLeft className="h-4 w-4"/>
                                            </Button>
                                            <Button
                                                onClick={nextImage}
                                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 transition-colors"
                                            >
                                                <ChevronRight className="h-4 w-4"/>
                                            </Button>
                                        </>
                                    )}

                                    {/* Индикаторы изображений */}
                                    {images.length > 1 && (
                                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                                            {images.map((_, index) => (
                                                <div
                                                    key={index}
                                                    className={`h-1.5 w-1.5 rounded-full transition-colors ${
                                                        index === currentImageIndex
                                                            ? "bg-white"
                                                            : "bg-white/50"
                                                    }`}
                                                />
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    )
                }


                {/* Бейджи */}
                <div className="absolute top-3 left-3 flex gap-2">
                    <Badge className="bg-black/70 text-white border-0">
                        {type}
                    </Badge>
                    <Badge className="bg-green-500/90 text-white border-0">
                        Available
                    </Badge>
                </div>

                {/* Кнопки действий */}
                <div className="absolute top-3 right-3 flex gap-2">
                    <Button
                        onClick={handleFavoriteClick}
                        className={`p-2 rounded-full transition-colors ${
                            isFavorite
                                ? "bg-red-500 text-white"
                                : "bg-white/90 text-gray-700 hover:bg-white"
                        }`}
                    >
                        <Heart className={`h-4 w-4 ${isFavorite ? "fill-current" : ""}`}/>
                    </Button>
                    <Button className="p-2 rounded-full bg-white/90 text-gray-700 hover:bg-white transition-colors">
                        <Share2 className="h-4 w-4"/>
                    </Button>
                </div>
            </div>

            {/* Контент */}
            <CardContent className="p-4">
                {/* Цена */}
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <span className="text-2xl font-bold">${rates.monthly?.toLocaleString()}</span>
                        <span className="text-gray-500 text-sm">/mo</span>
                    </div>
                    <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                        Featured
                    </Badge>
                </div>

                {/* Название */}
                <h3 className="text-lg font-semibold mb-2 line-clamp-1">{title}</h3>

                {/* Характеристики */}
                <div className="grid grid-cols-3 gap-2 text-gray-600 text-sm mb-4">
                    <div className="flex items-center gap-1">
                        <Bed className="h-4 w-4"/>
                        <span>{beds} Beds</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Bath className="h-4 w-4"/>
                        <span>{baths} Baths</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Square className="h-4 w-4"/>
                        <span>{sqft.toLocaleString()} sqft</span>
                    </div>
                </div>

                {/* Период аренды */}
                <div className="flex gap-2 mb-4">
                    {rates.monthly && (
                        <Badge
                            variant="outline"
                            className="cursor-pointer hover:bg-gray-100 px-3 py-1"
                        >
                            Monthly
                        </Badge>
                    )}
                    {rates.weekly && (
                        <Badge
                            variant="outline"
                            className="cursor-pointer hover:bg-gray-100 px-3 py-1 bg-gray-100"
                        >
                            Weekly
                        </Badge>
                    )}
                    {rates.nightly && (
                        <Badge
                            variant="outline"
                            className="cursor-pointer hover:bg-gray-100 px-3 py-1 bg-gray-100"
                        >
                            Nightly
                        </Badge>
                    )}

                </div>

                {/* Локация */}
                <div className="flex items-center gap-1 text-gray-600 mb-3">
                    <MapPin className="h-4 w-4 shrink-0"/>
                    <span
                        className="text-sm truncate">{location.state}, {location.city}, {location.street}, {location.zipcode}</span>
                </div>

                {/* Кнопка деталей */}
                <Button asChild className="w-full">
                    <Link href={`/properties/${id}`}>
                        View Details
                    </Link>
                </Button>
            </CardContent>
        </Card>
    );
}