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
                I wholeheartedly recommend Berkeley AI Hackathon as a premier sponsorship opportunity. This event 
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
                &quot;Cal Hacks 6.0 blew me away... We were astounded by both the
                creativity and resolve demonstrated at Cal Hacks. We wish we could
                have given all of our integrations an award.&quot;
              </p>
              <p className="text-gray-600 dark:text-gray-400 font-bold">
                — DocuSign
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
