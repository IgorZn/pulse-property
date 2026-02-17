'use client'
import Link from "next/link";
import {usePathname} from "next/navigation";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {Menu} from "lucide-react";
import {cn} from "@/lib/utils";

function Navbar() {
    const pathname = usePathname()
    const navItemsR = [
        {href: '/', label: 'Home'},
        {href: '/properties', label: 'Properties'},
        {href: '/addProperties', label: 'Add Properties'},
    ];
    const navItemsL = [
        {href: '/', label: 'Home'},
        {href: '/about', label: 'About'},
    ];


    return (
        <div>
            {/* Desktop menu */}
            <div className={'hidden md:block'}>
                <div className={'flex bg-blue-600'}>
                    {/* wrapper */}
                    <div className={'mx-auto w-full'}>
                        <div className={'flex flex-row items-center justify-between my-8 mx-5'}>
                            {/* right */}
                            <div className={'flex'}>
                                {navItemsR.map((item) => {
                                    const isActive = pathname === item.href;

                                    return (
                                        <Link key={item.href} href={item.href}>
                                            <Button className={'mx-2'} variant={isActive ? 'default' : 'outline'}>
                                                {item.label}
                                            </Button>
                                        </Link>
                                    );
                                })}

                            </div>

                            {/* left */}
                            <div className={'flex'}>
                                {navItemsL.map((item) => {
                                    const isActive = pathname === item.href;

                                    return (
                                        <Link key={item.href} href={item.href}>
                                            <Button className={'mx-2'} variant={isActive ? 'default' : 'outline'}>
                                                {item.label}
                                            </Button>
                                        </Link>
                                    );
                                })}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/*  Mobile menu  */}
            <div className={'md:hidden'}>
                <div className={'flex bg-blue-600'}>
                    <div className={'mx-auto w-full'}>
                        <Sheet>
                            <SheetTrigger asChild>
                                <Menu size={32} color={'white'}
                                      className={'hover:scale-110 duration-500 m-2 border border-white border-b rounded'}/>
                            </SheetTrigger>
                            <SheetContent side={"left"} >
                                <div className="grid flex-1 auto-rows-min gap-6 px-4 mt-10">
                                    <div className="grid gap-3">
                                        {navItemsR.map((item) => {
                                            const isActive = pathname === item.href;

                                            return (
                                                <Link key={item.href} href={item.href}>
                                                    <div className={cn('', isActive
                                                        ? 'border-b w-full'
                                                        : ''
                                                    )}>
                                                        {item.label}
                                                    </div>
                                                </Link>)
                                        })}
                                    </div>
                                </div>
                                <SheetFooter>
                                    <SheetClose asChild>
                                        <Button variant="outline">Close</Button>
                                    </SheetClose>
                                </SheetFooter>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;