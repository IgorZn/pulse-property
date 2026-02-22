// components/property/property-images.tsx
'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import {Button} from "@/components/ui/button";
import Image from "next/image";

export default function PropertyImages() {
    const [previewUrls, setPreviewUrls] = useState<string[]>([]);
    const [fileNames, setFileNames] = useState<string>('');

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);

        // Сохраняем имена файлов для отправки
        const names = files.map(f => f.name).join(',');
        setFileNames(names);

        // Создаем превью
        const urls = files.map(file => URL.createObjectURL(file));
        setPreviewUrls(urls);

        // Clean up предыдущих превью
        return () => {
            previewUrls.forEach(url => URL.revokeObjectURL(url));
        };
    };

    const removeImage = (index: number) => {
        setPreviewUrls(prev => prev.filter((_, i) => i !== index));
        // Здесь нужно также обновить FileList, но это сложно
        // Для простоты будем отправлять все файлы сразу
    };

    return (
        <div className="mb-4">
            <label htmlFor="images" className="block text-gray-700 font-bold mb-2">
                Images (Select up to 4 images)
            </label>

            <input
                type="file"
                id="images"
                name="images"
                className="border rounded w-full py-2 px-3"
                accept="image/*"
                multiple
                onChange={handleImageChange}
            />

            {previewUrls.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                    {previewUrls.map((url, index) => (
                        <div key={index} className="relative">
                            <Image
                                src={url}
                                alt={`Preview ${index + 1}`}
                                className="w-full h-24 object-cover rounded-lg"
                            />
                            <Button
                                type="button"
                                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                                onClick={() => removeImage(index)}
                            >
                                <X className="h-4 w-4" />
                            </Button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}