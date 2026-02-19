// app/not-found.tsx
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Frown, ArrowLeft  } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="text-center space-y-8">
                {/* Иконка */}
                <div className="flex justify-center">
                    <div className="bg-gray-100 p-6 rounded-full">
                        <Frown className="h-16 w-16 text-gray-400" />
                    </div>
                </div>

                {/* Заголовок */}
                <div className="space-y-2">
                    <h1 className="text-7xl font-extrabold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                        404
                    </h1>
                    <h2 className="text-3xl font-semibold text-gray-800">
                        Page Not Found
                    </h2>
                    <p className="text-gray-600 max-w-md mx-auto">
                        The page you are looking for does not exist.
                    </p>
                </div>

                {/* Кнопка */}
                <Button asChild size="lg" className="mt-4 px-8">
                    <Link href="/">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Go Home
                    </Link>
                </Button>
            </div>
        </div>
    );
}