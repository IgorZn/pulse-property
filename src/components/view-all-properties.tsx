// components/ViewAllProperties.tsx
import Link from 'next/link';

export default function ViewAllProperties() {
    return (
        <section className='m-auto max-w-lg my-10 px-6'>
            <Link
                href='/properties'
                className='block bg-black/70 text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700 transition-colors'
            >
                View All Properties
            </Link>
        </section>
    );
}