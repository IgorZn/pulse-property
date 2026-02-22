// components/auth/signin-button.tsx
'use client';

import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut, User, Settings, ChevronDown } from "lucide-react";
import {GithubIcon} from "@/components/icons/github-icon";
import {YandexIcon} from "@/components/icons/yandex-icon";
import {GoogleIcon} from "@/components/icons/google-icon";

export function SignInButton() {
    const { data: session, status } = useSession();
    const isLoading = status === 'loading';

    // Получаем инициалы для аватара
    const getInitials = () => {
        if (session?.user?.name) {
            return session.user.name
                .split(' ')
                .map(word => word[0])
                .join('')
                .toUpperCase()
                .slice(0, 2);
        }
        return 'U';
    };

    // Если загружается - показываем скелетон
    if (isLoading) {
        return (
            <div className="h-10 w-10 rounded-full bg-gray-200 animate-pulse" />
        );
    }

    // Если пользователь авторизован - показываем аватар с меню
    if (session) {
        return (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-10 w-10 rounded-full p-0">
                        <Avatar className="h-10 w-10">
                            <AvatarImage
                                src={session.user?.image || ''}
                                alt={session.user?.name || 'User avatar'}
                            />
                            <AvatarFallback className="bg-primary text-primary-foreground">
                                {getInitials()}
                            </AvatarFallback>
                        </Avatar>
                    </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuLabel className="font-normal">
                        <div className="flex flex-col space-y-1">
                            <p className="text-sm font-medium leading-none">
                                {session.user?.name || 'User'}
                            </p>
                            <p className="text-xs leading-none text-muted-foreground">
                                {session.user?.email}
                            </p>
                        </div>
                    </DropdownMenuLabel>

                    <DropdownMenuSeparator />

                    <DropdownMenuItem className="cursor-pointer">
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                    </DropdownMenuItem>

                    <DropdownMenuItem className="cursor-pointer">
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                    </DropdownMenuItem>

                    <DropdownMenuSeparator />

                    <DropdownMenuItem
                        className="cursor-pointer text-red-600 focus:text-red-600"
                        onClick={() => signOut()}
                    >
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Sign Out</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        );
    }

    // Если пользователь не авторизован - показываем кнопку входа с меню
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="default" className="gap-2">
                    Sign In
                    <ChevronDown className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuLabel>Sign in with</DropdownMenuLabel>
                <DropdownMenuSeparator />

                <DropdownMenuItem
                    className="cursor-pointer gap-2"
                    onClick={() => signIn('google')}
                >
                    <GoogleIcon />
                    <span>Google</span>
                </DropdownMenuItem>

                <DropdownMenuItem
                    className="cursor-pointer gap-2"
                    onClick={() => signIn('yandex')}
                >
                    <YandexIcon />
                    <span>Yandex</span>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem
                    className="cursor-pointer gap-2"
                    onClick={() => signIn('github')}
                >
                    <GithubIcon />
                    <span>GitHub</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}