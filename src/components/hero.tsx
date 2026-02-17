'use client'
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Search, MapPin } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {Input} from "@/components/ui/input";

function Hero() {
    const [location, setLocation] = useState('');
    const [propertyType, setPropertyType] = useState('all');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        // Здесь будет логика поиска
        console.log({ location, propertyType });
    };

    return (
        <section className="w-full py-12">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                            Find The Perfect Rental
                        </h1>
                        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                            Discover the perfect property that suits your needs.
                        </p>
                    </div>

                    <div className="w-full max-w-3xl">
                        <form
                            onSubmit={handleSearch}
                            className="flex flex-col gap-3 sm:flex-row sm:items-center w-full"
                        >
                            <div className="relative flex-1">
                                <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                                <Input
                                    type="text"
                                    placeholder="Enter Location (City, State, Zip, etc)"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    className="pl-8 h-9 text-base"
                                />
                            </div>

                            <Select value={propertyType} onValueChange={setPropertyType}>
                                <SelectTrigger className="w-full sm:w-[180px] h-10">
                                    <SelectValue placeholder="Property Type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All</SelectItem>
                                    <SelectItem value="apartment">Apartment</SelectItem>
                                    <SelectItem value="house">House</SelectItem>
                                    <SelectItem value="condo">Condo</SelectItem>
                                    <SelectItem value="studio">Studio</SelectItem>
                                </SelectContent>
                            </Select>

                            <Button type="submit" size="lg" className="h-9 px-8">
                                <Search className="mr-2 h-4 w-4" />
                                Search
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;