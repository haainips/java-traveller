// components/ReservationForm.jsx
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../../@/components/ui/form"
import { Input } from "../../@/components/ui/input"
import { Button } from "../../@/components/ui/button"
import { CalendarIcon } from "lucide-react"
import { Popover, PopoverTrigger, PopoverContent } from "../../@/components/ui/popover"
import { Calendar } from "../../@/components/ui/calendar"
import {format} from "date-fns"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"
import React from "react"

const formSchema = z.object({
    name: z.string().min(1, "Nama wajib diisi"),
    email: z.string().email("Email tidak valid"),
    phone: z.string().min(10, "No WhatsApp minimal 10 digit"),
    people: z.coerce.number().min(1, "Jumlah orang minimal 1"),
    date: z.date({ required_error: "Tanggal wajib diisi" }),
})
const ReservationForm = React.forwardRef(({ price }, ref) => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            people: 1,
            date: new Date(),
        },
    })

    const onSubmit = (values) => {
        console.log("Data dikirim:", values)
    }

    return (
        <Form {...form}>
            <form ref={ref} onSubmit={form.handleSubmit(onSubmit)} className="col-span-1 space-y-3 px-10 py-6 border shadow-md rounded-xl bg-white">
                {price && (
                    <div className="flex justify-between text-lg">
                        <h2 className="font-bold text-center">IDR :</h2>
                        <h2 className="font-bold text-center">Rp{price}</h2>
                    </div>
                )}
                <span className="flex justify-between font-semibold text-lg border-b-2 border-gray-200 mb-2"></span>
                <h1 className="text-center text-xl font-semibold mb-8">Form Reservasi Wisata</h1>
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nama</FormLabel>
                            <FormControl>
                                <Input placeholder="Masukkan nama lengkap" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input type="email" placeholder="contoh@email.com" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>No WhatsApp</FormLabel>
                            <FormControl>
                                <Input type="tel" placeholder="08xxxxxxxxxx" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="people"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Jumlah Orang</FormLabel>
                            <FormControl>
                                <Input type="number" min={1} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Tanggal Keberangkatan</FormLabel>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            variant="outline"
                                            className={cn("w-full justify-start text-left font-normal", !field.value && "text-muted-foreground")}
                                        >
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {field.value ? format(field.value, "dd MMM yyyy") : "Pilih tanggal"}
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                    <Calendar
                                        mode="single"
                                        selected={field.value}
                                        onSelect={field.onChange}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" className="w-full mt-4">Kirim</Button>
            </form>
        </Form>
    )
})

export default ReservationForm