// components/InfoBoxes.tsx
import InfoBox from './InfoBox';

interface InfoBoxesProps {
    boxes?: {
        heading: string;
        backgroundColor: string;
        buttonInfo: {
            text: string;
            link: string;
            backgroundColor: string;
        };
        content: string;
    }[];
}

export default function InfoBoxes({ boxes }: InfoBoxesProps) {
    // Данные по умолчанию, если не переданы пропсы
    const defaultBoxes = [
        {
            heading: 'For Renters',
            backgroundColor: 'bg-gray-100',
            buttonInfo: {
                text: 'Browse Properties',
                link: '/properties',
                backgroundColor: 'bg-black',
            },
            content: 'Find your dream rental property. Bookmark properties and contact owners.',
        },
        {
            heading: 'For Property Owners',
            backgroundColor: 'bg-blue-100',
            buttonInfo: {
                text: 'Add Property',
                link: '/properties/add',
                backgroundColor: 'bg-blue-500',
            },
            content: 'List your properties and reach potential tenants. Rent as an Airbnb or long term.',
        },
    ];

    const infoBoxes = boxes || defaultBoxes;

    return (
        <section className="my-8">
            <div className='container-xl lg:container m-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
                    {infoBoxes.map((box, index) => (
                        <InfoBox
                            key={index}
                            heading={box.heading}
                            backgroundColor={box.backgroundColor}
                            buttonInfo={box.buttonInfo}
                        >
                            {box.content}
                        </InfoBox>
                    ))}
                </div>
            </div>
        </section>
    );
}