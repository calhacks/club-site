import Image from 'next/image'
import { FaUsers, FaClock, FaLaptopCode, FaUniversity } from 'react-icons/fa'

export function SponsorStats() {
  return (
    <section id="sponsor-content" className="py-4">

      <h2 className="text-4xl font-bold font-heading text-center mb-16 text-gray-900 dark:text-white">
        Be a part of...
      </h2>

      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">2,000+</p>
            <p className="text-lg text-gray-600 dark:text-gray-300">Hackers</p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">36</p>
            <p className="text-lg text-gray-600 dark:text-gray-300">Hours</p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">300+</p>
            <p className="text-lg text-gray-600 dark:text-gray-300">Projects</p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">50+</p>
            <p className="text-lg text-gray-600 dark:text-gray-300">Schools</p>
          </div>
        </div>
      </div>
    </section>
  )
} 