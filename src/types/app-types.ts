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
    id: string;
    owner: string;
    name: string;
    type: string;
    description: string;
    location: ILocation;
    beds: number;
    baths: number;
    squareFeet?: number;
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