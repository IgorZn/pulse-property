// types/prisma-utils.ts
import type { Prisma } from '../../prismaClient/prisma/client';

// Pre-defined includes для переиспользования
export const propertyIncludes = {
    location: true,
    rates: true,
    sellerInfo: true,
    owner: true
} as const;

// Тип для свойства с includes
export type PropertyWithIncludes = Prisma.PropertyGetPayload<{
    include: typeof propertyIncludes;
}>;

// Утилита для создания типа с select
export type PropertyWithSelect<T extends Prisma.PropertySelect> =
    Prisma.PropertyGetPayload<{ select: T }>;

// Пример: только базовые поля
export type PropertyBasic = PropertyWithSelect<{
    id: true;
    name: true;
    type: true;
    beds: true;
    baths: true;
    squareFeet: true;
}>;

// Пример: свойство с локацией
export type PropertyWithLocation = PropertyWithSelect<{
    id: true;
    name: true;
    location: {
        select: {
            city: true;
            state: true;
        };
    };
}>;