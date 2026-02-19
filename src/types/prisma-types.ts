// types/prisma-types.ts
import type { Prisma } from '../../prismaClient/prisma/client';

// Тип для свойства со всеми связанными данными
export type PropertyWithRelations = Prisma.PropertyGetPayload<{
    include: {
        location: true;
        rates: true;
        sellerInfo: true;
        owner: true;
    };
}>;

// Тип для свойства без связей
export type PropertyBasic = Prisma.PropertyGetPayload<{}>;

// Тип для массива свойств
export type PropertiesWithRelations = PropertyWithRelations[];

// Тип для создания свойства
export type PropertyCreateInput = Prisma.PropertyCreateInput;

// Тип для обновления свойства
export type PropertyUpdateInput = Prisma.PropertyUpdateInput;

// Тип для конкретных полей (если нужно выбрать только некоторые)
export type PropertySelect = Prisma.PropertySelect;