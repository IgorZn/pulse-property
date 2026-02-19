// components/property/property-contact.tsx
'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, User, Mail, Phone, MessageSquare } from "lucide-react";
import {Label} from "@/components/ui/label";

interface PropertyContactProps {
    sellerInfo: {
        name: string;
        email: string;
        phone: string;
    };
}

export default function PropertyContact({ sellerInfo }: PropertyContactProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Имитация отправки формы
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            setFormData({ name: '', email: '', phone: '', message: '' });

            // Сбрасываем сообщение об успехе через 3 секунды
            setTimeout(() => setIsSuccess(false), 3000);
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="border-t pt-6">
            <h2 className="text-2xl font-semibold mb-6">Contact Property Manager</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Информация о менеджере */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-lg mb-4">Property Manager</h3>
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <div className="bg-blue-100 p-2 rounded-full">
                                <User className="h-4 w-4 text-blue-600" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Name</p>
                                <p className="font-medium">{sellerInfo.name}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="bg-blue-100 p-2 rounded-full">
                                <Mail className="h-4 w-4 text-blue-600" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Email</p>
                                <p className="font-medium">{sellerInfo.email}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="bg-blue-100 p-2 rounded-full">
                                <Phone className="h-4 w-4 text-blue-600" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Phone</p>
                                <p className="font-medium">{sellerInfo.phone}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Форма */}
                <div className="md:col-span-2">
                    {isSuccess && (
                        <div className="mb-4 p-4 bg-green-50 text-green-700 rounded-lg">
                            Message sent successfully! The property manager will contact you soon.
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <Label className="block text-sm font-medium mb-2">
                                Name <span className="text-red-500">*</span>
                            </Label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <Input
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    required
                                    className="pl-9"
                                />
                            </div>
                        </div>

                        <div>
                            <Label className="block text-sm font-medium mb-2">
                                Email <span className="text-red-500">*</span>
                            </Label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <Input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    required
                                    className="pl-9"
                                />
                            </div>
                        </div>

                        <div>
                            <Label className="block text-sm font-medium mb-2">
                                Phone
                            </Label>
                            <div className="relative">
                                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <Input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Enter your phone number"
                                    className="pl-9"
                                />
                            </div>
                        </div>

                        <div>
                            <Label className="block text-sm font-medium mb-2">
                                Message <span className="text-red-500">*</span>
                            </Label>
                            <div className="relative">
                                <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                <Textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Enter your message"
                                    required
                                    className="pl-9 min-h-[100px]"
                                />
                            </div>
                        </div>

                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full md:w-auto"
                        >
                            {isSubmitting ? (
                                <>Sending...</>
                            ) : (
                                <>
                                    <Send className="mr-2 h-4 w-4" />
                                    Send Message
                                </>
                            )}
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}