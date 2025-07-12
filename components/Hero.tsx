'use client'

import Image from 'next/image'
import { FloatingSpritesContainer } from './FloatingSpritesContainer'
import Link from 'next/link'

export function Hero() {
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
                    </p>

                    <p className="text-lg mt-4 leading-6 text-gray-600 dark:text-gray-300">
                        Interested in sponsoring? Learn more <Link href="/sponsor" className="font-bold hover:underline text-primary">here</Link>.
                    </p>
                </div>
            </div>
        </div>
    )
} 
