import React from "react";

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <div
            className="flex mx-auto items-center justify-center min-h-screen w-full px-16 bg-white dark:bg-black">
            {children}
        </div>
    );
}