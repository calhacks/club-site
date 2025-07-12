'use client'

import { createClient } from "@/utils/supabase/client"
import { useState } from "react"
import { toast } from "sonner"

export default function ContactUs() {
    const [email, setEmail] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const supabase = createClient()
            const { error } = await supabase.from('calhacks-12.0-interest-form').insert({ email })
            if (error) {
                console.error('Error submitting form:', error)
                toast.error('Error submitting form')
            }

            toast.success('Successfully signed up for updates!')
            setEmail('')

        } catch (error) {
            console.error('Error submitting form:', error)
            // Could add an error toast here
        }
    }

    return (
        <section className="w-full flex flex-col items-center justify-center py-16 md:py-24">

            <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                    Enter your email to get updates.
                </h2>
                <p className="text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                    We&apos;ll send you updates about our events and hackathons.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto md:mx-0">
                <div className="flex gap-2">
                    <input
                        type="email"
                        placeholder="ddoski@berkeley.edu"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary/90 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    />
                    <button
                        type="submit"
                        className="px-6 py-2 bg-primary dark:bg-primary/90 text-white rounded-lg hover:bg-primary/80 dark:hover:bg-primary/70 transition-colors"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </section>
    )
}