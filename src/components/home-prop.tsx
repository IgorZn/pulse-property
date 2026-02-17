// components/home-prop.tsx (клиентский компонент)
'use client';

import React, { useState, useEffect } from 'react';
import properties from '../../properties.json'
import PropertyCard from "@/components/property-card";

// Интерфейс для локации
export interface ILocation {
    street: string;
    city: string;
    state: string;
    zipcode: string;
}

// Интерфейс для rates (цен)
interface Rates {
    weekly?: number;      // опционально, т.к. может быть не указано
    monthly?: number;     // опционально, т.к. может быть не указано
    nightly?: number;     // добавлю на всякий случай, если понадобится
}

// Основной интерфейс для свойства
export interface Property {
    _id: string;
    owner: string;
    name: string;
    type: string;
    description: string;
    location: ILocation;
    beds: number;
    baths: number;
    square_feet: number;
    amenities: string[];
    rates: Rates;
    images?: string[];     // опционально, если есть изображения
    isAvailable?: boolean; // опционально, статус доступности
    createdAt?: string;    // опционально, дата создания
    updatedAt?: string;    // опционально, дата обновления
}

// Для массива свойств
export type Properties = Property[];

// Для случайной выборки (randomSelection)
export type RandomPropertySelection = Property[];

function HomeProp() {
    const [randomProps, setRandomProps] = useState<Properties>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Имитация загрузки данных
        const timer = setTimeout(() => {
            const getRandomInt = (max: number) => Math.floor(Math.random() * max);

            const randomSelection = [
                properties[getRandomInt(properties.length - 1)],
                properties[getRandomInt(properties.length - 2)],
                properties[getRandomInt(properties.length)],
            ];

            setRandomProps(randomSelection);
            setIsLoading(false);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-2xl font-bold mb-6">Available Properties</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="h-96 bg-gray-200 animate-pulse rounded-lg" />
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-6">Available Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {randomProps.map((property: Property) => (
                    <PropertyCard
                        key={property._id}
                        id={property._id}
                        type={property.type}
                        title={property.description}
                        rates={property.rates}
                        beds={property.beds}
                        baths={property.baths}
                        sqft={property.square_feet}
                        location={property.location}
                        images={property.images}
                    />
                ))}
            </div>
        </div>
    );
}

export default HomeProp;