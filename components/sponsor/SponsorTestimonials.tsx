import Image from 'next/image'

export function SponsorTestimonials() {
  return (
    <section className="py-16">

      <h2 className="text-4xl font-bold font-heading text-center mb-16 text-gray-900 dark:text-white">
        Testimonials
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3">
              <Image
                src="https://calhacks-sierra.s3-us-west-2.amazonaws.com/assets/images/cal_hacks_1.jpg"
                alt="Cal Hacks event"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 md:w-2/3">
              <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                &quot;The UC Berkeley AI Hackathon 2025 exceeded all expectations and stands out as one of the most
                professionally organized events we’ve sponsored. From pre-event coordination to on-site support, every 
                detail was thoughtfully managed. The high-caliber students built sophisticated projects, and the seamless 
                operations allowed us to focus entirely on meaningful engagement. 
              </p>
              <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                I wholeheartedly recommend the UC Berkeley AI Hackathon as a premier sponsorship opportunity. This event 
                delivers measurable business value while supporting exceptional AI talent.
                &quot;
              </p>
              <p className="text-gray-600 dark:text-gray-400 font-bold">
                — Vapi, 3x sponsor
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3">
              <Image
                src="https://calhacks-sierra.s3-us-west-2.amazonaws.com/assets/images/cal_hacks_2.jpg"
                alt="Cal Hacks event"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 md:w-2/3">
              <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                &quot;Cal Hacks attracts hackers and as a loyal sponsor since Cal Hacks 2.0, I would not miss this 
                event in the world to attract and recruit talents and put any of my companies’ technology to its 
                critical tests for hackers to break them. Imagine the amount of money you can save from your 
                engineering cost. Do not miss this event!” Top-talent future leaders and unicorns.&quot;
              </p>
              <p className="text-gray-600 dark:text-gray-400 font-bold">
                — Zepp Health, long-time sponsor
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
