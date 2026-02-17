// components/InfoBox.tsx
import { Button } from "@/components/ui/button";
import Link from 'next/link';

interface ButtonInfo {
    text: string;
    link: string;
    backgroundColor: string;
}

interface InfoBoxProps {
    heading: string;
    backgroundColor: string;
    buttonInfo: ButtonInfo;
    children: React.ReactNode;
}

export default function InfoBox({
                                    heading,
                                    backgroundColor,
                                    buttonInfo,
                                    children
                                }: InfoBoxProps) {
    return (
        <div className={`${backgroundColor} p-6 rounded-lg shadow-md`}>
            <h2 className="text-2xl font-bold mb-4">{heading}</h2>
            <p className="mb-4 text-gray-700">{children}</p>
            <Link href={buttonInfo.link}>
                <Button
                    className={`${buttonInfo.backgroundColor} text-white hover:opacity-90 transition-opacity`}
                >
                    {buttonInfo.text}
                </Button>
            </Link>
        </div>
    );
}