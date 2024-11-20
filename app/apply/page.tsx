// 'use client'

// import { useState } from 'react'
// import Image from 'next/image'
// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import * as z from "zod"
// import { CalendarIcon, CheckIcon } from "lucide-react"

// import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button"
// import { Calendar } from "@/components/ui/calendar"
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form"
// import { Input } from "@/components/ui/input"
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Textarea } from "@/components/ui/textarea"
// import { toast } from "@/components/ui/use-toast"

// const formSchema = z.object({
//   firstName: z.string().min(2, {
//     message: "First name must be at least 2 characters.",
//   }),
//   lastName: z.string().min(2, {
//     message: "Last name must be at least 2 characters.",
//   }),
//   email: z.string().email({
//     message: "Please enter a valid email address.",
//   }),
//   phone: z.string().min(10, {
//     message: "Please enter a valid phone number.",
//   }),
//   dob: z.date({
//     required_error: "Please select a date of birth.",
//   }),
//   address: z.string().min(5, {
//     message: "Please enter your full address.",
//   }),
//   highSchool: z.string().min(2, {
//     message: "Please enter your high school name.",
//   }),
//   gpa: z.string().refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) >= 0 && parseFloat(val) <= 4, {
//     message: "GPA must be a number between 0 and 4.",
//   }),
//   graduationYear: z.string().refine((val) => !isNaN(parseInt(val)) && parseInt(val) > 1900 && parseInt(val) <= new Date().getFullYear(), {
//     message: "Please enter a valid graduation year.",
//   }),
//   program: z.string({
//     required_error: "Please select a program.",
//   }),
//   essay: z.string().min(100, {
//     message: "Your essay must be at least 100 characters.",
//   }),
// })

// export default function ApplyNow() {
//   const [isSubmitting, setIsSubmitting] = useState(false)

//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       firstName: "",
//       lastName: "",
//       email: "",
//       phone: "",
//       address: "",
//       highSchool: "",
//       gpa: "",
//       graduationYear: "",
//       essay: "",
//     },
//   })

//   function onSubmit(values: z.infer<typeof formSchema>) {
//     setIsSubmitting(true)
//     // Simulate API call
//     setTimeout(() => {
//       setIsSubmitting(false)
//       toast({
//         title: "Application Submitted",
//         description: "Thank you for applying to ASC College. We will review your application and get back to you soon.",
//       })
//       console.log(values)
//     }, 2000)
//   }

//   return (
//     <div className="space-y-16">
//       {/* Hero Section */}
//       <section className="relative h-[40vh] flex items-center justify-center">
//         <Image
//           src="/placeholder.svg?height=1080&width=1920"
//           alt="Apply to ASC College"
//           fill
//           className="object-cover"
//           priority
//         />
//         <div className="absolute inset-0 bg-black/50" />
//         <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto px-4">
//           <h1 className="text-4xl md:text-6xl font-bold text-white">
//             Apply to ASC College
//           </h1>
//           <p className="text-xl text-white/90 max-w-2xl mx-auto">
//             Take the first step towards your future. Fill out our application form below.
//           </p>
//         </div>
//       </section>

//       {/* Application Form */}
//       <section className="container mx-auto px-4 pb-16">
//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-2xl mx-auto">
//             <div className="grid md:grid-cols-2 gap-6">
//               <FormField
//                 control={form.control}
//                 name="firstName"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>First Name</FormLabel>
//                     <FormControl>
//                       <Input placeholder="John" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="lastName"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Last Name</FormLabel>
//                     <FormControl>
//                       <Input placeholder="Doe" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </div>
//             <div className="grid md:grid-cols-2 gap-6">
//               <FormField
//                 control={form.control}
//                 name="email"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Email</FormLabel>
//                     <FormControl>
//                       <Input placeholder="johndoe@example.com" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="phone"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Phone Number</FormLabel>
//                     <FormControl>
//                       <Input placeholder="(123) 456-7890" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </div>
//             <FormField
//               control={form.control}
//               name="dob"
//               render={({ field }) => (
//                 <FormItem className="flex flex-col">
//                   <FormLabel>Date of Birth</FormLabel>
//                   <Popover>
//                     <PopoverTrigger asChild>
//                       <FormControl>
//                         <Button
//                           variant={"outline"}
//                           className={cn(
//                             "w-full pl-3 text-left font-normal",
//                             !field.value && "text-muted-foreground"
//                           )}
//                         >
//                           {field.value ? (
//                             field.value.toLocaleDateString()
//                           ) : (
//                             <span>Pick a date</span>
//                           )}
//                           <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
//                         </Button>
//                       </FormControl>
//                     </PopoverTrigger>
//                     <PopoverContent className="w-auto p-0" align="start">
//                       <Calendar
//                         mode="single"
//                         selected={field.value}
//                         onSelect={field.onChange}
//                         disabled={(date) =>
//                           date > new Date() || date < new Date("1900-01-01")
//                         }
//                         initialFocus
//                       />
//                     </PopoverContent>
//                   </Popover>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="address"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Address</FormLabel>
//                   <FormControl>
//                     <Input placeholder="123 Main St, City, State, ZIP" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <div className="grid md:grid-cols-3 gap-6">
//               <FormField
//                 control={form.control}
//                 name="highSchool"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>High School</FormLabel>
//                     <FormControl>
//                       <Input placeholder="Central High School" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="gpa"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>GPA</FormLabel>
//                     <FormControl>
//                       <Input placeholder="3.5" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="graduationYear"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Graduation Year</FormLabel>
//                     <FormControl>
//                       <Input placeholder="2023" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </div>
//             <FormField
//               control={form.control}
//               name="program"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Desired Program</FormLabel>
//                   <Select onValueChange={field.onChange} defaultValue={field.value}>
//                     <FormControl>
//                       <SelectTrigger>
//                         <SelectValue placeholder="Select a program" />
//                       </SelectTrigger>
//                     </FormControl>
//                     <SelectContent>
//                       <SelectItem value="arts">Arts</SelectItem>
//                       <SelectItem value="science">Science</SelectItem>
//                       <SelectItem value="commerce">Commerce</SelectItem>
//                     </SelectContent>
//                   </Select>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="essay"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Personal Statement</FormLabel>
//                   <FormControl>
//                     <Textarea
//                       placeholder="Tell us about yourself and why you want to join ASC College..."
//                       className="resize-none"
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormDescription>
//                     Minimum 100 characters. This is your chance to stand out!
//                   </FormDescription>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <Button type="submit" className="w-full" disabled={isSubmitting}>
//               {isSubmitting ? "Submitting..." : "Submit Application"}
//             </Button>
//           </form>
//         </Form>
//       </section>
//     </div>
//   )
// }