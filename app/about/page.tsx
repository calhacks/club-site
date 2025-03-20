"use client"

import Image from 'next/image'
import { directors } from '@/data/directors'
import { useTheme } from 'next-themes';
import { alum } from '@/data/alum'

export default function AboutPage() {
  const { theme, setTheme } = useTheme()

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 relative rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="/images/team.jpg" 
                alt="Hackathons at Berkeley Team" 
                width={800} 
                height={600}
                className="w-full h-auto"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                About Us
              </h1>
              <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
                We're a nonprofit organization composed of students passionate about
                fostering a culture of hacking, entrepreneurship, and social good
                via the empowerment of technology.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Our mission is to empower others with technology to create solutions
                to better the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            Our Team
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {directors.sort((a, b) => a.firstName.localeCompare(b.firstName)).map((director, index) => {
              
              return (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-full aspect-square relative rounded-full overflow-hidden mb-3 border-2 border-primary/20">
                    <Image src={director.image} alt={`${director.firstName} ${director.lastName}`} fill className="object-cover" />
                  </div>
                  <a 
                    href={director.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`font-bold text-center text-gray-900 dark:text-white ${director.linkedin !== '#' ? 'hover:text-primary dark:hover:text-primary/90' : ''} transition-colors`}
                  >
                    {director.firstName} {director.lastName}
                  </a>
                </div>
              );
            })}
          </div>
          <div className="mt-16 text-center">
            <p className="text-lg ">
              Have a question for us? Email{' '}
              <a href="mailto:team@calhacks.io">team@calhacks.io</a>
            </p>
          </div>
        </div>
      </section>

      {/* Beyond Cal Hacks Section */}
      <section className="py-20 px-6">
        <div className="flex flex-col items-center max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center dark:text-white">
            Beyond Hackathons at Berkeley
          </h2>
          <p className="text-lg text-center mb-12 dark:text-white">
            Our members and alumni have continued their success through
            internships and full-time employment across a variety of industries.
          </p>
          <div className="w-3/4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-2 gap-x-0 items-center justify-items-center">
            {alum.map((company, index) => (
              <a 
                key={index} 
                href={company.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full max-w-[150px] h-[100px] bg-white p-4 rounded-md flex items-center justify-center transition-transform hover:scale-105"
              >
                <Image 
                  src={company.image.src} 
                  alt={company.image.alt} 
                  width={company.image.width} 
                  height={company.image.height} 
                  className="w-full h-auto object-contain max-h-[70px]" 
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 