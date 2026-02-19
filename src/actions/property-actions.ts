// app/actions/property-actions.ts
'use server';

import type { PropertyWithRelations } from '@/types/prisma-types';
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

// Для получения данных (несмотря на рекомендации, можно использовать)
export async function getProperties(): Promise<{
    success: boolean;
    data?: PropertyWithRelations[];
    error?: string
}> {
    try {
        const properties = await prisma.property.findMany({
            include: {
                location: true,
                rates: true,
                sellerInfo: true,
                owner: true
            }
        });
        return { success: true, data: properties };
    } catch (error) {
        return { success: false, error: 'Failed to fetch properties' };
    }
}

// Для получения случайных свойств
export async function getRandomProperties(count: number = 3): Promise<{
    success: boolean;
    data?: PropertyWithRelations;
    error?: string
}> {
    try {
        const allProperties = await prisma.property.findMany({
            include: {
                location: true,
                rates: true,
                sellerInfo: true,
                owner: true
            }
        });

        // Перемешиваем массив и берем первые count элементов
        const shuffled = [...allProperties].sort(() => 0.5 - Math.random());
        const randomSelection = shuffled.slice(0, count);

        return { success: true, data: randomSelection };
    } catch (error) {
        console.error('Error fetching random properties:', error);
        return { success: false, error: 'Failed to fetch properties' };
    }
}

export async function getProperty(id: string) {
    try {
        const property = await prisma.property.findUnique({
            where: { id },
            include: {
                location: true,
                rates: true,
                sellerInfo: true,
                owner: true
            }
        });
        return { success: true, data: property };
    } catch (error) {
        return { success: false, error: 'Property not found' };
    }
}

// Мутации - идеально для Server Actions
export async function createProperty(formData: FormData) {
    try {
        const property = await prisma.property.create({
            data: {
                name: formData.get('name') as string,
                type: formData.get('type') as string,
                description: formData.get('description') as string,
                beds: parseInt(formData.get('beds') as string),
                baths: parseInt(formData.get('baths') as string),
                squareFeet: parseInt(formData.get('squareFeet') as string),
                // ... остальные поля
            }
        });

        revalidatePath('/properties');
        return { success: true, data: property };
    } catch (error) {
        return { success: false, error: 'Failed to create property' };
    }
}

export async function updateProperty(id: string, formData: FormData) {
    'use server';

    try {
        const property = await prisma.property.update({
            where: { id },
            data: {
                name: formData.get('name') as string,
                // ... другие поля
            }
        });

        revalidatePath(`/properties/${id}`);
        return { success: true, data: property };
    } catch (error) {
        return { success: false, error: 'Failed to update property' };
    }
}

export async function deleteProperty(id: string) {
    'use server';

    try {
        await prisma.property.delete({
            where: { id }
        });

        revalidatePath('/properties');
        return { success: true };
    } catch (error) {
        return { success: false, error: 'Failed to delete property' };
    }
}