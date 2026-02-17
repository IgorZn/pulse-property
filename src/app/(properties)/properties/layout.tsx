import React from "react";

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="flex min-h-screen py-12 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <div
                className="flex min-h-screen w-full flex-col items-center justify-between px-16 bg-white dark:bg-black sm:items-start">
                {children}
            </div>
        </div>
    );
}