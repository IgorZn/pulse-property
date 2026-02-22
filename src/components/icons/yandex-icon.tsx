// components/icons/yandex-icon.tsx
import { SVGProps } from "react";

export function YandexIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            role="img"
            aria-label="Yandex"
            {...props}
        >
            <title>Yandex</title>
            <path
                fill="currentColor"
                d="M2.04 3.5L9 16.86V20.5h6v-3.64L21.96 3.5h-6.4L12 10.07 8.44 3.5h-6.4z"
            />
        </svg>
    );
}