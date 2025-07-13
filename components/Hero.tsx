'use client'

import Image from 'next/image'
import { useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import { toast } from "sonner"
import { FloatingSpritesContainer } from './FloatingSpritesContainer'
import Link from 'next/link'

export function Hero() {
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
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                {/* Left side - Image */}
                <div className="relative w-full md:w-1/2">
                    <Image
                        src="/branding/coding-ddoski.svg"
                        alt="Coding Ddoski"
                        width={500}
                        height={500}
                        className="dark:brightness-110 dark:contrast-105"
                    />

                    {/* Floating sprites */}
                    <FloatingSpritesContainer containerWidth={400} baseScale={0.4} count={2} />
                </div>

                {/* Right side - Content */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                        Hackathons @ Berkeley
                    </h1>
                    <p className="text-lg mb-8 leading-6 text-gray-600 dark:text-gray-300">
                        Hackathons @ Berkeley is a team of students cultivating a platform where people can build, learn, and experiment
                        without boundaries. We host Cal Hacks, our flagship hackathon, alongside other hackathons every year!
                        <br /><br />
                        Our next event is <Link href="/event" className="font-bold hover:underline text-primary">Cal Hacks 12.0</Link>,
                        happening <span className="font-bold">October 24-26, 2025</span> in <span className="font-bold">San Francisco</span>!
                        Enter your email to get updates.
                    </p>

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

                    <p className="text-lg mt-4 leading-6 text-gray-600 dark:text-gray-300">
                        Interested in sponsoring? Learn more <Link href="/sponsor" className="font-bold hover:underline text-primary">here</Link>.
                    </p>
                </div>
            </div>
        </div>
    )
} 