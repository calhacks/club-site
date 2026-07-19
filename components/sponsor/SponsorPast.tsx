import Image from 'next/image'
import Logos from "@/assets/images/ai-spons-logos.svg";

export function SponsorPast() {
  return (
    <div className="py-16 grid grid-cols-2 gap-16">
      <section>
        <h2 className="text-4xl font-bold font-heading text-center mb-16 text-gray-900 dark:text-white">
          AI Hackathon 2026 Sponsors
        </h2>
        
        <div className="flex justify-center invert dark:invert-0">
          <Image 
            src={Logos}
            alt="Past sponsors grid"
            height={600}
            className="w-full max-w-4xl"
          />
        </div>
      </section>
      <section>
          <h2 className="text-4xl font-bold font-heading text-center mb-16 text-gray-900 dark:text-white">
            Cal Hacks 12.0 Sponsors
          </h2>
          
          <div className="flex justify-center invert dark:invert-0">
            <Image 
              src="/vectors/sponsors.svg"
              alt="Past sponsors grid"
              width={1000}
              height={600}
              className="w-full max-w-4xl"
            />
          </div>
      </section></div>
  )
} 
