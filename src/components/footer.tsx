// components/Footer.tsx
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-100 border-t">
            <div className="container mx-auto px-4 py-8">
                {/* Основное содержание футера */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Логотип и описание */}
                    <div className="text-center md:text-left">
                        <Link href="/" className="text-xl font-bold text-gray-800 hover:text-gray-600">
                            PropertyPulse
                        </Link>
                        <p className="text-sm text-gray-500 mt-1">
                            Find your perfect rental property
                        </p>
                    </div>

                    {/* Навигация */}
                    <div className="flex gap-8">
                        <Link
                            href="/properties"
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            Properties
                        </Link>
                        <Link
                            href="/terms"
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            Terms of Service
                        </Link>
                        <Link
                            href="/privacy"
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            Privacy Policy
                        </Link>
                    </div>

                    {/* Социальные сети */}
                    <div className="flex gap-4">
                        <Link href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                            <Facebook className="h-5 w-5" />
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                            <Twitter className="h-5 w-5" />
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                            <Instagram className="h-5 w-5" />
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                            <Linkedin className="h-5 w-5" />
                        </Link>
                    </div>
                </div>

                {/* Нижняя часть с копирайтом */}
                <div className="border-t mt-8 pt-6 text-center text-sm text-gray-500">
                    © {currentYear} PropertyPulse. All rights reserved.
                </div>
            </div>
        </footer>
    );
}