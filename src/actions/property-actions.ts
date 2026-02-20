// app/actions/property-actions.ts
'use server';

import {PropertyWithIncludes, PropertiesResponse, PropertyResponse} from '@/types/prisma-utils';
import { PropertyType } from '../../prismaClient/prisma/client';
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache'

// Для получения данных (несмотря на рекомендации, можно использовать)
export async function getProperties(): Promise<{
    success: boolean;
    data?: PropertyWithIncludes[];
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
export async function getRandomProperties(count: number = 3): Promise<PropertiesResponse> {
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

export async function getProperty(id: string): Promise<PropertyResponse> {
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
        return { success: true, data: property ?? undefined };
    } catch (error) {
        return { success: false, error: 'Property not found' };
    }
}

// Мутации - идеально для Server Actions
// Функция для преобразования строки в enum PropertyType
function mapToPropertyType(type: string): PropertyType {
    const typeMap: Record<string, PropertyType> = {
        'Apartment': PropertyType.APARTMENT,
        'Condo': PropertyType.CONDO,
        'House': PropertyType.HOUSE,
        'Studio': PropertyType.STUDIO,
        'Cottage Or Cabin': PropertyType.COTTAGE_OR_CABIN,
        'Chalet': PropertyType.CHALET,
    };
    return typeMap[type] || PropertyType.APARTMENT;
}

export async function createProperty(formData: FormData) {
    try {
        // Используем транзакцию для создания всех связанных записей
        const result = await prisma.$transaction(async (tx) => {
            // 1. Создаем location
            const location = await tx.location.create({
                data: {
                    street: formData.get('street') as string,
                    city: formData.get('city') as string,
                    state: formData.get('state') as string,
                    zipcode: formData.get('zipcode') as string,
                }
            });

            // 2. Создаем rates
            const rates = await tx.rates.create({
                data: {
                    nightly: formData.get('nightly') ? parseInt(formData.get('nightly') as string) : null,
                    weekly: formData.get('weekly') ? parseInt(formData.get('weekly') as string) : null,
                    monthly: formData.get('monthly') ? parseInt(formData.get('monthly') as string) : null,
                }
            });

            // 3. Создаем sellerInfo
            const sellerInfo = await tx.sellerInfo.create({
                data: {
                    name: formData.get('sellerName') as string,
                    email: formData.get('sellerEmail') as string,
                    phone: formData.get('sellerPhone') as string,
                }
            });

            // 4. Создаем property
            const property = await tx.property.create({
                data: {
                    name: formData.get('name') as string,
                    type: mapToPropertyType(formData.get('type') as string),
                    description: formData.get('description') as string,
                    beds: parseInt(formData.get('beds') as string),
                    baths: parseInt(formData.get('baths') as string),
                    squareFeet: parseInt(formData.get('squareFeet') as string),
                    ownerId: 'user-id-from-session', // 👈 замените на реальный ID
                    locationId: location.id,
                    ratesId: rates.id,
                    sellerInfoId: sellerInfo.id,
                    amenities: (formData.get('amenities') as string)?.split(',').map(a => a.trim()) || [],
                    images: (formData.get('images') as string)?.split(',').map(i => i.trim()) || [],
                    isFeatured: formData.get('isFeatured') === 'true',
                },
                include: {
                    location: true,
                    rates: true,
                    sellerInfo: true,
                    owner: true
                }
            });

            return property;
        });

        revalidatePath('/properties');
        return { success: true, data: result };
    } catch (error) {
        console.error('Error creating property:', error);
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