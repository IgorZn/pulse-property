// components/property/form-actions.tsx
import { Loader2 } from 'lucide-react';
import {Button} from "@/components/ui/button";

interface FormActionsProps {
    isSubmitting: boolean;
}

export default function FormActions({ isSubmitting }: FormActionsProps) {
    return (
        <div>
            <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isSubmitting ? (
                    <span className="flex items-center justify-center">
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Adding Property...
                    </span>
                ) : (
                    'Add Property'
                )}
            </Button>
        </div>
    );
}