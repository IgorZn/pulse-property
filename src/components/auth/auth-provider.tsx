// src/components/auth/auth-provider.tsx
'use client';
import {SessionProvider} from "next-auth/react";

function AuthProvider({children,}: { children: React.ReactNode; }) {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    );
}

export default AuthProvider;