'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface Initiative {
  name: string;
  description: string;
  image: string;
  link: string;
}

const initiatives: Initiative[] = [
  {
    name: "Cal Hacks",
    description: "Cal Hacks, our flagship hackathon hosted in San Francisco, is where the technology of the future is born.",
    image: "/images/initiatives/calhacks11.jpeg",
    link: "https://calhacks.io"
  },
  {
    name: "UC Berkeley AI Hackathon",
    description: "Hackathon focused on AI, hosted at UC Berkeley by us!",
    image: "/images/initiatives/ai2.jpg",
    link: "https://ai.hackberkeley.org/"
  },
  {
    name: "Cubstart",
    description: "Cubstart is a web/mobile development decal course for beginner to intermediate developers at UC Berkeley.",
    image: "/images/initiatives/cubstart.jpg",
    link: "http://cubstart.com"
  },
];

export function Initiatives() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Our Initiatives
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            We run various programs throughout the year to empower students with technology and foster innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initiatives.map((initiative) => (
            <motion.div
              key={initiative.name}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm h-full flex flex-col"
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="h-48 relative">
                <Image
                  src={initiative.image}
                  alt={initiative.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold mb-2">
                  {initiative.name}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6 flex-grow">
                  {initiative.description}
                </p>
                <a
                  href={initiative.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors text-center"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 