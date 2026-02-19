// prisma/seed-simple.ts
import { prisma } from '@/lib/prisma';
import { PropertyType } from "../../prismaClient/prisma/enums";
import propertiesData from '../../properties.json';


function convertPropertyType(type: string): PropertyType {
    const typeMap: { [key: string]: PropertyType } = {
        'Apartment': PropertyType.APARTMENT,
        'Condo': PropertyType.CONDO,
        'House': PropertyType.HOUSE,
        'Studio': PropertyType.STUDIO,
        'Cottage Or Cabin': PropertyType.COTTAGE_OR_CABIN,
        'Chalet': PropertyType.CHALET,
    };
    return typeMap[type] || PropertyType.APARTMENT;
}

async function main() {
    console.log('🌱 Starting seeding...');

    // Очищаем базу
    console.log('Cleaning database...');
    await prisma.$transaction([
        prisma.property.deleteMany(),
        prisma.location.deleteMany(),
        prisma.rates.deleteMany(),
        prisma.sellerInfo.deleteMany(),
        prisma.user.deleteMany(),
    ]);

    // Создаем пользователей (уникальные по email)
    console.log('Creating users...');
    const uniqueEmails = [...new Set(propertiesData.map(p => p.seller_info.email))];

    const users = await Promise.all(
        uniqueEmails.map(email => {
            const sellerInfo = propertiesData.find(p => p.seller_info.email === email)!.seller_info;
            return prisma.user.create({
                data: {
                    email: sellerInfo.email,
                    name: sellerInfo.name,
                    phone: sellerInfo.phone
                }
            });
        })
    );

    // Создаем Map для быстрого поиска user по email
    const userMap = new Map(users.map(u => [u.email, u]));

    // Создаем все свойства
    console.log('Creating properties...');

    for (const property of propertiesData) {
        const user = userMap.get(property.seller_info.email);
        if (!user) continue;

        // Создаем связанные записи
        const [location, rates, sellerInfo] = await Promise.all([
            prisma.location.create({
                data: {
                    street: property.location.street,
                    city: property.location.city,
                    state: property.location.state,
                    zipcode: property.location.zipcode
                }
            }),
            prisma.rates.create({
                data: {
                    nightly: property.rates.nightly || null,
                    weekly: property.rates.weekly || null,
                    monthly: property.rates.monthly || null
                }
            }),
            prisma.sellerInfo.create({
                data: {
                    name: property.seller_info.name,
                    email: property.seller_info.email,
                    phone: property.seller_info.phone
                }
            })
        ]);

        // Создаем свойство
        await prisma.property.create({
            data: {
                ownerId: user.id,
                name: property.name,
                type: convertPropertyType(property.type),
                description: property.description,
                locationId: location.id,
                beds: property.beds,
                baths: property.baths,
                squareFeet: property.square_feet,
                amenities: property.amenities,
                ratesId: rates.id,
                sellerInfoId: sellerInfo.id,
                images: property.images,
                isFeatured: property.is_featured || false,
                createdAt: new Date(property.createdAt),
                updatedAt: new Date(property.updatedAt)
            }
        });
    }

    // Финальная статистика
    const [userCount, propertyCount] = await Promise.all([
        prisma.user.count(),
        prisma.property.count()
    ]);

    console.log('\n📊 Seeding completed:');
    console.log(`- Users created: ${userCount}`);
    console.log(`- Properties created: ${propertyCount}`);

    // Показываем несколько примеров
    const examples = await prisma.property.findMany({
        take: 3,
        include: {
            owner: true,
            location: true
        }
    });

    console.log('\n📝 Example properties:');
    examples.forEach((p, i) => {
        console.log(`\n${i + 1}. ${p.name}`);
        console.log(`   ID: ${p.id}`);
        console.log(`   Owner: ${p.owner.name} (ID: ${p.owner.id})`);
        console.log(`   Location: ${p.location.city}`);
    });
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());